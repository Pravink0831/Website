'use client';

import { useState } from "react";
import axios from "axios";

const BannerUploader = ({ bannerImage, setBannerImage }) => {
  const [error, setError] = useState("");

  const validateImage = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (!["image/png", "image/jpeg"].includes(file.type.toLowerCase())) {
          reject("Only PNG and JPEG files are allowed.");
        } else {
          resolve();
        }
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

      const formData = new FormData();
      formData.append("img", file);

      console.log("Uploading banner image:", file.name); // Add this line
      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Banner upload response:", response.data); // Add this line
      setBannerImage(response.data.imgUrl);
      setError("");
    } catch (err) {
      console.error("Banner upload error:", err); // Add this line
      setError(err.message || "Upload failed");
    }
  };

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor="bannerUpload" className="d-flex ratio ratio-1:1">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">Upload Banner</div>
            </div>
          </label>
          <input
            type="file"
            id="bannerUpload"
            accept="image/png, image/jpeg"
            className="d-none"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      {bannerImage && (
        <div className="col-auto">
          <div className="d-flex ratio ratio-1:1 w-200">
            <img src={bannerImage} alt="banner" className="img-ratio rounded-4" />
            <div
              className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
              onClick={() => setBannerImage(null)}
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
