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

      if (req.files.img) {
        // Single banner image upload
        const result = await uploadToCloudinary(req.files.img[0].buffer);
        res.status(200).json({
          message: 'Upload successful',
          imgUrl: result.secure_url,
          slideImgUrls: null
        });
      } else if (req.files.slideImg) {
        // Gallery images upload - always return as array
        const result = await uploadToCloudinary(req.files.slideImg[0].buffer);
        res.status(200).json({
          message: 'Upload successful',
          imgUrl: null,
          slideImgUrls: [result.secure_url] // Always return as array
        });
      }

    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Upload failed', details: error.message });
    }
  });
}
