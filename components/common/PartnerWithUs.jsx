'use client'

import React, { useState } from "react";

const PartnerForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    location: "",
    propertytype: "",
    amenities: "",
    additionalinfo: ""
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert('Partner added successfully!');
        setFormValues({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          location: "",
          propertytype: "",
          amenities: "",
          additionalinfo: ""
        });
      } else {
        console.error('Error submitting data:', await response.json());
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <form className="row y-gap-20 pt-20 text-12" onSubmit={handleSubmit}>
      {Object.keys(formValues).map((key) => (
        <div className={`col-${key === 'amenities' || key === 'additionalinfo' ? '12' : '6'}`} key={key}>
          <div className="form-input">
            {key === 'amenities' || key === 'additionalinfo' ? (
              <textarea id={key} value={formValues[key]} onChange={handleChange}></textarea>
            ) : (
              <input type={key === 'email' ? 'email' : 'text'} id={key} value={formValues[key]} onChange={handleChange} required />
            )}
            <label htmlFor={key} className="lh-1 text-12 text-black">
              {key.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())} 
              {key !== 'amenities' && key !== 'additionalinfo' && formValues[key] === "" && <span style={{ color: 'red' }}>*</span>}
            </label>
          </div>
        </div>
      ))}
      <div className="col-auto">
        <button
          type="submit"
          className="button rounded-60 px-24 h-50 -yellow-1 bg-black text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PartnerForm;
