import React from 'react';
import './Header.css';
import CTA from './CTA';
import Social from './Social';
// import ME from './me.png';




const Header = () => {
 

 

  return (
    <header>
      <div id='header' className="container header__container">
        <h3 className='hello'>
         <span className='la'>H</span>
         ELLO
         <span className='ex'>! </span>
         
         <span className='la'>I</span>
          'm
          
        </h3>
        <h1 className='name' >
          <span className='fir'>A</span>
          nkit 
          <span> </span>
          <span >S</span>
          ingh 
          <span> </span>
          <span >P</span>
          atel
     
        </h1>
        <h3 className="text-light job">Web Developer</h3>
        <CTA />
        <div className="me">
          <h1 className='logo'>A</h1>
          
        </div>

        <a href="#Footer" className='scroll__down'>Scroll Down</a>
        <Social />
      </div>

    </header>
  )
}

export default Header