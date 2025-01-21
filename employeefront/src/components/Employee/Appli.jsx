import React, { useState } from 'react';
import axios from 'axios';
import './Application.css';
import { useLocation } from 'react-router';

const Appli = (props) => {
    const location =useLocation();
    console.log(location.state.employeeid)
  const [formData, setFormData] = useState({
    employeeId: '',
    photo: null,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    homeAddress: '',
    phoneNumber: '',
    emailAddress: '',
    jobTitle: '',
    department: '',
    experience: '',
    startDate: '',
    employmentType: '',
    workLocation: '',
    degreememo: null,
    sscmemo: null,
    idcard: null,
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
      if (formData.employeeId !== location.state.employeeid) {
        alert('Enter the correct employee ID');
        return;
      }
      

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/employeeinfo/', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert('Employee details submitted successfully!');
      
      setFormData({
        employeeId: '',
        photo: null,
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        homeAddress: '',
        phoneNumber: '',
        emailAddress: '',
        jobTitle: '',
        department: '',
        experience: '',
        startDate: '',
        employmentType: '',
        workLocation: '',
        degreememo: null,
        sscmemo: null,
        idcard: null,
        resume: null
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit employee details. Please try again.');
    }
  };

  return (
    <>
    <div className="bg">
      <div className="container">
        <h1 className="h1">Employee Onboarding Form</h1>
        <form className="form" onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label className="label">Employee ID<span>*</span></label>
                  <input type="text" className="textt" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
                </td>
                <td>
                  <label className="label">Photo<span>*</span></label><br />
                  <input type="file" name="photo" onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">First Name<span>*</span></label>
                  <input type="text" className="textt" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </td>
                <td>
                  <label className="label">Last Name</label>
                  <input type="text" className="textt" name="lastName" value={formData.lastName} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Date of Birth<span>*</span></label><br />
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                </td>
                <td>
                  <label className="label">Gender<span>*</span></label><br />
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label className="label">Home Address<span>*</span></label><br />
                  <textarea name="homeAddress" className="textt" value={formData.homeAddress} onChange={handleChange} required></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Phone Number<span>*</span></label>
                  <input type="tel" className="tell" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </td>
                <td>
                  <label className="label email">Email Address<span>*</span></label><br />
                  <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Job Title<span>*</span></label>
                  <input type="text" className="textt" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                </td>
                <td>
                  <label className="label">Department</label>
                  <input type="text" className="textt" name="department" value={formData.department} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Experience<span>*</span></label>
                  <input type="text" className="textt" name="experience" value={formData.experience} onChange={handleChange} required />
                </td>
                <td>
                  <label className="label">Start Date<span>*</span></label><br />
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Employment Type<span>*</span></label><br />
                  <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
                    <option value="">Select Employment Type</option>
                    <option value="fulltime">Full Time</option>
                    <option value="parttime">Part Time</option>
                    <option value="internship">Internship</option>
                  </select>
                </td>
                <td>
                  <label className="label">Work Location<span>*</span></label>
                  <input type="text" className="textt" name="workLocation" value={formData.workLocation} onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Degree Certificate<span>*</span></label><br />
                  <input type="file" name="degreememo" onChange={handleChange} required />
                </td>
                <td>
                  <label className="label">SSC Certificate<span>*</span></label><br />
                  <input type="file" name="sscmemo" onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label className="label">Government ID Card<span>*</span></label><br />
                  <input type="file" name="idcard" onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label className="label">Upload Resume<span>*</span></label><br />
                  <input type="file" name="resume" onChange={handleChange} required />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="button11" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Appli;
