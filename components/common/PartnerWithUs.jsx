
'use client'

import React from "react";

const PartnerForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <div className="form-input">
          <input type="text" id="name" required />
          <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="email" id="email" required />
          <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="text" id="subject" required />
          <label htmlFor="subject" className="lh-1 text-16 text-light-1">
            Subject
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
        <input type="text" id="Location" required />
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            Your Location
          </label>
        </div>
      </div>
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
