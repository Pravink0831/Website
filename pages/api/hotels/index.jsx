import { connect } from '../../../lib/mongodb';
import { Property } from '../../../lib/hotels';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'POST') {
    try {
      // No need to transform the data as it's already in the correct structure
      const newProperty = new Property(req.body);
      await newProperty.save();
      res.status(201).json({ message: 'Villa added successfully!' });
    } catch (error) {
      console.error("Error adding villa:", error);
      res.status(500).json({ message: 'Failed to add villa.', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id, ...updateData } = req.body;
    try {
      const updatedProperty = await Property.findOneAndUpdate(
        { _id: new ObjectId(id) },
        updateData,
        { new: true }
      );

      if (!updatedProperty) {
        return res.status(404).json({ message: 'Villa not found.' });
      }

      res.status(200).json({ message: 'Villa updated successfully!', updatedProperty });
    } catch (error) {
      console.error("Error updating villa:", error);
      res.status(500).json({ message: 'Failed to update villa.', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const deletedProperty = await Property.findOneAndDelete({ _id: new ObjectId(id) });

      if (!deletedProperty) {
        return res.status(404).json({ message: 'Villa not found.' });
      }

      res.status(200).json({ message: 'Villa deleted successfully!' });
    } catch (error) {
      console.error("Error deleting villa:", error);
      res.status(500).json({ message: 'Failed to delete villa.', error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const properties = await Property.find({}, '_id title price checkin checkout rooms location city');
      console.log('Fetched Properties:', properties); // Log the fetched properties
      res.status(200).json(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      res.status(500).json({ message: 'Failed to fetch properties.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
