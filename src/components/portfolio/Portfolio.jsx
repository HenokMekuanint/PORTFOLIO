import React from 'react'
import "./portfolio.css"
import IMG2 from '../../assets/shoe.PNG'
import IMG3 from '../../assets/chess.PNG'
import IMG4 from '../../assets/calc.PNG'
import IMG5 from '../../assets/rent.PNG'
import IMG6 from '../../assets/comp.PNG'
import IMG1 from '../../assets/agelgil.PNG'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="Project 1" />
          </div>
          <h3> Agelgil Online Hotel Reservation</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/HenokMekuanint/AGELGIL_ONLINE_HOTEL_RESERVATION_USING_SPRINGBOOT' className='btn 'target="_blank" rel="noreferrer">Github</a>
          <a href='https://agelgil.herokuapp.com/' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG2} alt="Project 2" />
          </div>
          <h3> Shoe Shopping App</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/HenokMekuanint/SHOE_SHOPPING_APP_USING_MERN' className='btn 'target="_blank" rel="noreferrer">Github</a>
          <a href='https://github.com/HenokMekuanint/SHOE_SHOPPING_APP_USING_MERN' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG3} alt="Project 3" />
          </div>
          <h3> Chess Game</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/HenokMekuanint/CHESS_GAME' className='btn ' target="_blank" rel="noreferrer">Github</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG4} alt="Project 4" />
          </div>
          <h3> Calculator using Python</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/HenokMekuanint/CALCULATOR_USING_PYTHON' className='btn ' target="_blank" rel="noreferrer">Github</a>
          </div>

        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG5} alt="Project 5" />
          </div>
          <h3> Gojo Material Rent App</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/HenokMekuanint/GOJO_MATERIALS_RENT' className='btn ' target="_blank" rel="noreferrer">Github</a>
          <a href='https://github.com/HenokMekuanint/GOJO_MATERIALS_RENT' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>

        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG6} alt="Project 6" />
          </div>
          <h3> Competitive Porgramming</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/HenokMekuanint/Competitiveprogramming' className='btn '>Github</a>
          </div>

        </article>


        

      </div>
    </section>
  )
}

export default Portfolio

