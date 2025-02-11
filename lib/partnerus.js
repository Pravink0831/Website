const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  id: Number,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    location: String,
    propertytype: String,
    amenities: String,
    additionalinfo: String,
}, { collection: 'partner' });

const Partner = mongoose.models.Partner || mongoose.model('Partner', partnerSchema);

module.exports = { Partner };
