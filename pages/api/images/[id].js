import { connect } from '../../../lib/mongodb';
import { v2 as cloudinary } from 'cloudinary';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connect();
    const image = await ImageUpload.findById(req.query.id);
    
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    const imageUrl = image.url; // Assuming the URL is stored in the database
    res.setHeader('Content-Type', 'image/jpeg'); // Set appropriate content type
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.json({ url: imageUrl });
  } catch (error) {
    console.error('Error serving image:', error);
    res.status(500).json({ message: 'Error serving image' });
  }

}
