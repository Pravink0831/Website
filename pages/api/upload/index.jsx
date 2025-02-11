import multer from 'multer';
import { connect } from '../../../lib/mongodb';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'public/uploads';

    // Create the directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.jpg', '.jpeg', '.png', '.gif']; // Example allowed types
  const extname = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(extname)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, JPEG, PNG, and GIF are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await connect();

  upload.fields([{ name: 'img', maxCount: 1 }, { name: 'slideImg', maxCount: 10 }])(req, res, async (err) => {
    if (err) {
      console.error("Failed to upload images:", err);
      return res.status(400).json({ message: err.message || 'Failed to upload images.' }); // Send a 400 status for client errors
    }

    try {
      const imgUrl = req.files?.img ? `/uploads/${req.files.img[0].filename}` : null;
      let slideImgUrls = req.files?.slideImg ? req.files.slideImg.map(file => `/uploads/${file.filename}`) : [];
      slideImgUrls = slideImgUrls.flat();

      res.status(200).json({ message: 'Images uploaded successfully!', imgUrl, slideImgUrls });
    } catch (error) {
      console.error("Error processing images:", error);
      return res.status(500).json({ message: 'Error processing images.', error: error.message });
    }
  });
}
