import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Developersignup.css';
import axios from 'axios';

const Developersignup = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    secretkey: '',
    employeeid: '',
    password: '',
    repassword: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({...Data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { secretkey, employeeid, password, repassword } = Data;

    if (password !== repassword) {
      alert('Reenter the correct password');
      return;
    }
    if (secretkey !== 'Default') {
      alert('Enter the correct secret key');
      console.log(employeeid)
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/developers/signup/', 
      {
        employee_id:employeeid,
        password:password
      });
      console.log(response.data);
      alert('Signup successful!');
      setData({ secretkey: '', employeeid: '', password: '', repassword: '' });
      navigate('/devform', { state: { employeeid: Data.employeeid } });
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to signup. Please try again.');
      setData({ secretkey: '', employeeid: '', password: '', repassword: '' });
    }

  };

  return (
    <div className="main">
      <div className="signup-page">
        <form onSubmit={handleSubmit}>
          <h2>Developer Signup</h2>
          <input type="password" name="secretkey" placeholder="Enter Secret Key" className="user1" value={Data.secretkey} onChange={handleInput} required />
          <br />
          <input type="text" name="employeeid" placeholder="Enter Employee Id" className="user2" value={Data.employeeid} onChange={handleInput} required />
          <br />
          <input type="password" name="password" placeholder="Enter Password" className="pass2" value={Data.password} onChange={handleInput} required />
          <br />
          <input type="password" name="repassword" placeholder="ReEnter Password" className="pass2" value={Data.repassword} onChange={handleInput} required />
          <br />
          <input type="submit" value="Signup" className="btn2" />
          <div>
            <p>Already Have an account <br /></p>
            <Link to="/developerlogin">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Developersignup;

