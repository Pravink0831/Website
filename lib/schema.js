import mongoose from 'mongoose';

const overviewSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String, // Added title
  description: String,
});

const housePoliciesSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String, // Added title
  policies: [String],
});

const popularFacilitiesSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  facilities: [
    {
      title: String,
      description: String,
    },
  ],
});

const facilitiesSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  items: [
    {
      title: String,
      icon: String, // Added icon
      facilities: [String],
    },
  ],
});

const destinationsSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  destinations: [
    {
      location: String,
      img: String,
    },
  ],
});

const Overview = mongoose.models.Overview || mongoose.model('Overview', overviewSchema);
const HousePolicies = mongoose.models.HousePolicies || mongoose.model('HousePolicies', housePoliciesSchema);
const PopularFacilities = mongoose.models.PopularFacilities || mongoose.model('PopularFacilities', popularFacilitiesSchema);
const Facilities = mongoose.models.Facilities || mongoose.model('Facilities', facilitiesSchema);
const Destinations = mongoose.models.Destinations || mongoose.model('Destinations', destinationsSchema);

export { Overview, HousePolicies, PopularFacilities, Facilities, Destinations };
