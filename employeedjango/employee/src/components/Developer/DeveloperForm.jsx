import React, { useState } from 'react';
import './DeveloperForm.css'
import Dashheader from './Dashheader';
import Footer from './copyfoot';

const DeveloperForm = () => {
  const [formData, setFormData] = useState({
    developerId: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateofbirth:'',
    photo: '',
    designation: '',
    workExperience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormData({
      developerId: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      photo: '',
      designation: '',
      workExperience: ''
    });
  };

  return (
    <>
    <Dashheader />
    <div className="bg">
      <div className='container'>
      <h1 className='h1'>Developer Information Form</h1>
      <form className='form' onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label className='label'>
              Developer ID<span>*</span> </label><br />
              <input type="text" name="developerId" className='textt' value={formData.developerId} onChange={handleInputChange} required />
            </td>
          </tr>
          <tr>
            <td>
              <label className='label'>
              First Name<span>*</span> </label><br />
              <input type="text" name="lastName" className='textt' value={formData.lastName} onChange={handleInputChange} required />
            </td>
            <td>
              <label className='label'>
              Last Name </label><br />
              <input type="text" name="lastName" className='textt' value={formData.lastName} onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label className='label'>
              Email<span>*</span> </label><br />
              <input type="email" name="email" className='email' value={formData.email} onChange={handleInputChange} required
              />
            </td>
            <td>
              <label className='label'>Phone Number<span>*</span> </label><br />
              <input
                type="tel" name="phoneNumber" className='tell' value={formData.phoneNumber} onChange={handleInputChange} required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className='label'>Date of Birth<span>*</span></label><br />
              <input type="Date" name="dateOfBirth" value={formData.dateofbirth} onChange={handleInputChange} />
            </td>
            <td>
              <label className='label'>
              Designation<span>*</span> </label><br />
              <input type="text" name="designation" className='textt' value={formData.designation} onChange={handleInputChange} required />
            </td>
          </tr>
          <tr>
            <td>
                <label className='label'>
                Photo<span>*</span> </label><br />
                <input type="file" name="photo" value={formData.photo} onChange={handleInputChange} required/>
              </td>
            <td>
              <label className='label'>
              Work Experience<span>*</span> </label><br />
              <input
                type="text" name="workExperience" className='textt' value={formData.workExperience} onChange={handleInputChange} required
              />
            </td>
          </tr>
        </table>
        <button className='button11' type="submit">Submit</button>
      </form>
    </div>
    </div>
    <Footer />
    </>
    
  );
};

export default DeveloperForm;
