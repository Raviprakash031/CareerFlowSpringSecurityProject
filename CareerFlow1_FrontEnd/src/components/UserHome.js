import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import Link for navigation
import './UserHome.css'; // Import the CSS file for styling



const UserHome = () => {
  // State variables to manage form data and errors
  const [resume, setResume] = useState('');
  const [educationDetails, setEducationDetails] = useState('');
  const [skills, setSkills] = useState('');
  const [isProfileUpdated, setProfileUpdated] = useState(false);
  const [setErrors] = useState({}); // State to track validation errors
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = {};
    if (!resume.trim()) {
      validationErrors.resume = 'Resume is required';
    }
    if (!educationDetails.trim()) {
      validationErrors.educationDetails = 'Education details are required';
    }
    if (!skills.trim()) {
      validationErrors.skills = 'Skills are required';
    }

    // If there are validation errors, update the state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no validation errors, proceed with updating the user profile
    console.log('Updating user profile:', {
      resume,
      educationDetails,
      skills,
      // Add more properties as needed
    });

    // Mocking a successful profile update
    setProfileUpdated(true);

    // Clear form fields and errors after submission
    setResume('');
    setEducationDetails('');
    setSkills('');
    setErrors({});
  };

  

  // Function to reset the alert state
  const resetAlert = () => {
    setProfileUpdated(false);
  };
  const handlleProfileUser= () =>{
    navigate('/updateUser');
  }
  
  const handleGetAllUser = () =>{
    navigate('/getUsers');
  }
  // Function to handle delete user
  const handleDeleteUser = () => {
    navigate('/deleteUser');
    
  };

  return (
    <div className="user-home-container">
      <h2>Welcome to Your User Home Page!</h2>
      <p>Lets update your profile here.</p>

      {/* Display alert message when the profile is successfully updated */}
      {isProfileUpdated && (
        <div className="alert" onClick={resetAlert}>
          Profile updated successfully!
        </div>
      )}

      {/* Form for updating user profile */}
      <form className="profile-form" onSubmit={handlleProfileUser}>
        {/* ... (existing form fields) */}

        <div className="form-group">
          <button type="submit">Update Profile</button><br/>
        </div>
      </form>

      {/* Delete user button */}
      <div className="delete-button-container">
        <p> click on delete to delete User</p>
        <button onClick={handleDeleteUser} className="delete-button">
          Delete User
        </button>
      </div><br/>
      {/* get All user Detailsbutton */}
      <div className="delete-button-container">
        <button onClick={handleGetAllUser} className="delete-button">
          get All Users
        </button>
      </div><br/>

      {/* Back to Home button */}
      
    </div>
  );
};

export default UserHome;



