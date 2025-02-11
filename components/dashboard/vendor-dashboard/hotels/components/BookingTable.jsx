'use client'

import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "../components/ActionsButton";

const BookingTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await fetch('/api/partner');
      const data = await response.json();
      setPartners(data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('/api/partner', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        fetchPartners();
      } else {
        console.error('Error deleting partner:', await response.json());
      }
    } catch (error) {
      console.error('Error deleting partner:', error);
    }
  };

  const tabItems = [
    "All Booking",
    "Completed",
    "Processing",
    "Confirmed",
    "Cancelled",
    "Paid",
    "Unpaid",
    "Partial Payment",
  ]; 

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? "is-tab-el-active" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Property Type</th>
              
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End thead */}
                <tbody>
                  {partners.map((partner) => (
                    <tr key={partner.id}>
                      <td className="text-blue-1 fw-500">{partner.firstname} {partner.lastname}</td>
                      <td>{partner.location}</td>
                      <td>{partner.email}</td>
                      <td>{partner.phone}</td>
                      <td>{partner.propertytype}</td>
                      
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1" />
                            </button>
                          </div>
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1" />
                            </button>
                          </div>
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35" onClick={() => handleDelete(partner.id)}>
                              <i className="icon-trash-2 text-16 text-light-1" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
