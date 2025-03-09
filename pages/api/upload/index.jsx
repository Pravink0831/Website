import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { connect } from '../../../lib/mongodb';

const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    console.log("Method not allowed:", req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connect();
    console.log("Database connected successfully");
  } catch (dbError) {
    console.error("Database connection error:", dbError);
    return res.status(500).json({ error: 'Database connection failed', details: dbError.message });
  }

  upload.fields([
    { name: 'img', maxCount: 1 },
    { name: 'slideImg', maxCount: 10 }
  ])(req, res, async (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(500).json({ error: err.message });
    }

    try {
      console.log("Request files:", req.files); // Log the files received

      const uploadToCloudinary = async (buffer) => {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto' },
            (error, result) => {
              if (error) {
                console.error("Cloudinary upload error:", error);
                reject(error);
              } else {
                console.log("Cloudinary upload result:", result);
                resolve(result);
              }
            }
          );
          uploadStream.end(buffer);
        });
      };

      let imgUrl = null;
      let slideImgUrls = [];

      if (req.files.img) {
        try {
          const result = await uploadToCloudinary(req.files.img[0].buffer);
          imgUrl = result.secure_url;
          console.log("Banner image URL:", imgUrl);
        } catch (cloudinaryError) {
          console.error("Error uploading banner image to Cloudinary:", cloudinaryError);
          return res.status(500).json({ error: 'Cloudinary upload failed', details: cloudinaryError.message });
        }
      }

      if (req.files.slideImg) {
        try {
          const uploads = req.files.slideImg.map(file => uploadToCloudinary(file.buffer));
          const results = await Promise.all(uploads);
          slideImgUrls = results.map(result => result.secure_url);
          console.log("Gallery image URLs:", slideImgUrls);
        } catch (cloudinaryError) {
          console.error("Error uploading gallery images to Cloudinary:", cloudinaryError);
          return res.status(500).json({ error: 'Cloudinary upload failed', details: cloudinaryError.message });
        }
      }

      res.status(200).json({
        message: 'Upload successful',
        imgUrl,
        slideImgUrls
      });
    } catch (error) {
      console.error('General upload error:', error);
      res.status(500).json({ error: 'Upload failed', details: error.message });
    }
  });
}
