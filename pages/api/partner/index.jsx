import { connect } from '../../../lib/mongodb';
import { Partner } from '../../../lib/partnerus';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'POST') {
    const { id, firstname, lastname, email, phone, location, propertytype, amenities, additionalinfo } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const newPartner = new Partner({
        id,
        firstname,
        lastname,
        email,
        phone,
        location,
        propertytype,
        amenities,
        additionalinfo,
      });

      await newPartner.save();
      res.status(201).json({ message: 'Partner added successfully!' });
    } catch (error) {
      console.error("Error adding partner:", error);
      res.status(500).json({ message: 'Failed to add partner.', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id, firstname, lastname, email, phone, location, propertytype, amenities, additionalinfo } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const updatedPartner = await Partner.findOneAndUpdate(
        { id },
        {
          firstname,
          lastname,
          email,
          phone,
          location,
          propertytype,
          amenities,
          additionalinfo,
        },
        { new: true }
      );

      if (!updatedPartner) {
        return res.status(404).json({ message: 'Partner not found.' });
      }

      res.status(200).json({ message: 'Partner updated successfully!', updatedPartner });
    } catch (error) {
      console.error("Error updating partner:", error);
      res.status(500).json({ message: 'Failed to update partner.', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const deletedPartner = await Partner.findOneAndDelete({ id });

      if (!deletedPartner) {
        return res.status(404).json({ message: 'Partner not found.' });
      }

      res.status(200).json({ message: 'Partner deleted successfully!' });
    } catch (error) {
      console.error("Error deleting partner:", error);
      res.status(500).json({ message: 'Failed to delete partner.', error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const partners = await Partner.find({}, 'id firstname lastname email phone location propertytype amenities additionalinfo');
      console.log('Fetched Partners:', partners); // Log the fetched partners
      res.status(200).json(partners);
    } catch (error) {
      console.error("Error fetching partners:", error);
      res.status(500).json({ message: 'Failed to fetch partners.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
