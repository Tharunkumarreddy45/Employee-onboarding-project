import React from 'react'
import './copyfoot.css'

const footer = () => {
  return (
    <div>
      <footer className='foot'>
      <table className='maxwidth'>
        <th>Solutions</th>
        <tr>
          <td>Managed services</td>
          <td>Mobile Development</td>
        </tr>
        <tr>
          <td>IT Consulting & Advisory</td>
          <td>Cloud Services</td>
        </tr>
        <tr>
          <td>Cyber Security</td>
          <td>Network Connectivity</td>
        </tr>
        <tr>
          <td>Web Development</td>
          <td>ERP Solutions</td>
        </tr>
      </table>

      <table className='maxwidth'>
        <th>Company</th>
        <tr>
          <td>About Us</td>
          <td>Blog</td>
        </tr>
        <tr>
          <td>Why us</td>
          <td>Case studies</td>
        </tr>
        <tr>
          <td>Team</td>
          <td>Events</td>
        </tr>
        <tr>
          <td>Careers</td>
          <td>FAQ</td>
        </tr>
        <tr>
          <td>Partners & Certifications</td>
          <td>Reviews & Awards</td>
        </tr>
      </table>
      <h3 className='mid'>2023 Coapps Terms & Conditions Privacy Policy</h3>
    </footer> 
    </div>
  )
}

export default footer
