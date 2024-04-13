import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Employeesignup.css';

const Employeesignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // To send data to backend
    console.log(formData);
    setFormData({ username: '', password: '', confirmPassword: '' });
  };

  return (
    <div className='main'>
      <div className="signup-page">
        <form onSubmit={handleSubmit}>
          <h2>Employee Signup</h2>
          <input type="text" name="username" placeholder='Enter Username' className='user2' value={formData.username} onChange={handleInputChange} required />
          <br />
          <input type="password" name="password" placeholder='Enter Password' className='pass2' value={formData.password} onChange={handleInputChange} required />
          <br />
          <input
            type="password" name="confirmPassword" placeholder='Re-enter Password' className='pass2' value={formData.confirmPassword} onChange={handleInputChange} required />
          <br />
          <input type="submit" value="Signup" className='btn2' />
          <div>
            <p>Already have an account?</p>
            <Link to='/employeelogin'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Employeesignup;
