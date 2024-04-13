import React from 'react';
import './profiledev.css';
import { useLocation } from 'react-router-dom';
import Dashheader from './Dashheader';
import Footer from './copyfoot'

const ProfileDev = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get('username');

  return (
    <div>
      <Dashheader />
      <h1>Developer Profile</h1>
      <p>Username: {username}</p>
      <Footer />
    </div>

  );
};

export default ProfileDev;
