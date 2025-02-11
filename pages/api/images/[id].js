import { connect } from '../../../lib/mongodb';
import { ImageUpload } from '../../../lib/schema';
import { ObjectId } from 'mongodb';
import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connect();
    const image = await ImageUpload.findById(new ObjectId(req.query.id));
    
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    const imageBuffer = await fs.readFile(image.path);
    res.setHeader('Content-Type', image.contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error serving image:', error);
    res.status(500).json({ message: 'Error serving image' });
  }
}
