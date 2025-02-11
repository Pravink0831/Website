'use client';

const HotelContent = ({ handleInputChange, formData = {} }) => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input h-50">
          <input type="text" name="title" value={formData.title || ''} required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Villa Name</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input h-50">
          <input type="text" name="location" value={formData.location || ''} required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Location</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input h-50">
          <input type="text" name="city" value={formData.city || ''} required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">City</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input h-50">
          <input type="number" name="price" value={formData.price || ''} required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Price</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input h-50">
          <select className="custom-select" name="rooms" value={formData.rooms || ''} required onChange={handleInputChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <label className="lh-1 select-1 text-16 text-black">Rooms</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input h-50">
          <input type="text" name="tag" value={formData.tag || ''} onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Tag</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input h-50">
          <input type="number" name="Adults" value={formData.Adults || ''} required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Adults</label>
        </div>
      </div>
      <input type="hidden" name="delayAnimation" value={formData.delayAnimation || 400} onChange={handleInputChange} />
    </div>
  );
};

export default HotelContent;
