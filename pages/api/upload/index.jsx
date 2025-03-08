import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { connect } from '../../../lib/mongodb';

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 25 * 1024 * 1024, // 25MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check file type
    if (!file.mimetype.match(/^image\/(jpeg|png)$/)) {
      cb(new Error('Only JPEG and PNG files are allowed'), false);
      return;
    }
    cb(null, true);
  }
});

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

  // Add more detailed logging
  console.log('Starting upload handler');
  console.log('Cloudinary config:', {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Not set',
    api_key: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Not set',
    api_secret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Not set'
  });

  try {
    await connect();
    console.log("Database connected successfully");

    upload.fields([
      { name: 'img', maxCount: 1 },
      { name: 'slideImg', maxCount: 10 }
    ])(req, res, async (err) => {
      if (err) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: err.message });
      }

      try {
        if (!req.files || (!req.files.img && !req.files.slideImg)) {
          console.error('No files received');
          return res.status(400).json({ error: 'No files uploaded' });
        }

        console.log('Files received:', {
          img: req.files.img?.length,
          slideImg: req.files.slideImg?.length
        });

        const uploadToCloudinary = async (buffer) => {
          return new Promise((resolve, reject) => {
            console.log('Starting Cloudinary upload');
            const uploadStream = cloudinary.uploader.upload_stream(
              { 
                resource_type: 'auto',
                transformation: [
                  { width: 1000, crop: "scale" }, // Resize large images to max width 1000px
                  { quality: "auto:good" }, // Automatic quality optimization
                  { fetch_format: "auto" }, // Automatic format optimization (webp when supported)
                  { flags: "lossy" } // Enable lossy compression
                ],
                folder: 'villa-uploads'
              },
              (error, result) => {
                if (error) {
                  console.error("Cloudinary upload error:", error);
                  reject(error);
                } else {
                  console.log("Cloudinary upload success, optimized size:", result.bytes);
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
        console.error('Upload error details:', {
          message: error.message,
          stack: error.stack,
          code: error.code
        });
        return res.status(500).json({ 
          error: 'Upload failed', 
          details: error.message,
          stack: error.stack 
        });
      }
    });
  } catch (error) {
    console.error('Server error details:', {
      message: error.message,
      stack: error.stack
    });
    return res.status(500).json({ 
      error: 'Server error', 
      details: error.message,
      stack: error.stack 
    });
  }
}
