import { connect } from '../../../lib/mongodb';
import { Contact } from '../../../lib/contactus';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'POST') {
    const { name, phone, email, message } = req.body;

    try {
      console.log('Received Data:', req.body);

      const newContact = new Contact({
        id: uuidv4(), // Generate UUID for id
        name,
        phone,
        email,
        message,
      });

      await newContact.save();
      res.status(201).json({ message: 'Contact added successfully!' });
    } catch (error) {
      console.error("Error adding contact:", error);
      res.status(500).json({ message: 'Failed to add contact.', error: error.message }); // Include error message
    }
  } else if (req.method === 'PUT') {
    const { id, name, phone, email, message } = req.body;

    try {
      console.log('Received Data:', req.body);

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
      res.status(500).json({ message: 'Failed to update contact.', error: error.message }); // Include error message
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      console.log('Received Data:', req.body);

      const deletedContact = await Contact.findOneAndDelete({ id });

      if (!deletedContact) {
        return res.status(404).json({ message: 'Contact not found.' });
      }

      res.status(200).json({ message: 'Contact deleted successfully!' });
    } catch (error) {
      console.error("Error deleting contact:", error);
      res.status(500).json({ message: 'Failed to delete contact.', error: error.message }); // Include error message
    }
  } else if (req.method === 'GET') {
    try {
      const contacts = await Contact.find({}, '_id name phone email message');
      console.log('Fetched Contacts:', contacts);
      res.status(200).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: 'Failed to fetch contacts.', error: error.message }); // Include error message
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
