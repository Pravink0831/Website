'use client'

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  const Router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [properties, setProperties] = useState(null); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hotels', { method: 'GET' }); if (!response.ok) { throw new Error(`Failed to fetch properties. Status: ${response.status}`); } const result = await response.json(); setProperties(result); // Set the fetched properties 
      } catch (error) { console.error('Error fetching properties:', error.message); }
    }; fetchData();
  }, []);

  const handleLocationChange = (name, address) => {
    setSelectedLocation(name);
    setSelectedCity(address);
  };
  //const handleSearch = () => { const filteredData = properties.filter(property => property.location.includes(selectedLocation) && property.city.includes(selectedCity)); Router.push({ pathname: "/hotel-list-v5", query: { filteredData: JSON.stringify(filteredData) } }); };
  
  if (!properties) {
    return <div>Loading...</div>; 
  }
  return (
    <>
      <div className="mainSearch -w-900 z-2 bg-white pr-10 py-10 lg:px-60 lg:pt-5 lg:pb-20 rounded-100 shadow-1 mt-40 mx-auto">
        <div className="button-grid items-center">
        <LocationSearch locations={properties.map(property => ({ location: property.location, city: property.city }))} onChange={handleLocationChange} />
          {/* End Location */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-left text-16 fw-500 ls-2 lh-16">
                Check in - Check out
              </h4>
              <DateSearch />
            </div>
          </div>
          {/* End check-in-out */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item">
            <button
              className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-100 bg-yellow-1 text-black"
              onClick={() => Router.push("/hotel-list-v5")}
            >
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
