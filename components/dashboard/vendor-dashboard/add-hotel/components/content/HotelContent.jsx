'use client';
import { useState, useRef } from 'react';
import axios from 'axios';

const HotelContent = ({ handleInputChange }) => {
  const [popularFacilities, setPopularFacilities] = useState([{ 
    popularFacilitiesTitle: '', 
    popularFacilitiesDescription: '' 
  }]);
  const [housePolicies, setHousePolicies] = useState([{
    housePoliciesTitle: '',
    housePolicies: ''
  }]);
  const [destinations, setDestinations] = useState([{
    destinationLocation: '',
    destinationImg: ''
  }]);
  const [facilities, setFacilities] = useState([{
    facilitiesTitle: '',
    facilitiesIcon: ''
  }]);
  
  const [error, setError] = useState("");
  const fileInputRefs = useRef([]);

  const handleAdd = (section, setSection) => {
    setSection(prev => [...prev, getEmptyField(section)]);
  };

  const handleRemove = (index, section, setSection) => {
    setSection(prev => prev.filter((_, i) => i !== index));
  };

  const getEmptyField = (section) => {
    switch(section) {
      case 'popularFacilities':
        return { popularFacilitiesTitle: '', popularFacilitiesDescription: '' };
      case 'housePolicies':
        return { housePoliciesTitle: '', housePolicies: '' };
      case 'destinations':
        return { destinationLocation: '', destinationImg: '' };
      case 'facilities':
        return { facilitiesTitle: '', facilitiesIcon: '' };
      default:
        return {};
    }
  };

  const handleFieldChange = (index, event, section, setSection) => {
    const { name, value } = event.target;
    setSection(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [name]: value };
      return updated;
    });
    
    // Modify event for parent component
    handleInputChange({
      target: {
        name: `${section}.${index}.${name}`,
        value
      }
    });
  };

  const handleFileUpload = async (index, event, fieldName, section, setSection) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const maxSize = 800; // in pixels

    reader.onloadend = async () => {
      const img = new Image();
      img.onload = async () => {
        if (img.width > maxSize || img.height > maxSize) {
          setError(`Image ${file.name} exceeds the maximum size of ${maxSize}px.`);
        } else if (!["image/png", "image/jpeg"].includes(file.type.toLowerCase())) {
          setError(`Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`);
        } else {
          try {
            const formData = new FormData();
            formData.append("img", file);

            const response = await axios.post("http://localhost:3000/api/upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });

            setSection(prev => {
              const updated = [...prev];
              updated[index][fieldName] = response.data.imgUrl;
              return updated;
            });
            setError("");
          } catch (err) {
            setError("Image upload failed.");
          }
        }
      };
      img.onerror = () => {
        setError(`Image ${file.name} could not be loaded.`);
      };
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  const triggerFileInput = (index, type) => {
    fileInputRefs.current[`${type}-${index}`]?.click();
  };

  const shortenUrl = (url) => {
    if (!url) return '';
    return url.replace('/uploads/', '');
  };

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input">
          <input type="text" name="title" required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Villa Name</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="text" name="location" required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Location</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="text" name="city" required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">City</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="number" name="price" required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Price</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <select className="custom-select" name="rooms" required onChange={handleInputChange}>
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
        <div className="form-input">
          <input type="text" name="tag" onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Tag</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="number" name="adults" required onChange={handleInputChange} />
          <label className="lh-1 text-16 text-black">Adults</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea name="description" required onChange={handleInputChange}></textarea>
          <label className="lh-1 text-16 text-black">Description</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea name="overviewDescription" required onChange={handleInputChange}></textarea>
          <label className="lh-1 text-16 text-black">Overview Description</label>
        </div>
      </div>
      
      {/* Popular Facilities Section */}
      <div className="col-12">
        <h3 className="text-16 fw-500">Popular Facilities</h3>
        {popularFacilities.map((field, index) => (
          <div key={`pop-${index}`} className="row x-gap-10 y-gap-10 pr-20">
            <div className="form-input col-4">
              <input
                type="text"
                name="popularFacilitiesTitle"
                value={field.popularFacilitiesTitle || ''}
                required
                onChange={(event) => handleFieldChange(index, event, 'popularFacilities', setPopularFacilities)}
              />
              <label className="lh-1 text-16 text-black">Popular Facilities Title</label>
            </div>
            <div className="form-input pl-15 col-6">
              <textarea
                name="popularFacilitiesDescription"
                value={field.popularFacilitiesDescription || ''}
                required
                onChange={(event) => handleFieldChange(index, event, 'popularFacilities', setPopularFacilities)}
              ></textarea>
              <label className="lh-1 text-16 text-black">Popular Facilities Description</label>
            </div>
            {popularFacilities.length > 1 && (
              <div className="col-2">
                <button type="button" onClick={() => handleRemove(index, 'popularFacilities', setPopularFacilities)}>Remove</button>
              </div>
            )}
          </div>
        ))}
        <button type="button" onClick={() => handleAdd('popularFacilities', setPopularFacilities)}>Add Popular Facility</button>
      </div>

      {/* House Policies Section */}
      <div className="col-12">
        <h3 className="text-16 fw-500">House Policies</h3>
        {housePolicies.map((field, index) => (
          <div key={`policy-${index}`} className="row x-gap-10 y-gap-10 pr-20">
            <div className="form-input col-4">
              <input
                type="text"
                name="housePoliciesTitle"
                value={field.housePoliciesTitle || ''}
                required
                onChange={(event) => handleFieldChange(index, event, 'housePolicies', setHousePolicies)}
              />
              <label className="lh-1 text-16 text-black">House Policies Title</label>
            </div>
            <div className="form-input pl-15 col-6">
              <textarea
                name="housePolicies"
                value={field.housePolicies || ''}
                required
                onChange={(event) => handleFieldChange(index, event, 'housePolicies', setHousePolicies)}
              ></textarea>
              <label className="lh-1 text-16 text-black">House Policies</label>
            </div>
            {housePolicies.length > 1 && (
              <div className="col-2">
                <button type="button" onClick={() => handleRemove(index, 'housePolicies', setHousePolicies)}>Remove</button>
              </div>
            )}
          </div>
        ))}
        <button type="button" onClick={() => handleAdd('housePolicies', setHousePolicies)}>Add House Policy</button>
      </div>

      {/* Destinations Section */}
      <div className="col-12">
        <h3 className="text-16 fw-500">Destinations</h3>
        {destinations.map((field, index) => (
          <div key={`dest-${index}`} className="row x-gap-10 y-gap-10 pr-20">
            <div className="form-input col-4">
              <input
                type="text"
                name="destinationLocation"
                value={field.destinationLocation || ''}
                required
                onChange={(event) => handleFieldChange(index, event, 'destinations', setDestinations)}
              />
              <label className="lh-1 text-16 text-black">Destination Location</label>
            </div>
            <div className="form-input col-6">
              <button
                type="button"
                onClick={() => triggerFileInput(index, 'destination')}
                className="text-blue-1 fw-500 cursor-pointer"
              >
                Upload Destination Image
              </button>
              <input
                type="file"
                ref={el => fileInputRefs.current[`destination-${index}`] = el}
                accept="image/png, image/jpeg"
                className="d-none"
                onChange={(event) => handleFileUpload(index, event, 'destinationImg', 'destinations', setDestinations)}
              />
              {field.destinationImg && (
                <div className="mt-10">
                  <a href={field.destinationImg} target="_blank" rel="noopener noreferrer" title={field.destinationImg}>
                    {shortenUrl(field.destinationImg)}
                  </a>
                </div>
              )}
            </div>
            {destinations.length > 1 && (
              <div className="col-2">
                <button type="button" onClick={() => handleRemove(index, 'destinations', setDestinations)}>Remove</button>
              </div>
            )}
          </div>
        ))}
        <button type="button" onClick={() => handleAdd('destinations', setDestinations)}>Add Destination</button>
      </div>

      {/* Facilities Section */}
      <div className="col-12">
        <h3 className="text-16 fw-500">Facilities</h3>
        {facilities.map((field, index) => (
          <div key={`fac-${index}`} className="row x-gap-10 y-gap-10 pr-20">
            <div className="form-input col-4">
              <input
                type="text"
                name="facilitiesTitle"
                value={field.facilitiesTitle || ''}
                required
                onChange={(event) => handleFieldChange(index, event, 'facilities', setFacilities)}
              />
              <label className="lh-1 text-16 text-black">Facilities Title</label>
            </div>
            <div className="form-input col-6">
              <button
                type="button"
                onClick={() => triggerFileInput(index, 'facility')}
                className="text-blue-1 fw-500 cursor-pointer"
              >
                Upload Facility Icon
              </button>
              <input
                type="file"
                ref={el => fileInputRefs.current[`facility-${index}`] = el}
                accept="image/png, image/jpeg"
                className="d-none"
                onChange={(event) => handleFileUpload(index, event, 'facilitiesIcon', 'facilities', setFacilities)}
              />
              {field.facilitiesIcon && (
                <div className="mt-10">
                  <a href={field.facilitiesIcon} target="_blank" rel="noopener noreferrer" title={field.facilitiesIcon}>
                    {shortenUrl(field.facilitiesIcon)}
                  </a>
                </div>
              )}
            </div>
            {facilities.length > 1 && (
              <div className="col-2">
                <button type="button" onClick={() => handleRemove(index, 'facilities', setFacilities)}>Remove</button>
              </div>
            )}
          </div>
        ))}
        <button type="button" onClick={() => handleAdd('facilities', setFacilities)}>Add Facility</button>
      </div>

      {error && <div className="col-12 mb-10 text-red-1">{error}</div>}
      <input type="hidden" name="delayAnimation" value="400" onChange={handleInputChange} />
    </div>
  );
};

export default HotelContent;
