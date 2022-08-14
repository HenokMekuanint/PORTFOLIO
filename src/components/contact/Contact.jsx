import React from 'react'
import { useRef } from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {RiWhatsappFill} from "react-icons/ri"
import emailjs from 'emailjs-com'
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7f8b7ft', 'template_sx21wpi', form.current, '_0OITB5U3jaeaQ1Qv')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>henokmekuanint79@gmail.com</h5>
            <a href='mailto:henokmekuanint79@gmail.com' target="_blank" rel="noreferrer"> Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Henok Mekuanint</h5>
            <a href='https://m.me/henok.mekuanint' target="_blank" rel="noreferrer"> Send a message</a>
          </article>

          <article className="contact__option">
            <RiWhatsappFill/>
            <h4>WhatsApp</h4>
            <h5>+(251) 123456789</h5>
            <a href='https://api.whatsapp.com/send?phone+251962081628' target="_blank" rel="noreferrer"> Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}> 
        <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your email' required/>
        <textarea name='message' rows="7" placeholder='your message'></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact

