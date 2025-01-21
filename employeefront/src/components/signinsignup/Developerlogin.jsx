import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Developerlogin.css';
import axios from 'axios';

const Developerlogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    secret: '',
    employeeid: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  To send data to backend
    if (formData.secret !== 'Default') {
      alert('Enter the correct secret key');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/developer/login/', {
        employeeid: formData.employeeid,
        password: formData.password
      });

      console.log(response.data);
      alert('Login successful!');
      navigate('/developerdashboard', { state: { employeeid: formData.employeeid } });
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please check your credentials.');
    }
    setFormData({ secret:'', employeeid: '', password: '' });
  };

  return (
    <div className="body">
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <h2>Developer Login</h2>
          <input type="password" name="secret" placeholder="Enter Secret Key" className="user" value={formData.secret} onChange={handleInputChange} required />
          <br />
          <input type="text" name="employeeid" placeholder="Employee Id" className="user" value={formData.employeeid} onChange={handleInputChange} required />
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
