import mongoose from 'mongoose';

// Define nested schemas first for better organization
const facilityItemSchema = new mongoose.Schema({
  title: String,
  icon: String
});

const facilityGroupSchema = new mongoose.Schema({
  items: [facilityItemSchema]
});

const popularFacilitySchema = new mongoose.Schema({
  popularFacilitiesTitle: String,
  popularFacilitiesDescription: String
});

const housePolicySchema = new mongoose.Schema({
  housePoliciesTitle: String,
  housePolicies: String
});

const destinationSchema = new mongoose.Schema({
  destinationLocation: String,
  destinationImg: String
});

const propertyHighlightSchema = new mongoose.Schema({
  highlightTitle: String,
  highlightIcon: String
});

const nearestPointSchema = new mongoose.Schema({
  pointName: String,
  distance: String
});

const bookingPolicySchema = new mongoose.Schema({
  bookingPoliciesTitle: String,
  bookingPolicies: String
});

const propertySchema = new mongoose.Schema({
  id: String,
  tag: String,
  slideImg: {
    type: [String], // Ensure this is an array of strings
    default: []
  },
  img: String,
  heroImg: String, // Add hero image field
  checkin: String,
  checkout: String,
  title: String,
  location: String,
  price: Number,
  guests: Number,
  bedrooms: Number,
  baths: Number,
  delayAnimation: String,
  city: String,
  overviewDescription: String,
  locationDescription: String,
  
  // Use the defined sub-schemas
  popularFacilities: {
    type: [popularFacilitySchema],
    default: []
  },
  housePolicies: {
    type: [housePolicySchema],
    default: []
  },
  destinations: {
    type: [destinationSchema],
    default: []
  },
  facilities: {
    type: [facilityGroupSchema],
    default: []
  },
  propertyHighlights: {
    type: [propertyHighlightSchema],
    default: []
  },
  nearestPoints: {
    type: [nearestPointSchema],
    default: []
  },
  bookingPolicies: {
    type: [bookingPolicySchema],
    default: []
  }
}, { 
  collection: 'properties',
  timestamps: true 
});

// Prevent duplicate model initialization
const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

export { Property };
