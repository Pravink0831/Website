import { connect } from '../../../lib/mongodb';
import { Property } from '../../../lib/hotels';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'POST') {
    const { id, tag, slideImg, img, title, location, ratings, numberOfReviews, price, delayAnimation, city } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const newProperty = new Property({
        id,
        tag,
        slideImg,
        img,
        title,
        location,
        ratings,
        numberOfReviews,
        price,
        delayAnimation,
        city,
      });

      await newProperty.save();
      res.status(201).json({ message: 'Hotel added successfully!' });
    } catch (error) {
      console.error("Error adding hotel:", error);
      res.status(500).json({ message: 'Failed to add hotel.' });
    }
  } else if (req.method === 'PUT') {
    const { id, tag, slideImg, img, title, location, ratings, numberOfReviews, price, delayAnimation, city } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const updatedProperty = await Property.findOneAndUpdate(
        { id },
        {
          tag,
          slideImg,
          img,
          title,
          location,
          ratings,
          numberOfReviews,
          price,
          delayAnimation,
          city,
        },
        { new: true }
      );

      if (!updatedProperty) {
        return res.status(404).json({ message: 'Hotel not found.' });
      }

      res.status(200).json({ message: 'Hotel updated successfully!', updatedProperty });
    } catch (error) {
      console.error("Error updating hotel:", error);
      res.status(500).json({ message: 'Failed to update hotel.' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const deletedProperty = await Property.findOneAndDelete({ id });

      if (!deletedProperty) {
        return res.status(404).json({ message: 'Hotel not found.' });
      }

      res.status(200).json({ message: 'Hotel deleted successfully!' });
    } catch (error) {
      console.error("Error deleting hotel:", error);
      res.status(500).json({ message: 'Failed to delete hotel.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}