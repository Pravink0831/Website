import { connect } from '../../../lib/mongodb';
import { Contact } from '../../../lib/contactus';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  await connect();

  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const contact = await Contact.findById(new ObjectId(id));
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found.' });
      }
      res.status(200).json(contact);
    } catch (error) {
      console.error("Error fetching contact:", error);
      res.status(500).json({ message: 'Failed to fetch contact.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
