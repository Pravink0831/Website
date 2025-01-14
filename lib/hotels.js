const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  id: Number,
  tag: String,
  slideImg: { type: [String] },
  img: String,
  title: String,
  location: String,
  ratings: String,
  numberOfReviews: String,
  price: String,
  delayAnimation: String,
  city: String,
}, { collection: 'properties' });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

module.exports = { Property };
