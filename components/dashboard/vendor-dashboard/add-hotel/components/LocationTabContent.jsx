import React, { useState } from 'react';
import Location from "./location/Location";

const LocationTabContent = () => {
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleEdit = async (id) => {
    if (currentId === id.toString()) {
      setCurrentId(null);
      setFormData({});
    } else {
      setCurrentId(id.toString());
      setIsLoading(true); // Set loading to true
      try {
        const response = await fetch(`/api/hotels/${id}`);
        const result = await response.json();
        setFormData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading to false
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/hotels', {
        method: currentId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, id: currentId }),
      });

      if (response.ok) {
        alert(currentId ? 'Villa updated successfully!' : 'Villa added successfully!');
        setCurrentId(null);
        setFormData({});
      } else {
        console.error('Error submitting data:', await response.json());
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="col-xl-10">
      <div className="text-18 fw-500 mb-10">Location</div>
      <Location
        onEdit={handleEdit}
        currentId={currentId}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading} // Pass loading state as prop
      />
    </div>
  );
};

export default LocationTabContent;
