'use client';

import { useState } from "react";
import axios from "axios";
import imageCompression from 'browser-image-compression';

const GalleryUploader = ({ images, setImages }) => {
  const [error, setError] = useState("");

  const validateGalleryImage = async (file) => {
    return new Promise(async (resolve, reject) => {
      // Check file size (10MB)
      const maxSize = 10 * 1024 * 1024;
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

  const uploadImage = async (file) => {
    try {
      // Compress and resize image
      const options = {
        maxSizeMB: 1, // Max output file size in MB
        maxWidthOrHeight: 4000, // Max width or height
        useWebWorker: true
      }
      const compressedFile = await imageCompression(file, options);

      const formData = new FormData();
      formData.append("slideImg", compressedFile);

      console.log("Uploading image:", compressedFile.name);
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload response:", response.data);

      // Handle multiple image URLs from response
      if (response.data.slideImgUrls && Array.isArray(response.data.slideImgUrls)) {
        return response.data.slideImgUrls; // Return array of URLs
      } else if (response.data.imgUrl) {
        return [response.data.imgUrl]; // Return single URL as array
      } else {
        console.warn("No valid image URLs in response:", response.data);
        throw new Error("No valid image URLs in response");
      }
    } catch (err) {
      console.error("Upload error:", err);
      throw new Error(err.message || "Image upload failed.");
    }
  };

  const handleFileUpload = async (event) => {
    const fileList = Array.from(event.target.files || []);
    setError("");

    try {
      const imageUrls = [];
      for (const file of fileList) {
        try {
          await validateGalleryImage(file);
          const urls = await uploadImage(file);
          imageUrls.push(...urls);
        } catch (uploadError) {
          console.error("Error uploading file:", file.name, uploadError);
          setError(`Error uploading ${file.name}: ${uploadError.message}`);
        }
      }

      if (imageUrls.length > 0) {
        setImages(prevImages => [...(prevImages || []), ...imageUrls]);
      }
    } catch (err) {
      console.error("Overall upload error:", err);
      setError(err.message || "Image upload failed.");
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor="galleryUpload" className="d-flex ratio ratio-1:1">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">Upload Images</div>
            </div>
          </label>
          <input 
            type="file" 
            id="galleryUpload" 
            multiple // This attribute allows multiple file selection
            accept="image/png, image/jpeg" 
            className="d-none" 
            onChange={handleFileUpload} 
          />
          <div className="text-start mt-10 text-14 text-light-1">PNG or JPG no bigger than 800px wide and tall.</div>
        </div>
      </div>
      {/* End uploader field */}

      {Array.isArray(images) && images.map((image, index) => (
        <div className="col-auto" key={index}>
          <div className="d-flex ratio ratio-1:1 w-200">
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="img-ratio rounded-4"
              onError={(e) => console.error(`Error loading image ${index}:`, image)} 
            />
            <div className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute" onClick={() => handleRemoveImage(index)}>
              <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                <i className="icon-trash text-16" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {error && <div className="col-12 mb-10 text-red-1">{error}</div>}
    </div>
  );
};

export default GalleryUploader;