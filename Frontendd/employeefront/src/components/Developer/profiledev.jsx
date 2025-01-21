import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profiledev.css';
import Dashheader from './Dashheader';
import Footer from './copyfoot';
import { useLocation } from 'react-router';

const ProfileDev = () => {
    const location = useLocation();
    const [developerDetails, setDeveloperDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/developer/${location.state.employeeid}`);
                setDeveloperDetails(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [location.state.employeeid]);

    return (
        <div>
            <Dashheader />
            <div className='bodyy'>
                <h1 className='mhead'>Developer Details</h1>
                {developerDetails ? (
                    <div className="class">
                        <div className="left">
                            <div className="field">
                                <b>Developer Id </b> <span>{developerDetails.dev_id}</span>
                            </div>
                            <div className="field">
                                <b>First Name </b> <span>{developerDetails.firstname}</span>
                            </div>
                            <div className="field">
                                <b>Last Name </b> <span>{developerDetails.lastname}</span>
                            </div>
                            <div className="field">
                                <b>Email Id </b> <span>{developerDetails.email}</span>
                            </div>
                            <div className="field">
                                <b>Phone Number </b> <span>{developerDetails.phonenumber}</span>
                            </div>
                            <div className="field">
                                <b>Date of Birth </b> <span>{developerDetails.dateofbirth}</span>
                            </div>
                            <div className="field">
                                <b>Designation </b> <span>{developerDetails.designation}</span>
                            </div>
                            <div className="field">
                                <b>Experience </b> <span>{developerDetails.experience}</span>
                            </div>
                        </div>
                        <div className="right">
                            <img className='pic' src={developerDetails.photo} alt="" />
                        </div>
                    </div>
                ) : (
                    <p>Loading developer information...</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ProfileDev;
