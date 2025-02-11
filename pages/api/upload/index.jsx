import { connect } from '../../../lib/mongodb';
import { ImageUpload } from '../../../lib/schema';
import formidable from 'formidable';
import os from 'os';

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connect();

    const form = formidable({
      uploadDir: os.tmpdir(),
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB limit
      filter: function ({ name, originalFilename, mimetype }) {
        return mimetype && mimetype.includes("image");
      },
    });

    const [fields, files] = await form.parse(req);
    const imageUrls = [];

    for (const fileArray of Object.values(files)) {
      for (const file of fileArray) {
        const imageDoc = await ImageUpload.create({
          contentType: file.mimetype,
          filename: file.originalFilename,
          path: file.filepath,
          size: file.size
        });

        imageUrls.push(`/api/images/${imageDoc._id}`);
      }
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
      error: error.message
    });
  }
}
