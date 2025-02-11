import { connect } from '../../../lib/mongodb';
import { Property } from '../../../lib/hotels';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  await connect();
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const property = await Property.findById(new ObjectId(id));
      if (!property) {
        return res.status(404).json({ message: 'Hotel not found.' });
      }
      res.status(200).json(property);
    } catch (error) {
      console.error("Error fetching hotel:", error);
      res.status(500).json({ message: 'Failed to fetch hotel.', error: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const updatedProperty = await Property.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      
      if (!updatedProperty) {
        return res.status(404).json({ message: 'Hotel not found' });
      }
      res.status(200).json(updatedProperty);
    } catch (error) {
      console.error("Error updating hotel:", error);
      res.status(500).json({ message: 'Failed to update hotel', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedProperty = await Property.findOneAndDelete({ _id: new ObjectId(id) });
      if (!deletedProperty) {
        return res.status(404).json({ message: 'Hotel not found.' });
      }
      res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (error) {
      console.error("Error deleting hotel:", error);
      res.status(500).json({ message: 'Failed to delete hotel.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
