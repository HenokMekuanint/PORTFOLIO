import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>HENA</a>
      <ul className='premalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='http://fb.com/henok.mekuanint/' target="_blank" rel="noreferrer"> <FaFacebookF/></a>
        <a href='http://instagram.com/jr_henii/' target="_blank" rel="noreferrer"> <FiInstagram/></a>
        <a href='https://twitter.com/Henokmekuanint1' target="_blank" rel="noreferrer"> <IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Henok Mekuanint. All right reserved   2022</small>
      </div>
    </footer>
  )
}
export default Footer
