import React from 'react'
import Empcompany from './ecompany'
import { useLocation } from 'react-router';
// import Edashheader from './Edashheader'
// import Footer from '../Developer/copyfoot'

const Edashboard = () => {
  const location=useLocation();

  
  return (
    <div>
      <Empcompany employeeid={location.state.employeeid} />

    </div>
  )
}

export default Edashboard
