import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Employeelogin.css';

const Employeelogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // To send data to backend
    console.log(formData);
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="body">
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <h2>Employee Login</h2>
          <input type="text" name="username" placeholder="Username"  className="user" value={formData.username} onChange={handleInputChange} required />
          <br />
          <input type="password" name="password" placeholder="Password" className="pass" value={formData.password} onChange={handleInputChange} required />
          <br />
          <input type="submit" value="Login" className="btn" />
          <div>
            <p>Don't have an account?</p>
            <Link to="/employeesignup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Employeelogin;
