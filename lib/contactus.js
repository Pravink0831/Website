import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { collection: 'contact' });

export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
