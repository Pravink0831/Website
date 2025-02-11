'use client';

import React, { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
   
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert('Contact added successfully!');
        setFormValues({
          name: "",
          phone: "",
          email: "",
          message: ""
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
        <div className="col-12" key={key}>
          <div className="form-input">
            {key === 'message' ? (
              <textarea id={key} value={formValues[key]} onChange={handleChange} required rows="4"></textarea>
            ) : (
              <input type={key === 'email' ? 'email' : 'text'} id={key} value={formValues[key]} onChange={handleChange} required />
            )}
            <label htmlFor={key} className="lh-1 text-12 text-black">
              {key === 'message' ? 'Write your query here' : key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
              {formValues[key] === "" && <span style={{ color: 'red' }}>*</span>}
            </label>
          </div>
        </div>
      ))}
      <div className="col-auto">
        <button
          type="submit"
          className="button rounded-60 px-24 h-50 -yellow-1 bg-black text-white"
        >
          Submit <div className="icon-arrow-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
