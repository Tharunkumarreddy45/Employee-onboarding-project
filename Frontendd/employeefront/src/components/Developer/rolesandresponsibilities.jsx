import React, { useState } from 'react';
import axios from 'axios';
import Dashheader from './Dashheader';
import Footer from './copyfoot';
import './style.css';

const RolesAndResponsibilities = () => {
    const [formData, setFormData] = useState({
        employeeId: '',
        companyEmail: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/sendemail/', formData);

            if (response.data.status) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');
        }
        setFormData({
          employeeId: '',
          companyEmail: '',
          email: '',
          password: ''
        })
    };

    return (
        <div>
            <Dashheader />
            <form onSubmit={handleSubmit}>
                <div className='body'>
                    <div className="login-page">
                        <h2>Send Email</h2>
                        <input
                            type="text"
                            name="employeeId"
                            className="user"
                            placeholder="Enter Employee ID"
                            value={formData.employeeId}
                            onChange={handleChange}
                            required
                        /> <br />
                        <input
                            type="email"
                            name="companyEmail"
                            className="user"
                            placeholder="Enter Company Email"
                            value={formData.companyEmail}
                            onChange={handleChange}
                            required
                        /> <br />
                        <input
                            type="email"
                            name="email"
                            className="user"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        /> <br />
                        <input
                            type="password"
                            name="password"
                            className="pass"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        /> <br />
                        <input type="submit" value="Send Email" className="btn" />
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default RolesAndResponsibilities;
