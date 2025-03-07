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
    items: [{
      title: '',
      icon: ''
    }]
  }]);
  const [propertyHighlights, setPropertyHighlights] = useState(formData?.propertyHighlights || [{
    highlightTitle: '',
    highlightIcon: ''
  }]);
  const [nearestPoints, setNearestPoints] = useState(formData?.nearestPoints || [{
    pointName: '',
    distance: ''
  }]);
  
  const [error, setError] = useState("");
  const fileInputRefs = useRef([]);

  // Add tag options array
  const tagOptions = [
    "breakfast included",
    "best seller",
    "top rated"
  ];

  // Update local state when formData changes
  useEffect(() => {
    if (formData) {
      if (formData.popularFacilities) setPopularFacilities(formData.popularFacilities);
      if (formData.housePolicies) setHousePolicies(formData.housePolicies);
      if (formData.destinations) setDestinations(formData.destinations);
      if (formData.facilities) setFacilities(formData.facilities);
      if (formData.propertyHighlights) setPropertyHighlights(formData.propertyHighlights);
      if (formData.nearestPoints) setNearestPoints(formData.nearestPoints);
    }
  }, [formData]);

  const handleAdd = (section, setSection, itemType = null) => {
    let newItem;
    if (section === 'facilities') {
      newItem = { items: [{ title: '', icon: '' }] };
    } else {
      newItem = getEmptyField(section);
    }
  
    setSection(prev => {
      const updated = [...prev, newItem];
      handleInputChange({
        target: {
          name: section,
          value: updated
        }
      });
      return updated;
    });
  };

  const handleRemove = (groupIndex, section, setSection, itemIndex = null) => {
    setSection(prev => {
      const updated = prev.filter((_, i) => i !== groupIndex);
      handleInputChange({
        target: {
          name: section,
          value: updated
        }
      });
      return updated;
    });
  };

  const handleItemAdd = (groupIndex, section, setSection) => {
    setSection(prev => {
      const updated = [...prev];
      updated[groupIndex].items.push({ title: '', icon: '' });
      handleInputChange({
        target: {
          name: `${section}.${groupIndex}.items`,
          value: updated[groupIndex].items
        }
      });
      return updated;
    });
  };

  const handleItemRemove = (groupIndex, itemIndex, section, setSection) => {
    setSection(prev => {
      const updated = [...prev];
      updated[groupIndex].items = updated[groupIndex].items.filter((_, i) => i !== itemIndex);
      handleInputChange({
        target: {
          name: `${section}.${groupIndex}.items`,
          value: updated[groupIndex].items
        }
      });
      return updated;
    });
  };

  const getEmptyField = (section) => {
    switch(section) {
      case 'popularFacilities':
        return { popularFacilitiesTitle: '', popularFacilitiesDescription: '' };
      case 'housePolicies':
        return { housePoliciesTitle: '', housePolicies: '' };
      case 'destinations':
        return { destinationLocation: '', destinationImg: '' };
      case 'propertyHighlights':
        return { highlightTitle: '', highlightIcon: '' };
      case 'nearestPoints':
        return { pointName: '', distance: '' };
      default:
        return {};
    }
  };

  const handleFieldChange = (groupIndex, event, section, setSection, itemIndex = null) => {
    const { name, value } = event.target;
    setSection(prev => {
      const updated = [...prev];
      if (section === 'facilities' && itemIndex !== null) {
        updated[groupIndex].items[itemIndex] = { ...updated[groupIndex].items[itemIndex], [name]: value };
      } else {
        updated[groupIndex] = { ...updated[groupIndex], [name]: value };
      }
      return updated;
    });
    
    let eventName = `${section}.${groupIndex}.${name}`;
    if (section === 'facilities' && itemIndex !== null) {
      eventName = `${section}.${groupIndex}.items.${itemIndex}.${name}`;
    }
    handleInputChange({
      target: {
        name: eventName,
        value
      }
    });
  };

  const handleFileUpload = async (groupIndex, event, fieldName, section, setSection, itemIndex = null) => {
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
          if (section === 'facilities' && itemIndex !== null) {
            updated[groupIndex].items[itemIndex] = {
              ...updated[groupIndex].items[itemIndex],
              [fieldName]: response.data.imgUrl
            };
          } else {
            updated[groupIndex] = {
              ...updated[groupIndex],
              [fieldName]: response.data.imgUrl
            };
          }
          return updated;
        });

        let eventName = `${section}.${groupIndex}.${fieldName}`;
        if (section === 'facilities' && itemIndex !== null) {
          eventName = `${section}.${groupIndex}.items.${itemIndex}.${fieldName}`;
        }
        handleInputChange({
          target: {
            name: eventName,
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

  const triggerFileInput = (groupIndex, section, itemIndex = null) => {
    let refName = section;
    if (section === 'facilities' && itemIndex !== null) {
      refName = `${section}-${groupIndex}-${itemIndex}`;
    }
    fileInputRefs.current[refName]?.click();
  };

  const renderImageUploader = (field, groupIndex, section, fieldName, label, itemIndex = null) => (
    <div className="form-input col-6">
      <div className="d-flex flex-column">
        <button
          type="button"
          onClick={() => triggerFileInput(groupIndex, section, itemIndex)}
          className="text-blue-1 fw-500 cursor-pointer mb-10"
        >
          {label}
        </button>
        {field[fieldName] && (
          <div className="d-flex align-items-center">
            <img 
              src={field[fieldName]} 
              alt={label} 
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              className="rounded-4"
            />
          </div>
        )}
      </div>
      <input
        type="file"
        ref={el => {
          let refName = section;
          if (section === 'facilities' && itemIndex !== null) {
            refName = `${section}-${groupIndex}-${itemIndex}`;
          }
          fileInputRefs.current[refName] = el;
        }}
        accept="image/png, image/jpeg"
        className="d-none"
        onChange={(event) => handleFileUpload(groupIndex, event, fieldName, section, 
          section === 'destinations' ? setDestinations : setFacilities, itemIndex
        )}
      />
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
            name="guests" 
            value={formData?.guests || ''} 
            required 
            onChange={handleInputChange}
          >
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <label className="lh-1 select-1 text-16 text-black">Number of Guests</label>
        </div>
      </div>

      <div className="col-6">
        <div className="form-input">
          <select 
            className="custom-select" 
            name="bedrooms" 
            value={formData?.bedrooms || ''} 
            required 
            onChange={handleInputChange}
          >
            {[1,2,3,4,5,6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <label className="lh-1 select-1 text-16 text-black">Bedrooms</label>
        </div>
      </div>

      <div className="col-6">
        <div className="form-input">
          <select 
            className="custom-select" 
            name="baths" 
            value={formData?.baths || ''} 
            required 
            onChange={handleInputChange}
          >
            {[1,2,3,4,5,6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <label className="lh-1 select-1 text-16 text-black">Bathrooms</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <select 
            className="custom-select" 
            name="tag" 
            value={formData?.tag || ''} 
            onChange={handleInputChange}
          >
            <option value="">Select a tag</option>
            {tagOptions.map((tag, index) => (
              <option key={index} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </select>
          <label className="lh-1 select-1 text-16 text-black">Tag</label>
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
      <div className="col-12">
        <div className="form-input">
          <textarea 
            name="locationDescription" 
            value={formData?.locationDescription || ''} 
            required 
            onChange={handleInputChange}
          ></textarea>
          <label className="lh-1 text-16 text-black">Location Description</label>
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
          <div key={`dest-${index}`} className="row x-gap-10 y-gap-10 pr-20 mb-20">
            <div className="form-input col-4">
              <input
                type="text"
                name={`destinations.${index}.destinationLocation`}
                value={field.destinationLocation}
                required
                onChange={handleInputChange}
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
            <div className="col-2">
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => handleRemove(index, 'destinations', setDestinations)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button 
          type="button" 
          className="btn btn-success"
          onClick={() => handleAdd('destinations', setDestinations)}
        >
          Add Destination
        </button>
      </div>

      {/* Facilities Section */}
      <div className="col-12">
      <h3 className="text-16 fw-500">Facilities</h3>
      {facilities.map((facilityGroup, groupIndex) => (
        <div key={`facGroup-${groupIndex}`} className="mb-20">
          <h4 className="text-14 fw-500">Facility Group {groupIndex + 1}</h4>
          {facilityGroup.items.map((item, itemIndex) => (
            <div key={`facItem-${itemIndex}`} className="row x-gap-10 y-gap-10 pr-20">
              <div className="form-input col-4">
                <input
                  type="text"
                  name={`facilities.${groupIndex}.items.${itemIndex}.title`}
                  value={item.title}
                  required
                  onChange={handleInputChange}
                />
                <label className="lh-1 text-16 text-black">Facility Title</label>
              </div>
              {renderImageUploader(
                item,
                groupIndex,
                'facilities',
                'icon',
                'Upload Facility Icon',
                itemIndex
              )}
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleItemRemove(groupIndex, itemIndex, 'facilities', setFacilities)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handleAdd('facilities', setFacilities)}
      >
        Add Facility Group
      </button>
    </div>

      {/* Property Highlights Section */}
      <div className="col-12">
        <h3 className="text-16 fw-500">Property Highlights</h3>
        {propertyHighlights.map((field, index) => (
          <div key={`highlight-${index}`} className="row x-gap-10 y-gap-10 pr-20 mb-20">
            <div className="form-input col-4">
              <input
                type="text"
                name={`propertyHighlights.${index}.highlightTitle`}
                value={field.highlightTitle}
                required
                onChange={handleInputChange}
              />
              <label className="lh-1 text-16 text-black">Highlight Title</label>
            </div>
            {renderImageUploader(
              field,
              index,
              'propertyHighlights',
              'highlightIcon',
              'Upload Highlight Icon'
            )}
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleRemove(index, 'propertyHighlights', setPropertyHighlights)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleAdd('propertyHighlights', setPropertyHighlights)}
        >
          Add Property Highlight
        </button>
      </div>

      {/* Nearest Points Section */}
      <div className="col-12">
        <h3 className="text-16 fw-500">Nearest Points</h3>
        {nearestPoints.map((point, index) => (
          <div key={`point-${index}`} className="row x-gap-10 y-gap-10 pr-20">
            <div className="form-input col-6">
              <input
                type="text"
                name={`nearestPoints.${index}.pointName`}
                value={point.pointName}
                required
                onChange={handleInputChange}
              />
              <label className="lh-1 text-16 text-black">Point Name</label>
            </div>
            <div className="form-input col-4">
              <input
                type="text"
                name={`nearestPoints.${index}.distance`}
                value={point.distance}
                required
                onChange={handleInputChange}
                placeholder="e.g. 2.4 kms"
              />
              <label className="lh-1 text-16 text-black">Distance</label>
            </div>
            {nearestPoints.length > 1 && (
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleRemove(index, 'nearestPoints', setNearestPoints)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleAdd('nearestPoints', setNearestPoints)}
        >
          Add Nearest Point
        </button>
      </div>

      {error && <div className="col-12 mb-10 text-red-1">{error}</div>}
      <input type="hidden" name="delayAnimation" value="400" onChange={handleInputChange} />
    </div>
  );
};

export default HotelContent;
