import React from 'react'
import Edashheader from './Edashheader'
import Companyinfo from '../Developer/Companyinfo'
import Footer from '../Developer/copyfoot'

const ecompany = (props) => {
  const { employeeid } = props;

  return (
    <div>
      <Edashheader employeeid={employeeid} />
      <Companyinfo />
      <Footer />
    </div>
  )
}

export default ecompany
