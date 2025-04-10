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
        const data = await response.json();
        alert(data.message);
        setFormValues({
          name: "",
          phone: "",
          email: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        console.error('Error submitting data:', errorData);
        alert(`Error: ${response.status} - ${errorData.message || 'An error occurred.'}`);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert(`An error occurred while submitting the form: ${error.message}`);
    }
  };

  return (
    <form className="row y-gap-20 pt-20 text-12" onSubmit={handleSubmit}>
      {Object.entries(formValues).map(([key, value]) => (
        <div className="col-12" key={key}>
          <div className="form-input">
            {key === 'message' ? (
              <textarea id={key} value={value} onChange={handleChange} required rows="4"></textarea>
            ) : (
              <input type={key === 'email' ? 'email' : 'text'} id={key} value={value} onChange={handleChange}/>
            )}
            <label htmlFor={key} className="lh-1 text-12 text-black">
              {key === 'message' ? 'Write your query here' : key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
              {value === "" && <span style={{ color: 'red' }}>*</span>}
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
