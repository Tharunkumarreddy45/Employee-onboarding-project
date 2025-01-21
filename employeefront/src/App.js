// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Developerlogin from './components/signinsignup/Developerlogin';
import Employeelogin from './components/signinsignup/Employeelogin';
import Developersignup from './components/signinsignup/Developersignup';
import Employeesignup from './components/signinsignup/Employeesignup'
import Dashboard from './components/Developer/Dashboard';
import Developerprofile from './components/Developer/profiledev'
// import Dashheader from './components/Developer/Dashheader';
import About from './components/Developer/About';
// import contactinfo from './components/Developer/contactinfo';
import Edashboard from './components/Employee/Edashboard';
import Company from './components/Employee/ecompany';
import Application from './components/Employee/Application';
import Contact from './components/Developer/Contactlink';
import DeveloperForm from './components/Developer/DeveloperForm';
import Employeeprofile from './components/Employee/Employeeprofile';
import RolesAndResponsibilities from './components/Developer/rolesandresponsibilities';
import Contactemp from './components/Employee/Contactemp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/developerlogin' element={<Developerlogin />} />
        <Route path='/employeelogin' element={<Employeelogin />} />
        <Route path='/developersignup' element={<Developersignup />} />
        <Route path='/employeesignup' element={<Employeesignup />} />
        <Route path='/developerdashboard' element={<Dashboard />} />
        <Route path='/Aboutcompany' element={<About />} />
        <Route path='/profiledev' element={<Developerprofile />} />
        <Route path='/employeedashboard' element={<Edashboard />} />
        <Route path='/employeecompany' element={<Company />} />
        <Route path='/Application' element={<Application />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/devform' element={<DeveloperForm />} />
        <Route path='/employeeprofile' element={<Employeeprofile />} />
        <Route path='/rolesandresposibilities' element={<RolesAndResponsibilities />} />
        <Route path='/Contactempl' element={<Contactemp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
