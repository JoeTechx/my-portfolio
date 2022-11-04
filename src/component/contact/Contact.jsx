import React, { useRef }from 'react'
// import React from 'react'
import "./Contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef(); 
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_l9ea7jo', 'template_lh53gw5', form.current, 'c_TxQowTgI7ItU8kG')
  
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail  className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>oyinjoe23@gmail.com</h5>
          <a href="mailto:oyinjoe23@gmail.com">Send a message</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>JoeX</h5>
          <a href="https://m.me/joseph.oyinloye.351" target="blank">Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp  className="contact__option-icon" />
          <h4>WhatsApp</h4>
          <h5>+234 904 2345 543</h5>
          <a href="https://api.whatsapp.com/send?phone+2348118276455" target="blank">Send a message</a>
        </article>

      </div>
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <textarea name="message" rows="7" placeholder="Your Message..." required ></textarea>
      <button type="submit" className="btn btn-primary sub-btn">Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact