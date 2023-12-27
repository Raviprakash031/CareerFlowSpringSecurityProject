import React from 'react';
import './Home.css'; // Import a CSS file for styling

import carrer from './carrer.jpg'

const Home = () => (
  <div className="home-container">
    <div className="content">
      <h2>Hi,This is Home Page</h2>
      {/* Add home page content here */}
      <p>In today's dynamic and competitive landscape, finding the right talent is paramount for organizational success. Unlocking the full potential of your team begins with identifying individuals whose skills, passion, and innovative thinking align seamlessly with your company's vision.</p>
    </div>
    <div className="image-container">
      <img
        src={carrer} // Replace with the actual image URL
        alt="Description of the image"
        className="image"
      />
    </div>
  </div>
);

export default Home;
