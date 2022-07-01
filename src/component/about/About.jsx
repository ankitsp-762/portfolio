import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container" >
        <div className="about__me">
          <div className="about__me-image">
            <img src="#" alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Lorem es</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Lorem es</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Lorem es</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ducimus adipisci aliquid asperiores illum, ullam maxime culpa, dolor corrupti voluptatibus, praesentium eos eveniet harum magni nemo? Consequatur iure ipsam perspiciatis?
          
          </p>
          <button className='btn'>Let's Talk</button>
        </div>
      </div>
    </section>
  )
}

export default About