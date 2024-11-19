import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <h2>Welcome, Shubham Rana!</h2>
        <p>Email: shubham4816.be23@chitkara.edu.in</p>
        <p>Role: Full-Stack Developer</p>
        <p>Interests: Embedded Systems, IoT, Software Development</p>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
