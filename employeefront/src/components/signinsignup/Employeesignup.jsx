import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Employeesignup.css';

const Employeesignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeid: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { employeeid, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try{
        const response=await axios.post('http://127.0.0.1:8000/api/employees/signup/',
        {
          employee_id:employeeid,
          password:password
        })
        console.log(response.data);
        setFormData({ employeeid: '', password: '', confirmPassword: '' });
        alert('Signup successful!');
        navigate('/employeedashboard', { state: { employeeid: formData.employeeid } });
      } catch (error) {
        console.error('Error signing up:', error);
        alert('Signup failed. Please try again.');
      }
  };

  return (
    <div className='main'>
      <div className="signup-page">
        <form onSubmit={handleSubmit}>
          <h2>Employee Signup</h2>
          <input type="text" name="employeeid" placeholder='Enter Employee Id' className='user2' value={formData.employeeid} onChange={handleInputChange} required />
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





