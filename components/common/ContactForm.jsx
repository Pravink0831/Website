'use client'

import React, { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
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
        <div className="col-12" key={key}>
          <div className="form-input">
            {key === 'message' ? (
              <textarea id={key} value={formValues[key]} onChange={handleChange} required rows="4"></textarea>
            ) : (
              <input type={key === 'email' ? 'email' : 'text'} id={key} value={formValues[key]} onChange={handleChange} required />
            )}
            <label htmlFor={key} className="lh-1 text-12 text-black">
              {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
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
          Submit <div className="icon-arrow-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
