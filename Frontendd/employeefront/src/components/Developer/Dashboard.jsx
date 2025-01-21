import React from 'react'
// import About from './About'
import Dashheader from './Dashheader'
import { useLocation } from 'react-router'
import Footer from './copyfoot'
import Companyinfo from './Companyinfo'


const Dashboard = () => {
  const location=useLocation();
  return (
    <div>
      <header>
        {/* <About /> */}
        <Dashheader employeeid={location.state.employeeid}  />
        <Companyinfo />
        <Footer />
      </header>
    </div>
  )
}

export default Dashboard