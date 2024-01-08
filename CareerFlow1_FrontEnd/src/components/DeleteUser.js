import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteUser = ({ onDeleteSuccess, onCancel }) => {
  const [userEmail, setUserEmail] = useState('');
  const [isDeleting, setDeleting] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = async () => {
    try {
      setDeleting(true);

      // Add your backend API endpoint for deleting a user
      const apiUrl = `https://carrerflowdockerapp.onrender.com/deleteUser/${userEmail}`;
      // Get the JWT token from localStorage
      const token = localStorage.getItem('jwtToken'); // Replace 'your_jwt_key' with the actual key used to store the JWT token
      // Make a DELETE request to the backend API
      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle the response (you can add more logic here)
      console.log('Delete API Response:', response.data);

      if (response.status === 200) {
        
        window.alert("Deleted Successfully");
        navigate('/userhome');
        onDeleteSuccess();
        

      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <label>
        Enter User Email:
        <input
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </label>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete User'}
      </button>
      <button onClick={onCancel} disabled={isDeleting}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteUser;



