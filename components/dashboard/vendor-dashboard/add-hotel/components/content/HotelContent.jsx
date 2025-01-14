'use client';

const HotelContent = ({ formData, handleInputChange }) => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
      <div className="form-group">
        <label htmlFor="title">Hotel Name</label>
        <input type="text" name="title" id="title" value={formData.title} onChange={handleInputChange} className="form-control" />
      </div>
      </div>
      <div className="col-12">
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input type="text" name="location" id="location" value={formData.location} onChange={handleInputChange} className="form-control" />
      </div>
      </div>
      
    </div>
  );
};

export default HotelContent;
