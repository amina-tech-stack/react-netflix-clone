import React from 'react'
import Navbar from '../../compeonents/navBar/navBar'
import Footer from '../../compeonents/footer/footer'
import Player from '../../compeonents/player/player'
import TitleCards from '../../compeonents/titleCards/titleCards'
import hero_baner from'../../assets/hero_banner.jpg'
import hero_title from'../../assets/hero_title.png'

import './home.css'
const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
      <div className="hero">
        <img src={hero_baner} alt="" className='banner-image'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>
            Discovering his ties to a secret ancient order, a young man living in a modern Istanbul emabrks 
            in a quest to save the city from immortal enemy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home