import mongoose from 'mongoose';

const facilityItemSchema = new mongoose.Schema({
  icon: String,
  title: String,
});

const facilityGroupSchema = new mongoose.Schema({
  items: [facilityItemSchema],
});

const propertySchema = new mongoose.Schema({
  id: Number,
  tag: String,
  slideImg: { type: [String] },
  img: String,
  checkin: Date,
  checkout: Date,
  rooms: Number,
  title: String,
  location: String,
  adults: Number,
  numberOfReviews: String,
  price: Number,
  delayAnimation: String,
  city: String,
  overviewDescription: String,
  housePolicies: [{
    housePoliciesTitle: String,
    housePolicies: String
  }],
  popularFacilities: [{
    popularFacilitiesTitle: String,
    popularFacilitiesDescription: String
  }],
  facilities: [facilityGroupSchema],
  destinations: [{
    destinationLocation: String,
    destinationImg: String
  }],
  guests: Number,
  bedrooms: Number,
  baths: Number
}, { collection: 'properties' });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

export { Property };
