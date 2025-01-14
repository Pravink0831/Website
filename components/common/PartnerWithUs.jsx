'use client'

import React from "react";

const PartnerForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form className="row y-gap-20 pt-20 text-12" onSubmit={handleSubmit}>
      <div className="col-6">
        <div className="form-input">
          <input type="text" id="name" required />
          <label htmlFor="name" className="lh-1 text-12 text-black">
            First Name
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="text" id="name" required />
          <label htmlFor="name" className="lh-1 text-12 text-black">
            Last Name
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="email" id="email" required />
          <label htmlFor="email" className="lh-1 text-12  text-black">
            Email
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="text" id="phone" required />
          <label htmlFor="phone" className="lh-1 text-12 text-black">
            Phone Number
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="text" id="location" required />
          <label htmlFor="location" className="lh-1 text-12 text-black">
            Property Location
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
          <input type="text" id="property_type" required />
          <label htmlFor="property_type" className="lh-1 text-12 text-black">
            Property Type
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
        <input type="text" id="property_type" required />
          <label htmlFor="property_details" className="lh-1 text-12 text-black">
            How many rooms?
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-input">
        <input type="text" id="property_type" required />
          <label htmlFor="unique_features" className="lh-1 text-12 text-black">
            Where did you hear about us?
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input lh-1">
          <textarea id="amenities" required></textarea>
          <label htmlFor="amenities" className="lh-1 text-12 text-black">
          Photos/Website link (if any)
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input lh-1">
          <textarea id="additional_info" required></textarea>
          <label htmlFor="additional_info" className="lh-1 text-12 text-black">
            Describe your property
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
