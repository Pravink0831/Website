import { connect } from '../../../lib/mongodb';
import { Contact } from '../../../lib/contactus';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'POST') {
    const { id, name,phone, email, message } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const newContact = new Contact({
        id,
        name,
        phone,
        email,
        message,
      });

      await newContact.save();
      res.status(201).json({ message: 'Contact added successfully!' });
    } catch (error) {
      console.error("Error adding contact:", error);
      res.status(500).json({ message: 'Failed to add contact.' });
    }
  } else if (req.method === 'PUT') {
    const { id, name, email, subject, message } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const updatedContact = await Contact.findOneAndUpdate(
        { id },
        {
          name,
          phone,
          email,
          
          message,
        },
        { new: true }
      );

      if (!updatedContact) {
        return res.status(404).json({ message: 'Contact not found.' });
      }

      res.status(200).json({ message: 'Contact updated successfully!', updatedContact });
    } catch (error) {
      console.error("Error updating contact:", error);
      res.status(500).json({ message: 'Failed to update contact.' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      console.log('Received Data:', req.body); // Log the received data

      const deletedContact = await Contact.findOneAndDelete({ id });

      if (!deletedContact) {
        return res.status(404).json({ message: 'Contact not found.' });
      }

      res.status(200).json({ message: 'Contact deleted successfully!' });
    } catch (error) {
      console.error("Error deleting contact:", error);
      res.status(500).json({ message: 'Failed to delete contact.' });
    }
  } else if (req.method === 'GET') {
    try {
      const contacts = await Contact.find({}, '_id name email subject message');
      console.log('Fetched Contacts:', contacts); // Log the fetched contacts
      res.status(200).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: 'Failed to fetch contacts.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
