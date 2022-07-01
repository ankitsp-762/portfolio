import React from 'react';
import './Footer.css';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';

const Footer = () => {
  return (
    <footer id="Footer">
        <ul className='links'>
            <li>
                <a href="#header">Home</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#portfolio">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>

        </ul>
        <div className="footer__socials">
            <a href="https://www.facebook.com/ankit.spatel.1485" className='face' target='_blank'>
                 <BsFacebook />
            </a>
            <a href="https://www.linkedin.com/in/ankit-singh-patel-b7453a219" className='lin' target='_blank'>
                <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/ankit_sp_762/" className='insta' target='_blank'>
                <GrInstagram />
            </a>
        </div>
    </footer>
  )
}

export default Footer