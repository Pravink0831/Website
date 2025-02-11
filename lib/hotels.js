import mongoose from 'mongoose';

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
  facilities: [{
    facilitiesTitle: String,
    facilitiesIcon: String
  }],
  destinations: [{
    destinationLocation: String,
    destinationImg: String
  }]
}, { collection: 'properties' });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

export { Property };
