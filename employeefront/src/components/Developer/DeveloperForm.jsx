import React, { useState } from 'react';
import axios from 'axios';
import Footer from './copyfoot';
import { useLocation, useNavigate } from 'react-router';


const DeveloperForm = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const [info, setInfo] = useState({
    developerId: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    designation: '',
    photo: null,
    workExperience: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === 'file' ? e.target.files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (info.developerId !== location.state.employeeid) {
      alert("Enter correct developerId");
      return;
    }

    const formData = new FormData();
    formData.append('dev_id', info.developerId);
    formData.append('firstname', info.firstName);
    formData.append('lastname', info.lastName);
    formData.append('email', info.email);
    formData.append('phonenumber', info.phoneNumber);
    formData.append('dateofbirth', info.dateOfBirth);
    formData.append('designation', info.designation);
    formData.append('photo', info.photo);
    formData.append('experience', info.workExperience);


    try {
      const response = await axios.post('http://127.0.0.1:8000/api/devdetails/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      alert('Developer information submitted successfully!');
      setInfo({
        developerId: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        designation: '',
        photo: null,
        workExperience: ''
      });
      navigate('/developerdashboard', { state: { employeeid: formData.employeeid } });
    } catch (error) {
      console.error('Error submitting developer information:', error);
      alert('Failed to submit developer information. Please try again.');
    }
  };

  return (
    <>
      <div className="bg">
        <div className="container">
          <h1 className="h1">Developer Information Form</h1>
          <form className="form" onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label className="label">Developer ID<span>*</span></label>
                    <br />
                    <input
                      type="text"
                      name="developerId"
                      className="textt"
                      value={info.developerId}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td>
                    <label className="label">First Name<span>*</span></label>
                    <br />
                    <input
                      type="text"
                      name="firstName"
                      className="textt"
                      value={info.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td>
                    <label className="label">Last Name</label>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      className="textt"
                      value={info.lastName}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <label className="label email">Email<span>*</span></label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      className="email"
                      value={info.email}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td>
                    <label className="label">Phone Number<span>*</span></label>
                    <br />
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="tell"
                      value={info.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">Date of Birth<span>*</span></label>
                    <br />
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={info.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td>
                    <label className="label">Designation<span>*</span></label>
                    <br />
                    <input
                      type="text"
                      name="designation"
                      className="textt"
                      value={info.designation}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">Photo<span>*</span></label>
                    <br />
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td>
                    <label className="label">Work Experience<span>*</span></label>
                    <br />
                    <input
                      type="text"
                      name="workExperience"
                      className="textt"
                      value={info.workExperience}
                      onChange={handleInputChange}
                      required
                    />
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
      <Footer />
    </>
  );
};

export default DeveloperForm;
