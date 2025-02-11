import { connect } from '../../../lib/mongodb';
import { ImageUpload } from '../../../lib/schema';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import os from 'os';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connect();

    const form = formidable({
      uploadDir: os.tmpdir(), // Use system temp directory
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB limit
    });

    const { files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ files });
      });
    });

    const imageUrls = [];
    const fileArray = Object.values(files);

    for (const file of fileArray) {
      // Read the file and convert to base64
      const imageBuffer = fs.readFileSync(file.filepath);
      const base64Image = imageBuffer.toString('base64');

      // Save to MongoDB
      const imageDoc = await ImageUpload.create({
        data: base64Image,
        contentType: file.mimetype,
        filename: file.originalFilename
      });

      imageUrls.push(`/api/images/${imageDoc._id}`);

      // Clean up temp file
      fs.unlinkSync(file.filepath);
    }

    res.status(200).json({
      message: 'Upload successful',
      imgUrl: imageUrls[0],
      slideImgUrls: imageUrls
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ 
      message: 'Error uploading file', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
