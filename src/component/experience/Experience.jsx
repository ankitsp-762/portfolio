import React from 'react';
import './Experience.css';
import { SiCodio,SiReact } from 'react-icons/si';
import {ImHtmlFive} from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';



const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Expereience</h2>
      <div className="container experience__container">
        <div className="experience__content">
          <article className="expeience__detail">
            <SiCodio  className='skill_icon cod' />
            <div>
             <h3>C/C++</h3>
             <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className="expeience__detail">
            <ImHtmlFive className='skill_icon html' />
            <div>
              <h3>HTML</h3>
              <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className="expeience__detail">
            <SiCss3 className='skill_icon css' />
            <div>
             <h3>CSS</h3>
             <small className='text-light'>Beginner-Intermediate</small>
            </div>
            
          </article>
          <article className="expeience__detail">
            <SiJavascript className='skill_icon js' />
            <div>
              <h3>Javascript</h3>
              <small className='text-light'>Beginner-Intermediate</small>
            </div>
            
          </article>
         
          <article className="expeience__detail">
            <SiReact className='skill_icon react' />
            <div>
              <h3>React</h3>
              <small className='text-light'>Beginner</small>
            </div>
            
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience