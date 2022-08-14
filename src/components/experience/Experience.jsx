import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di"
import {TbBrandJavascript} from "react-icons/tb"
import {FaReact} from "react-icons/fa"
import {FaNode} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import {SiDjango} from "react-icons/si"
import {SiJava} from "react-icons/si"
import {SiSpringboot} from "react-icons/si"
import {SiMysql} from "react-icons/si"
import {SiFlutter} from "react-icons/si"
import {SiGithub} from "react-icons/si"
const Experience = () => {
  return (
    <section id="experience">
      Experience
      <h5>What Skills I Have</h5>
      <h2> My Experince</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <AiFillHtml5/>
              <h4> HTML</h4>
              <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
              <DiCss3/>
              <h4> CSS</h4>
              <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
              <TbBrandJavascript/>
              <h4> JAVASCRIPT</h4>
              <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience__details'>
              <FaReact/>
              <h4> REACT</h4>
              <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
              <SiFlutter/>
              <h4> Flutter</h4>
              <small className='text-light'>Intermediate</small>
          </article>

          </div>

        </div>


        <div className="experience__backend">
          
      <h3>Backend Development</h3>
        <div className="experience__content">

        <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>ExpressJs</h4>
              <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience__details'>
              <FaNode/>
              <h4> Node</h4>
              <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience__details'>
              <SiMongodb/>
              <h4> Mongo</h4>
              <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience__details'>
              <SiDjango/>
              <h4> Django</h4>
              <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience__details'>
              <SiJava/>
              <h4> Java</h4>
              <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience__details'>
              <SiSpringboot/>
              <h4>SpringBoot</h4>
              <small className='text-light'>Intermediate</small>
          </article>


          <article className='experience__details'>
              <SiMysql/>
              <h4>MySql</h4>
              <small className='text-light'>Intermediate</small>
          </article>

          </div>

          
        </div>


        <div className="experience__backend">
          
          <h3>Github</h3>
            <div className="experience__content">
    
            <article className='experience__details'>
                  <SiGithub/>
                  <h4>Github</h4>
                  <small className='text-light'>Intermediate</small>
              </article>
              </div>
            </div>


      </div>

      </section>
    
  )
}
export default Experience
