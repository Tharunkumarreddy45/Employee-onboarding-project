import React from 'react'
import './Application.css'
import { useState } from 'react';

const Appli = () => {
    const [formData, setFormData] = useState({
        employeeId: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        homeAddress: "",
        phoneNumber: "",
        emailAddress: "",
        jobTitle: "",
        department: "",
        managerName: "",
        startDate: "",
        employmentType: "",
        workLocation: "",
        degreememo: "",
        sscmemo:"",
        idcard:"",
        resume:""
       });
    
       const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
       const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <div className='bg'>
        <div className="container">
            <h1 className='h1'>Employee Onboarding Form</h1>
            <form className='form' onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <label className='label'>Employee ID<span>*</span> </label>
                            <input type="text" className='textt' name="employeeId" value={formData.employeeId} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>First Name<span>*</span></label>
                            <input type="text" className='textt' name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </td>
                        <td>
                            <label className='label'>Last Name</label>
                            <input type="text" className='textt' name="lastName" value={formData.lastName} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Date of Birth</label><br />
                            <input type="Date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                        </td>
                        <td>
                            <label className='label'>Gender</label><br />
                            <select name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Address<span>*</span></label>
                            <textarea type="text" className='textt' name="homeAddress" value={formData.homeAddress} onChange={handleChange} required />
                        </td>
                        <td>
                            <label className='label'>Phone Number<span>*</span></label>
                            <input type="tel" className='tell' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Email Address<span>*</span></label><br />
                            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
                        </td>
                        <td>
                            <label className='label'>Job Title<span>*</span></label>
                            <input type="text" className='textt' name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Department</label>
                            <input type="text" className='textt' name="department" value={formData.department} onChange={handleChange} />
                        </td>
                        <td>
                            <label className='label'>Work Experience<span>*</span></label>
                            <input type="text" className='textt' name="managerName" value={formData.managerName} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Start Date<span>*</span></label><br />
                            <input type="Date" name="startDate" value={formData.startDate} onChange={handleChange} required />
                        </td>
                        <td>
                            <label className='label'>Employment Type</label><br />
                            <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
                                <option value="">Select Employment Type</option>
                                <option value="fulltime">Full Time</option>
                                <option value="parttime">Part Time</option>
                                <option value="internship">Internship</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Work Location<span>*</span></label>
                            <input type="text" className='textt' name="workLocation" value={formData.workLocation} onChange={handleChange} required />
                        </td>
                        <td>
                            <label className='label'>Degree Certificate<span>*</span></label><br />
                            <input type="file" name="identificationDocuments" value={formData.degreememo} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>SSC Certificate<span>*</span></label><br />
                            <input type="file" name="identificationDocuments" value={formData.sscmemo} onChange={handleChange} required />
                        </td>
                        <td>
                            <label className='label'>Government Id Card<span>*</span></label><br />
                            <input type="file" name="identificationDocuments" value={formData.idcard} onChange={handleChange} required />
                        </td>
                    </tr>
                </table>
                <label className='labell label'>Upload Resume<span>*</span></label>
                <div className="resume-file">
                    <p>upload a File</p>
                    <input type="file" name="identificationDocuments" value={formData.resume} onChange={handleChange} required />
                </div>
                <button className='button11' type="submit" >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Appli
