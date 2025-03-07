import mongoose from 'mongoose';

const facilityItemSchema = new mongoose.Schema({
  icon: String,
  title: String,
});

const FacilityItem = mongoose.models.FacilityItem || mongoose.model('FacilityItem', facilityItemSchema);

export { FacilityItem };
