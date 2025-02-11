import HotelContent from "./content/HotelContent";
import BannerUploader from "./content/BannerUploader";
import GalleryUploader from "./content/GalleryUploader";
import { useState } from "react";

const ContentTabContent = () => {
  const [formData, setFormData] = useState({
    id: '',
    tag: "",
    slideImg: [],
    img: "",
    title: "",
    location: "",
    checkin: "",
    checkout: "",
    rooms: "",
    adults: "",
    description: "",
    price: "",
    delayAnimation: "",
    city: "",
    overviewTitle: "",
    overviewDescription: "",
    popularFacilities: [{
      popularFacilitiesTitle: '',
      popularFacilitiesDescription: ''
    }],
    housePolicies: [{
      housePoliciesTitle: '',
      housePolicies: ''
    }],
    destinations: [{
      destinationLocation: '',
      destinationImg: ''
    }],
    facilities: [{
      facilitiesTitle: '',
      facilitiesIcon: ''
    }]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      // Handle dynamic fields updates
      const [section, index, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: prev[section].map((item, i) => 
          i === parseInt(index) ? { ...item, [field]: value } : item
        )
      }));
    } else {
      // Handle regular fields
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting Data:', formData); // Log the form data before submission

    try {
      const response = await fetch("/api/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to add hotel. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Server Response:', data); // Log the server response
      alert("Hotel added successfully!");
      setFormData({
        id: '',
        tag: "",
        slideImg: [],
        img: "",
        title: "",
        location: "",
        checkin: "",
        checkout: "",
        rooms: "",
        adults: "",
        description: "",
        price: "",
        delayAnimation: "",
        city: "",
        overviewTitle: "",
        overviewDescription: "",
        popularFacilities: [{
          popularFacilitiesTitle: '',
          popularFacilitiesDescription: ''
        }],
        housePolicies: [{
          housePoliciesTitle: '',
          housePolicies: ''
        }],
        destinations: [{
          destinationLocation: '',
          destinationImg: ''
        }],
        facilities: [{
          facilitiesTitle: '',
          facilitiesIcon: ''
        }]
      });
    } catch (error) {
      console.error("Error adding hotel:", error.message); // Log the error message
      alert(`Failed to add hotel. Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="hidden" name="id" value={formData.id} />
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Villa Details</div>
        <HotelContent handleInputChange={handleInputChange} fields={formData.fields} />
        {/* End HotelContent */}

        <div className="mt-30">
          <div className="fw-500">Banner Image</div>
          <BannerUploader images={formData.img} setImages={(img) => setFormData({ ...formData, img })} />
        </div>
        {/* End BannerUploader */}

        <div className="mt-30">
          <div className="fw-500">Gallery</div>
          <GalleryUploader images={formData.slideImg} setImages={(slideImg) => setFormData({ ...formData, slideImg })} />
        </div>
        {/* End GalleryUploader */}

        <div className="border-top-light mt-30 mb-30" />

        <div className="d-inline-block pt-30">
          <button type="submit" className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContentTabContent;
