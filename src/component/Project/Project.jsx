import React from 'react'
import './Project.css';
import IMG1 from './images/joke_teller.png';
import IMG2 from './images/roboworld.png';

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <Swiper className="container portfolio__container"
      modules={[ Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      >
        <SwiperSlide className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="1" />
          </div>
          <h3>Joke Teller</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com/ankitsp-762/Joke_teller" className='btn' >Source Code</a>
           <a href="https://ankitsp-762.github.io/Joke_teller/" className='btn btn-primary' >Live Demo</a>
          </div>
         
        </SwiperSlide>
        <SwiperSlide className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="2" />
          </div>
          <h3>Roboworld</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com/ankitsp-762/roboworld" className='btn' >Source Code</a>
           <a href="https://ankitsp-762.github.io/roboworld/" className='btn btn-primary' >Live Demo</a>
          </div>
        </SwiperSlide>
        
      </Swiper>  
      
      
    </section>
  )
}

export default Portfolio