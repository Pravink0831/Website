'use client'

import React, { useState } from "react";
import emailjs from '@emailjs/browser';

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
      // Submit to partner API
      const partnerResponse = await fetch('/api/partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      // Send email using EmailJS
      await emailjs.send(
        'service_t5iz8y9',
        'template_dxjbkil',
        formValues,
        'GtZDcPo178_1i3Gvk'
      );

      if (partnerResponse.ok) {
        alert('Partner form submitted successfully!');
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
        alert('There was an error processing your submission.');
        console.error('Error submitting data:', await partnerResponse.json());
      }
    } catch (error) {
      alert('There was an error processing your submission.');
      console.error('Error:', error);
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
              {key === 'additionalinfo' 
                ? 'Additional Info'
                : key === 'propertytype'
                  ? 'Property Type'
                  : key.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())} 
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
