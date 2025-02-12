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

  await connect();

  upload.fields([
    { name: 'img', maxCount: 1 },
    { name: 'slideImg', maxCount: 10 }
  ])(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const uploadToCloudinary = async (buffer) => {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto' },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          uploadStream.end(buffer);
        });
      };

      let imgUrl = null;
      let slideImgUrls = [];

      if (req.files.img) {
        const result = await uploadToCloudinary(req.files.img[0].buffer);
        imgUrl = result.secure_url;
      }

      if (req.files.slideImg) {
        const uploads = req.files.slideImg.map(file => uploadToCloudinary(file.buffer));
        const results = await Promise.all(uploads);
        slideImgUrls = results.map(result => result.secure_url);
      }

      res.status(200).json({
        message: 'Upload successful',
        imgUrl,
        slideImgUrls
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Upload failed' });
    }
  });
}
