'use client';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const HotelContent = ({ handleInputChange, formData }) => {
  const [popularFacilities, setPopularFacilities] = useState(formData?.popularFacilities || [{ 
    popularFacilitiesTitle: '', 
    popularFacilitiesDescription: '' 
  }]);
  const [housePolicies, setHousePolicies] = useState(formData?.housePolicies || [{
    housePoliciesTitle: '',
    housePolicies: ''
  }]);
  const [destinations, setDestinations] = useState(formData?.destinations || [{
    destinationLocation: '',
    destinationImg: ''
  }]);
  const [facilities, setFacilities] = useState(formData?.facilities || [{
    facilitiesTitle: '',
    facilitiesIcon: ''
  }]);
  
  const [error, setError] = useState("");
  const fileInputRefs = useRef([]);

  // Update local state when formData changes
  useEffect(() => {
    if (formData) {
      if (formData.popularFacilities) setPopularFacilities(formData.popularFacilities);
      if (formData.housePolicies) setHousePolicies(formData.housePolicies);
      if (formData.destinations) setDestinations(formData.destinations);
      if (formData.facilities) setFacilities(formData.facilities);
    }
  }, [formData]);

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
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("img", file);

      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data && response.data.imgUrl) {
        console.log('Upload successful:', response.data);
        setSection(prev => {
          const updated = [...prev];
          updated[index] = {
            ...updated[index],
            [fieldName]: response.data.imgUrl
          };
          return updated;
        });

        // Update parent component's state
        handleInputChange({
          target: {
            name: `${section}.${index}.${fieldName}`,
            value: response.data.imgUrl
          }
        });

        setError("");
      } else {
        console.error('Invalid response:', response.data);
        setError("Upload failed: Invalid server response");
      }
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      setError("Upload failed: " + (err.response?.data?.error || err.message));
    }
  };

  const triggerFileInput = (index, type) => {
    fileInputRefs.current[`${type}-${index}`]?.click();
  };

  const shortenUrl = (url) => {
    if (!url) return '';
    return url.replace('/uploads/', '');
  };

  const renderImageUploader = (field, index, section, fieldName, label) => (
    <div className="form-input col-6">
      <button
        type="button"
        onClick={() => triggerFileInput(index, section)}
        className="text-blue-1 fw-500 cursor-pointer"
      >
        {label}
      </button>
      <input
        type="file"
        ref={el => fileInputRefs.current[`${section}-${index}`] = el}
        accept="image/png, image/jpeg"
        className="d-none"
        onChange={(event) => handleFileUpload(index, event, fieldName, section, 
          section === 'destinations' ? setDestinations : setFacilities
        )}
      />
      {field[fieldName] && (
        <div className="mt-10">
          <div className="d-flex align-items-center">
            <img 
              src={field[fieldName]} 
              alt={label} 
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              className="rounded-4 mr-10"
            />
            <a 
              href={field[fieldName]} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-1"
            >
              View Image
            </a>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input">
          <input 
            type="text" 
            name="title" 
            value={formData?.title || ''} 
            required 
            onChange={handleInputChange} 
          />
          <label className="lh-1 text-16 text-black">Villa Name</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input 
            type="text" 
            name="location" 
            value={formData?.location || ''} 
            required 
            onChange={handleInputChange} 
          />
          <label className="lh-1 text-16 text-black">Location</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input 
            type="text" 
            name="city" 
            value={formData?.city || ''} 
            required 
            onChange={handleInputChange} 
          />
          <label className="lh-1 text-16 text-black">City</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input 
            type="number" 
            name="price" 
            value={formData?.price || ''} 
            required 
            onChange={handleInputChange} 
          />
          <label className="lh-1 text-16 text-black">Price</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <select 
            className="custom-select" 
            name="rooms" 
            value={formData?.rooms || ''} 
            required 
            onChange={handleInputChange}
          >
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
          <input 
            type="text" 
            name="tag" 
            value={formData?.tag || ''} 
            onChange={handleInputChange} 
          />
          <label className="lh-1 text-16 text-black">Tag</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input 
            type="number" 
            name="adults" 
            value={formData?.adults || ''} 
            required 
            onChange={handleInputChange} 
          />
          <label className="lh-1 text-16 text-black">Adults</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea 
            name="description" 
            value={formData?.description || ''} 
            required 
            onChange={handleInputChange}
          ></textarea>
          <label className="lh-1 text-16 text-black">Description</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea 
            name="overviewDescription" 
            value={formData?.overviewDescription || ''} 
            required 
            onChange={handleInputChange}
          ></textarea>
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
                name={`popularFacilities.${index}.popularFacilitiesTitle`}
                value={field.popularFacilitiesTitle}
                required
                onChange={handleInputChange}
              />
              <label className="lh-1 text-16 text-black">Popular Facilities Title</label>
            </div>
            <div className="form-input pl-15 col-6">
              <textarea
                name={`popularFacilities.${index}.popularFacilitiesDescription`}
                value={field.popularFacilitiesDescription}
                required
                onChange={handleInputChange}
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
                name={`housePolicies.${index}.housePoliciesTitle`}
                value={field.housePoliciesTitle}
                required
                onChange={handleInputChange}
              />
              <label className="lh-1 text-16 text-black">House Policies Title</label>
            </div>
            <div className="form-input pl-15 col-6">
              <textarea
                name={`housePolicies.${index}.housePolicies`}
                value={field.housePolicies}
                required
                onChange={handleInputChange}
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
                name={`destinations.${index}.destinationLocation`}
                value={field.destinationLocation}
                required
                onChange={(e) => handleFieldChange(index, e, 'destinations', setDestinations)}
              />
              <label className="lh-1 text-16 text-black">Destination Location</label>
            </div>
            {renderImageUploader(
              field, 
              index, 
              'destinations', 
              'destinationImg', 
              'Upload Destination Image'
            )}
            {destinations.length > 1 && (
              <div className="col-2">
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={() => handleRemove(index, 'destinations', setDestinations)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
        <button 
          type="button" 
          className="btn btn-success mt-10"
          onClick={() => handleAdd('destinations', setDestinations)}
        >
          Add Destination
        </button>
      </div>

      {/* Facilities Section */}
      <div className="col-12">
        <h3 className="text-16 fw-500">Facilities</h3>
        {facilities.map((field, index) => (
          <div key={`fac-${index}`} className="row x-gap-10 y-gap-10 pr-20">
            <div className="form-input col-4">
              <input
                type="text"
                name={`facilities.${index}.facilitiesTitle`}
                value={field.facilitiesTitle}
                required
                onChange={(e) => handleFieldChange(index, e, 'facilities', setFacilities)}
              />
              <label className="lh-1 text-16 text-black">Facilities Title</label>
            </div>
            {renderImageUploader(
              field, 
              index, 
              'facilities', 
              'facilitiesIcon', 
              'Upload Facility Icon'
            )}
            {facilities.length > 1 && (
              <div className="col-2">
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={() => handleRemove(index, 'facilities', setFacilities)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
        <button 
          type="button" 
          className="btn btn-success mt-10"
          onClick={() => handleAdd('facilities', setFacilities)}
        >
          Add Facility
        </button>
      </div>

      {error && <div className="col-12 mb-10 text-red-1">{error}</div>}
      <input type="hidden" name="delayAnimation" value="400" onChange={handleInputChange} />
    </div>
  );
};

export default HotelContent;
