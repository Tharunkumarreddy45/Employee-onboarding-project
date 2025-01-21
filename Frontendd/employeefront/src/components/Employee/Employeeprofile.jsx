import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Edashheader from './Edashheader';
import Footer from '../Developer/copyfoot';
import { useLocation } from 'react-router';

const Employeeprofile = () => {
    const location = useLocation();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/employee/${location.state.employeeid}`);
                setInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (location.state && location.state.employeeid) {
            fetchData();
        }
    }, [location.state]);

    return (
        <div>
            <Edashheader />

            <div className='bodyy'>
                <h1 className='mhead'>Employee Details</h1>
                {info ? (
                    <div className="class">
                        <div className="left">
                            <div className="field">
                                <b>Employee Id </b> <span>{info.employeeId}</span>
                            </div>
                            <div className="field">
                                <b>First Name </b> <span>{info.firstName}</span>
                            </div>
                            <div className="field">
                                <b>Last Name </b> <span>{info.lastName}</span>
                            </div>
                            <div className="field">
                                <b>Date of Birth </b> <span>{info.dateOfBirth}</span>
                            </div>
                            <div className="field">
                                <b>Gender </b> <span>{info.gender}</span>
                            </div>
                            <div className="field">
                                <b>Address </b> <span>{info.homeAddress}</span>
                            </div>
                            <div className="field">
                                <b>Phone Number </b> <span>{info.phoneNumber}</span>
                            </div>
                            <div className="field">
                                <b>Email Id </b> <span>{info.emailAddress}</span>
                            </div>
                            <div className="field">
                                <b>Job Title </b> <span>{info.jobTitle}</span>
                            </div>
                            <div className="field">
                                <b>Department </b> <span>{info.department}</span>
                            </div>
                            <div className="field">
                                <b>Experience </b> <span>{info.experience}</span>
                            </div>
                            <div className="field">
                                <b>WorkLocation </b> <span>{info.workLocation}</span>
                            </div>
                            <div className="field">
                                <b>Employment Type </b> <span>{info.employmentType}</span>
                            </div>
                        </div>
                        <div className="right">
                            <img className='pic' src={info.photo} alt="" />
                        </div>
                    </div>
                ) : (
                    <p>{location.state.employeeid} <br />
                    Loading employee information...</p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Employeeprofile;

