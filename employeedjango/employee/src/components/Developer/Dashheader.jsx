import React from 'react'
import { Link } from 'react-router-dom'
import companylogo from '../companylogo.jpg'
import './Dashheader.css'

const Dashheader = () => {
  return (
    <>
        <div className="header1">
            <img src={companylogo} className='logo' alt="" />
            <nav className="header-row">
                <ul>
                    <li className='li' > <Link className='link' to='/Aboutcompany'>About</Link></li>
                    <li className='li'>Roles and Responsibilities</li>
                    <li className='li'> <Link className='link' to='/profiledev'>Profile</Link></li>
                </ul>
            </nav>
            <div className="contact-info">
              <p className='sub'>client support <br />123-456-7890</p>
              <button className='con'><Link to='/Contact'>contact us</Link></button>
            </div>
        </div>
      
    </>
  )
}

export default Dashheader
