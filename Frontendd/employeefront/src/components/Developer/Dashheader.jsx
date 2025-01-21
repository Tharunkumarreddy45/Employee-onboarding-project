import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import companylogo from '../companylogo.jpg'
import './Dashheader.css'

const Dashheader = (props) => {
  const { employeeid } = props;
  const navigate=useNavigate()
  function goto1(){
    navigate('/Aboutcompany',{state:{employeeid:employeeid}})
  }
  function go1(){
    navigate('/profiledev',{state:{employeeid:employeeid}})
  }
  function display1(){
    // navigate('/')
    navigate('/rolesandresposibilities')
  }
  return (
    <>
        <div className="header1">
            <img src={companylogo} className='logo' alt="" />
            <nav className="header-row">
                <ul>
                    <li className='li' > <p className='link' onClick={goto1}>About</p></li>
                    <li className='li'><p className='link' onClick={display1}>Roles and Responsibilities</p></li>
                    <li className='li'> <p className='link' onClick={go1}>Profile</p></li>
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
