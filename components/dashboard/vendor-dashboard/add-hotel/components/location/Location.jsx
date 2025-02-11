import React, { useState, useEffect } from 'react';
import HotelContent from "../content/HotelContentEdit";

const Location = ({ onEdit, currentId, formData, handleInputChange, handleSubmit, isLoading }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/hotels');
      const result = await response.json();
      const formattedResult = result.map(item => ({ ...item, _id: item._id.toString() }));
      setData(formattedResult);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch('/api/hotels', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id.toString() }),
      });

      if (response.ok) {
        alert('Villa deleted successfully!');
        setData(data.filter(row => row._id !== id.toString()));
      } else {
        console.error('Error deleting data:', await response.json());
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="overflow-scroll scroll-bar-1 pt-30">
      <table className="table-2 col-12">
        <thead>
          <tr>
            <th>#</th>
            <th>Villa Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={row._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{row.title}</td>
                <td>{row.location}</td>
                <td className="fw-500">{row.price}</td>
                <td>
                  <button className="btn btn-primary me-2" onClick={() => onEdit(row._id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(row._id)}>Delete</button>
                </td>
              </tr>
              {currentId === row._id && (
                <tr>
                  <td colSpan="6">
                    {isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <HotelContent handleInputChange={handleInputChange} formData={formData} />
                        <button type="submit" className="button h-50 rounded-100 mt-20 px-24 -yellow-1 bg-black text-white">
                          Save Changes
                        </button>
                      </form>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Location;
