import React from 'react'
import companylogo from '../companylogo.jpg'
import './Edashheader.css'
import { Link, useNavigate } from 'react-router-dom'

const Edashheader = (props) => {
  const { employeeid } = props;
  const navigate=useNavigate()
  function goto(){
    navigate('/Application',{state:{employeeid:employeeid}})
  }
  function go(){
    navigate('/employeeprofile',{state:{employeeid:employeeid}})
  }
  function display(){
    navigate('/employeecompany')
  }
  return (
    <div>
      <div className="header1">
            <img src={companylogo} className='logo' alt="" />
            <nav className="header-row">
                <ul>
                    <li className='li'><p className='link' onClick={goto}>Application</p></li>
                    <li className='li'><p className='link' onClick={display}>About Company</p></li>
                    <li className='li'><p className='link' onClick={go}>Profile</p></li>
                </ul>
            </nav>
            <div className="contact-info">
              <p className='sub'>client support <br />123-456-7890</p>
              <button className='con'><Link to='/Contactempl'>contact us</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Edashheader
