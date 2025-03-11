'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import imageCompression from 'browser-image-compression';

const BannerUploader = ({ image, setImage, label = "Upload Image" }) => {
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateImage = async (file) => {
    return new Promise(async (resolve, reject) => {
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

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    try {
      await validateImage(file);

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 4000,
        useWebWorker: true
      }
      const compressedFile = await imageCompression(file, options);

      const formData = new FormData();
      formData.append("img", compressedFile);

      console.log("Uploading image:", compressedFile.name, compressedFile.size);
      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Upload response:", response.data);
      
      if (response.data && response.data.imgUrl) {
        const imageUrl = response.data.imgUrl;
        console.log("Setting image URL:", imageUrl);
        if (typeof setImage === 'function') {
          setImage(imageUrl);
        } else {
          console.error("setImage is not a function:", typeof setImage);
        }
        setError("");
      } else {
        console.error("Invalid response structure:", response.data);
        setError("Upload failed: Invalid response from server");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError(err.message || "Upload failed");
    }
  };

  const handleRemoveImage = () => {
    console.log("Removing image");
    setImage(null);
  };

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor={`upload-${label.replace(/\s+/g, '-')}`} className="d-flex ratio ratio-1:1">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">{label}</div>
            </div>
          </label>
          <input
            type="file"
            id={`upload-${label.replace(/\s+/g, '-')}`}
            accept="image/png, image/jpeg"
            className="d-none"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      {image && isClient && (
        <div className="col-auto">
          <div className="d-flex ratio ratio-1:1 w-200">
            <img src={image} alt={label.toLowerCase()} className="img-ratio rounded-4" />
            <div
              className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
              onClick={handleRemoveImage}
            >
              <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                <i className="icon-trash text-16" />
              </div>
            </div>
          </div>
        </div>
      )}

      {error && <div className="col-12 text-red-1">{error}</div>}
    </div>
  );
};

export default BannerUploader;
