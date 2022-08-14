import React from 'react';
import "./about.css";
import ME from "../../assets/ab.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
      <h5> Get to know me</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="me"></img>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5> Experience</h5>
              <small>2+ Years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about_icon'/>
              <h5> Clients</h5>
              <small>3+ clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about_icon'/>
              <h5> Porjects</h5>
              <small>30+ projects</small>
            </article>

          </div>

        <p>
           I have been Working in Full stack development for the past two years and I have been working on web development
           including Frontend and Backend development as well. Currently I am looking for long term Internship in web development.
        </p>
        <a href='#contact' className='btn btn-primary'> Lets talk</a>
          </div>

      </div>
    </section>
  )
}
export default About

