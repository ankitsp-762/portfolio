import React from 'react';
import './Contact.css';
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form =useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ub2itpf', 'template_q5ydcum', form.current, 'q7v_eL6x5ciTVk6fo')
     e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__icon' />
            <h4>Email</h4>
            <h5>asinghp.2022@gmail.com</h5>
            <a href="mailto:asinghp.2022@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__icon' />
            <h4>Messenger</h4>
            <h5>Ankit S Patel</h5>
            <a href="https://m.me/ankit.spatel.1485" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"   rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact