import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiUrl = 'http://localhost:8080/getAllUsers';

        // Get the JWT token from localStorage
        const token = localStorage.getItem('jwtToken');

        // Make a GET request to the backend API with the Authorization header
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Get All Users API Response:', response.data);

        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      <h1>Users List</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Username: {user.username}<br/>
              Email: {user.email}<br/>
              Mobile: {user.mobileNumber}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetAllUsers;
