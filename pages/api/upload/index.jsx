import { connect } from '../../../lib/mongodb';
import { ImageUpload } from '../../../lib/schema'; // Add this schema
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await connect();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), 'public/uploads');
  
  // Create uploads directory if it doesn't exist
  if (!fs.existsSync(form.uploadDir)) {
    fs.mkdirSync(form.uploadDir, { recursive: true });
  }

  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const imageUrls = [];
    const isProduction = process.env.NODE_ENV === 'production';

    // Handle multiple files
    const fileArray = Object.values(files);
    for (const file of fileArray) {
      if (isProduction) {
        // In production, store as base64 in MongoDB
        const imageBuffer = fs.readFileSync(file.filepath);
        const base64Image = imageBuffer.toString('base64');
        const imageDoc = await ImageUpload.create({
          data: base64Image,
          contentType: file.mimetype
        });
        imageUrls.push(`/api/images/${imageDoc._id}`);
      } else {
        // In development, move file to uploads directory
        const filename = `${Date.now()}-${file.originalFilename}`;
        const newPath = path.join(form.uploadDir, filename);
        fs.renameSync(file.filepath, newPath);
        imageUrls.push(`/uploads/${filename}`);
      }
    }

    res.status(200).json({
      message: 'Upload successful',
      imgUrl: imageUrls[0], // For single image upload
      slideImgUrls: imageUrls // For multiple images
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error uploading file', error: error.message });
  }
}
