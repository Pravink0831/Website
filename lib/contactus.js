const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  id: Number,
  name: String,
  phone:Number,
  email: String,
    
    message: String,
}, { collection: 'contact' });

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

module.exports = { Contact };
