import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Employeelogin.css';
import axios from 'axios';

const Employeelogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeid: '',
    password: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/employees/login/', {
        employeeid: formData.employeeid,
        password: formData.password
      });

      console.log(response.data);
      alert('Login successful!');
      navigate('/employeedashboard', { state: { employeeid: formData.employeeid } });
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please check your credentials.');
    }
    setFormData({ employeeid: '', password: '' });
  };

  return (
    <div className="body">
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <h2>Employee Login</h2>
          <input type="text" name="employeeid" placeholder="Employee Id"  className="user" value={formData.employeeid} onChange={handleInputChange} required />
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


