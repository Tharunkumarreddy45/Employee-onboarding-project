import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Developerlogin.css';

const Developerlogin = () => {
  const [formData, setFormData] = useState({
    secret: '',
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  To send data to backend
  };

  return (
    <div className="body">
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <h2>Developer Login</h2>
          <input type="password" name="secret" placeholder="Enter Secret Key" className="user" value={formData.secret} onChange={handleInputChange} required />
          <br />
          <input type="text" name="username" placeholder="Username" className="user" value={formData.username} onChange={handleInputChange} required />
          <br />
          <input type="password" name="password" placeholder="Password" className="pass" value={formData.password} onChange={handleInputChange} required />
          <br />
          <input type="submit" value="Login" className="btn" />
          <div>
            <p className="para">Don't have an account?</p>
            <Link to="/developersignup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Developerlogin;
