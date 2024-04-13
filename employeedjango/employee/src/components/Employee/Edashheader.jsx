import React from 'react'
import companylogo from '../companylogo.jpg'
import './Edashheader.css'
import { Link } from 'react-router-dom'

const Edashheader = () => {
  return (
    <div>
      <div className="header1">
            <img src={companylogo} className='logo' alt="" />
            <nav className="header-row">
                <ul>
                    <li className='li'><Link className='link' to='/Application'>Application</Link></li>
                    <li className='li'><Link className='link' to='/employeecompany'>About Company</Link></li>
                    <li className='li'>Profile</li>
                </ul>
            </nav>
            <div className="contact-info">
              <p className='sub'>client support <br />123-456-7890</p>
              <button className='con'><Link to='/Contact'>contact us</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Edashheader
