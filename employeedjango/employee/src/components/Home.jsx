import React from 'react'
import { Link } from 'react-router-dom'
import companylogo from '../assets/companylogo.jpg'
import onboarding from '../assets/onboarding.jpg'
import './Home.css'

const Home = () => {
  return (
    <>
        <div className="home">
            <header>
                <div className="header-sec">
                    <img className='img' src={companylogo} alt="comapanyimage" />
                    <h1 className='main_heading'>Welcome to Employee Onboarding Process</h1>
                </div>
            </header>
            <main>
                <div className="main-sec">
                    <img className='img2' src={onboarding} alt="onboarding" />
                    <div className="section">
                        <Link to='/developerlogin'>
                            <button className='btn1 button'>Developer</button>
                        </Link>
                        <Link to='/employeelogin'>
                            <button className='button'>Employee</button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    </>
  )
}

export default Home
