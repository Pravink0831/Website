'use client';

import React, { useState, useEffect } from 'react';
import Pagination from "../../common/Pagination";
import ActionsButton from "../components/ActionsButton";

const BookingTable = () => {
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch('/api/contact');
      const result = await response.json();
      setData(result.map(item => ({ ...item, _id: item._id.toString() })));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (id) => {
    if (currentId === id.toString()) {
      setCurrentId(null);
      setFormData({});
    } else {
      setCurrentId(id.toString());
      try {
        const response = await fetch(`/api/contact/${id}`);
        const result = await response.json();
        setFormData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: currentId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, id: currentId }),
      });

      if (response.ok) {
        alert(currentId ? 'Contact updated successfully!' : 'Contact added successfully!');
        setCurrentId(null);
        setFormData({});
        fetchData();
      } else {
        console.error('Error submitting data:', await response.json());
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id.toString() }),
      });

      if (response.ok) {
        alert('Contact deleted successfully!');
        setData(data.filter(row => row._id !== id.toString()));
      } else {
        console.error('Error deleting data:', await response.json());
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-3 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <React.Fragment key={row._id}>
                <tr>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.subject}</td>
                  <td>{row.message}</td>
                  <td>
                    <button className="btn btn-primary me-2" onClick={() => handleEdit(row._id)}>
                      {currentId === row._id ? 'Cancel' : 'Edit'}
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(row._id)}>Delete</button>
                  </td>
                </tr>
                {currentId === row._id && (
                  <tr>
                    <td colSpan="5">
                      <form onSubmit={handleSubmit}>
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-12">
                            <div className="form-input">
                              <input type="text" name="name" value={formData.name || ''} required onChange={handleInputChange} />
                              <label className="lh-1 text-16 text-black">Name</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-input">
                              <input type="email" name="email" value={formData.email || ''} required onChange={handleInputChange} />
                              <label className="lh-1 text-16 text-black">Email</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-input">
                              <input type="text" name="subject" value={formData.subject || ''} required onChange={handleInputChange} />
                              <label className="lh-1 text-16 text-black">Subject</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-input">
                              <textarea name="message" value={formData.message || ''} required onChange={handleInputChange} />
                              <label className="lh-1 text-16 text-black">Message</label>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="button h-50 rounded-100 mt-20 px-24 -yellow-1 bg-black text-white">
                          Save Changes
                        </button>
                      </form>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
