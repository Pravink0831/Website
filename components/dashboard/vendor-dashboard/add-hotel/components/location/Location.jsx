import React, { useState, useEffect } from 'react';
import ContentTabContent from "../ContentTabContent";

const Location = () => {
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [editFormData, setEditFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleEdit = async (id) => {
    try {
      setIsLoading(true);
      // Fetch the complete hotel data for editing
      const response = await fetch(`/api/hotels/${id}`);
      const itemToEdit = await response.json();
      
      if (itemToEdit) {
        console.log('Item to edit:', itemToEdit);
        setEditFormData(itemToEdit);
        setCurrentId(id);
      }
    } catch (error) {
      console.error('Error setting up edit form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      setIsLoading(true);
      console.log('Updating with data:', updatedData);
      
      const response = await fetch('/api/hotels', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...updatedData, id: currentId }),
      });

      if (response.ok) {
        alert('Villa updated successfully!');
        setCurrentId(null);
        setEditFormData(null);
        await fetchData(); // Refresh the data
      } else {
        throw new Error('Failed to update villa');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update villa');
    } finally {
      setIsLoading(false);
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
                  <button 
                    className="btn btn-primary me-2" 
                    onClick={() => handleEdit(row._id)}
                    disabled={isLoading}
                  >
                    {isLoading && currentId === row._id ? 'Loading...' : 'Edit'}
                  </button>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => handleDelete(row._id)}
                    disabled={isLoading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {currentId === row._id && editFormData && (
                <tr>
                  <td colSpan="6">
                    <div className="px-30 py-30">
                      {isLoading ? (
                        <div>Loading...</div>
                      ) : (
                        <ContentTabContent 
                          initialData={editFormData}
                          onSubmit={handleUpdate}
                          isEditing={true}
                        />
                      )}
                    </div>
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
