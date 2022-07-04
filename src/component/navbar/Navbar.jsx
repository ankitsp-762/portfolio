import React from 'react'
import './Navbar.css';
import {SiHomeassistant} from 'react-icons/si';

import {HiCode} from 'react-icons/hi';
import {FaLaptop} from 'react-icons/fa';
import {IoMdContact} from 'react-icons/io';
import {useState} from 'react';

const Navbar = () => {
  const [activeNav,setActiveNav] = useState('#');


  return (
    <nav>
      <a href="#header" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><SiHomeassistant /></a>
    
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><HiCode /></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }><FaLaptop /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><IoMdContact /></a>
    </nav>
  )
}

export default Navbar