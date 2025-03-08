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
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connect();
    
    // Handle both single and multiple file uploads
    upload.fields([
      { name: 'img', maxCount: 1 },
      { name: 'slideImg', maxCount: 10 }
    ])(req, res, async (err) => {
      if (err) {
        console.error("Upload error:", err);
        return res.status(500).json({ error: err.message });
      }

      try {
        const uploadToCloudinary = async (buffer) => {
          return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { 
                resource_type: 'auto',
                folder: 'villa-uploads'
              },
              (error, result) => {
                if (error) reject(error);
                else resolve(result.secure_url);
              }
            );
            uploadStream.end(buffer);
          });
        };

        // Handle single file upload
        if (req.files.img) {
          const imgUrl = await uploadToCloudinary(req.files.img[0].buffer);
          return res.status(200).json({
            message: 'Upload successful',
            imgUrl
          });
        }

        // Handle multiple file upload
        if (req.files.slideImg) {
          const uploadPromises = req.files.slideImg.map(file => uploadToCloudinary(file.buffer));
          const urls = await Promise.all(uploadPromises);
          return res.status(200).json({
            message: 'Upload successful',
            imgUrls: urls
          });
        }

        return res.status(400).json({ error: 'No files uploaded' });

      } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Upload failed', details: error.message });
      }
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
}
