'use client';

import { useState } from "react";
import axios from "axios";

const GalleryUploader = ({ images, setImages }) => {
  const [error, setError] = useState("");

  const validateImage = (file, maxSize) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (img.width > maxSize || img.height > maxSize) {
          reject(`Image ${file.name} exceeds the maximum size of ${maxSize}px.`);
        } else if (!["image/png", "image/jpeg"].includes(file.type.toLowerCase())) {
          reject(`Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`);
        } else {
          resolve();
        }
      };
      img.onerror = () => {
        reject(`Image ${file.name} could not be loaded.`);
      };
      img.src = URL.createObjectURL(file); // Use createObjectURL for faster loading
    });
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("slideImg", file);

    try {
      console.log("Uploading image:", file.name);
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload response:", response.data);

      let imageUrls = [];
      if (Array.isArray(response.data.slideImgUrls)) {
        imageUrls = response.data.slideImgUrls;
      } else if (response.data.imgUrl) {
        imageUrls = [response.data.imgUrl];
      } else {
        console.warn("Unexpected response structure:", response.data);
        throw new Error("Unexpected response structure from upload API");
      }

      return imageUrls;
    } catch (err) {
      console.error("Upload error:", err.response?.data?.message || "Image upload failed.");
      throw new Error(err.response?.data?.message || "Image upload failed.");
    }
  };

  const handleFileUpload = async (event) => {
    const fileList = Array.from(event.target.files); // Convert FileList to Array
    const maxSize = 1800; // in pixels

    setError(""); // Clear previous errors

    try {
      // Validate all images first
      await Promise.all(fileList.map(file => validateImage(file, maxSize)));

      // Upload all images in parallel
      const imageUrlsArrays = await Promise.all(fileList.map(uploadImage));

      // Flatten the array of arrays into a single array of URLs
      const imageUrls = imageUrlsArrays.flat();

      // Log the image URLs to verify
      console.log("Uploaded image URLs:", imageUrls);

      // Update the state with the new images
      setImages(prevImages => [...prevImages, ...imageUrls]);
    } catch (err) {
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
          <input type="file" id="galleryUpload" multiple accept="image/png, image/jpeg" className="d-none" onChange={handleFileUpload} />
          <div className="text-start mt-10 text-14 text-light-1">PNG or JPG no bigger than 800px wide and tall.</div>
        </div>
      </div>
      {/* End uploader field */}

      {images.map((image, index) => (
        <div className="col-auto" key={index}>
          <div className="d-flex ratio ratio-1:1 w-200">
            <img src={image} alt="image" className="img-ratio rounded-4" />
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