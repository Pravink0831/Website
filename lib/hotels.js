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
  title: String,
  location: String,
  price: Number,
  guests: Number,
  bedrooms: Number,
  baths: Number,
  numberOfReviews: String,
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
  locationDescription: String, // Add this new field
  destinations: [{
    destinationLocation: String,
    destinationImg: String
  }],
  propertyHighlights: [{
    highlightTitle: String,
    highlightIcon: String
  }],
  nearestPoints: [{
    pointName: String,
    distance: String
  }]
}, { collection: 'properties' });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

export { Property };
