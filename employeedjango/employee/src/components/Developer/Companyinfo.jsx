import React from 'react'
import begin from './begin.webp'
import mission from './mission.jpg'
import global from './global.webp'
import './Companyinfo.css'

const Companyinfo = () => {
  return (
    <div>
      <div className='About-con'>
        <h1 className='mid'>Dedicated to delivering excellence</h1>
        <p className='paradetails mid'>Everyone has a story. Here is ours.</p>
        <div className="begin">
            <img src={begin} className='bimg' alt="" />
            <div className="data">
                <h3>The Beginning</h3>
                <p className='paradetails'>
                    The Coapps journey began in 1995 when two college friends, John Salivan and Kris Klopperman, got together and started selling computers and engineering calculators.
                </p>
            </div>
        </div>

        <div className="begin">
          <div className="data2">
            <h3>Mission</h3>
            <p className='paradetails'>
              At Coapps, we are on a mission to bring together the personal service of local IT providers with the power of a national network. We believe that's simpler than it sounds. Our offices offer high-touch IT services that clients love from highly experienced local team members.
            </p>
          </div>
          <img src={mission} className='bimg' alt="" />
        </div>

        <div className="begin">
          <img src={global} className='bimg' alt="" />
          <div className="data">
            <h3>We are global</h3>
            <p className='paradetails'>
              Our national network allows us to offer best-in-class services like dedicated vCIOs, specialized security and compliance advisory services, a 24/7 help desk, and more.
            </p>
          </div>
        </div>
        
        <div className="centerhome">
          <h3>WHY US</h3>
          <p className='paradetails'>
            “We put our people first. It's something a lot of companies say, but not a lot of companies do. Here at Coapps, it's our most important core value. We believe when we place a high value on our team's happiness, work/life balance, and professional development, everybody wins—clients included.
          </p>
          <h3 className='values'>OUR CORE VALUES</h3>
          <p className='paradetails'>
            Our culture is built around five key attributes that differentiate us from our competition.
          </p>
          <ul>
            <li><strong>Passionate:</strong> We are intensely enthusiastic about providing a superior experience.</li>
            <li><strong>Respectful:</strong> We are polite and kind to one another, even when it gets tough.</li>
            <li><strong>Ownership:</strong> We are empowered to do our jobs and work towards a common goal.</li>
            <li><strong>Unified:</strong> We work as a team and trust each other to create a seamless experience.</li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Companyinfo
