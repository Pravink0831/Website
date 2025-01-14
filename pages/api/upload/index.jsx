import multer from 'multer';
import { connect } from '../../../lib/mongodb';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Directory to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

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
      return res.status(500).json({ message: 'Failed to upload images.', error: err.message });
    }

    try {
      const imgUrl = req.files.img ? `/uploads/${req.files.img[0].filename}` : null;
      let slideImgUrls = req.files.slideImg ? req.files.slideImg.map(file => `/uploads/${file.filename}`) : [];
      slideImgUrls = slideImgUrls.flat();

      res.status(200).json({ message: 'Images uploaded successfully!', imgUrl, slideImgUrls });
    } catch (error) {
      console.error("Error processing images:", error);
      return res.status(500).json({ message: 'Error processing images.', error: error.message });
    }
  });
}
