import React from 'react';
import 'animate.css';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';

import Experience from './component/experience/Experience';

import Contact from './component/contact/Contact';
import Project from './component/Project/Project';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
     
      <Experience />
      <Project />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App

