import React from 'react'
import "./service.css"
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
          <h3>UX/UI design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> UX/UI design using Figma</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>UX/UI design for web and android app </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> UI compatability test</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
          <h3>Website Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> Website design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> Website rest api development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> Website testing </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
          <h3>Android App Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> Android App architecture design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> rest api development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> APP testing </p>
            </li>
          </ul>
        </article>

        
              </div>
    </section>
  )
}
export default Service

