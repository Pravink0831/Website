'use client';

import { useState } from "react";
import axios from "axios";
import imageCompression from 'browser-image-compression';

const GalleryUploader = ({ images = [], setImages }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [localImages, setLocalImages] = useState(images); // Add local state

  const validateImage = async (file) => {
    return new Promise(async (resolve, reject) => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        reject(`File size must be less than 10MB. Current size: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (!["image/png", "image/jpeg"].includes(file.type.toLowerCase())) {
          reject("Only PNG and JPEG files are allowed");
          return;
        }
        resolve();
      };
      img.onerror = () => reject("Invalid image file");
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    setError("");
    setLoading(true);
    const currentImages = [...localImages]; // Use local state

    try {
      for (const file of files) {
        try {
          await validateImage(file);

          // Compress image
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 4000,
            useWebWorker: true
          };
          const compressedFile = await imageCompression(file, options);

          const formData = new FormData();
          formData.append("slideImg", compressedFile); // Use slideImg instead of img

          console.log("Uploading gallery image:", compressedFile.name);
          const response = await axios.post("/api/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          console.log("Gallery upload response:", response.data);

          if (response.data?.slideImgUrls?.[0]) {
            const imageUrl = response.data.slideImgUrls[0];
            console.log("Adding gallery image URL:", imageUrl);
            currentImages.push(imageUrl);
            setLocalImages(currentImages); // Update local state
            setImages(currentImages); // Update parent state
          } else {
            console.error("Invalid response structure:", response.data);
            setError("Upload failed: Invalid response from server");
          }
        } catch (uploadError) {
          console.error(`Error uploading ${file.name}:`, uploadError);
          setError(`Error uploading ${file.name}: ${uploadError.message}`);
        }
      }
    } catch (err) {
      console.error("Overall upload error:", err);
      setError(err.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = localImages.filter((_, i) => i !== index);
    setLocalImages(newImages);
    setImages(newImages);
  };

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor="galleryUpload" className="d-flex ratio ratio-1:1">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              {loading ? (
                <div className="spinner-border text-blue-1" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  <div className="icon-upload-file text-40 text-blue-1 mb-10" />
                  <div className="text-blue-1 fw-500">Upload Images</div>
                </>
              )}
            </div>
          </label>
          <input 
            type="file" 
            id="galleryUpload" 
            multiple
            accept="image/png, image/jpeg" 
            className="d-none" 
            onChange={handleFileUpload} 
            disabled={loading}
          />
        </div>
      </div>

      {localImages.length > 0 && ( // Use local state for rendering
        <div className="col-12">
          <div className="row x-gap-20 y-gap-20">
            {localImages.map((image, index) => (
              <div className="col-auto" key={`gallery-${index}`}>
                <div className="d-flex ratio ratio-1:1 w-200">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="img-ratio rounded-4"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      console.error(`Failed to load image: ${image}`);
                      e.target.src = '/img/placeholder.png'; // Add a placeholder image
                    }}
                  />
                  <div className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute">
                    <button
                      type="button"
                      className="size-40 bg-white rounded-4 flex-center cursor-pointer"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <i className="icon-trash text-16" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && <div className="col-12 mb-10 text-red-1">{error}</div>}
    </div>
  );
};

export default GalleryUploader;