'use client'

import React, { useState } from "react";

const PartnerForm = () => {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    location: "",
    property_type: "",
    amenities: "",
    additional_info: ""
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form className="row y-gap-20 pt-20 text-12" onSubmit={handleSubmit}>
      {Object.keys(formValues).map((key) => (
        <div className={`col-${key === 'amenities' || key === 'additional_info' ? '12' : '6'}`} key={key}>
          <div className="form-input">
            {key === 'amenities' || key === 'additional_info' ? (
              <textarea id={key} value={formValues[key]} onChange={handleChange}></textarea>
            ) : (
              <input type={key === 'email' ? 'email' : 'text'} id={key} value={formValues[key]} onChange={handleChange} required />
            )}
            <label htmlFor={key} className="lh-1 text-12 text-black">
              {key.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())} 
              {key !== 'amenities' && key !== 'additional_info' && formValues[key] === "" && <span style={{ color: 'red' }}>*</span>}
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
