import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8h3mfjs', 'template_ndrs0ph', form.current, 'd6OEN_-6wjCMbSnDE')

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>vnjvibhash@gmail.com</h5>
            <a href="mailto:vnjvibhash@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FiGithub className='contact__option-icon' />
            <h4>Github</h4>
            <h5>Vnjvibhash</h5>
            <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FVnjvibhash" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-7762974716</h5>
            <a href="https://wa.me/917762974716" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <div className="formBtn">
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <button type='reset' className='btn btn2'>Reset</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
