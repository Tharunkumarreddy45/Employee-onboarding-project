import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Developersignup.css';

const Developersignup = () => {
  const [Data, setData] = useState({
    secretkey: '',
    username: '',
    password: '',
    repassword: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { secretkey, username, password, repassword } = Data;

    if (password !== repassword) {
      alert('Reenter the correct password');
      return;
    }
    if (secretkey !== 'Default') {
      alert('Enter the correct secret key');
      return;
    }

    // const targetUrl = `/devform?username=${username}`;
    // window.location.href = targetUrl;
  };

  return (
    <div className="main">
      <div className="signup-page">
        <form onSubmit={handleSubmit}>
          <h2>Developer Signup</h2>
          <input type="password" name="secretkey" placeholder="Enter Secret Key" className="user1" value={Data.secretkey} onChange={handleInput} required />
          <br />
          <input type="text" name="username" placeholder="Enter Username" className="user2" value={Data.username} onChange={handleInput} required />
          <br />
          <input type="password" name="password" placeholder="Enter Password" className="pass2" value={Data.password} onChange={handleInput} required />
          <br />
          <input type="password" name="repassword" placeholder="ReEnter Password" className="pass2" value={Data.repassword} onChange={handleInput} required />
          <br />
          <Link to='/devform'>
            <input type="submit" value="Signup" className="btn2" />
          </Link>
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
