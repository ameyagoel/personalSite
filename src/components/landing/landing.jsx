import React from 'react'
import "./landing.css" 
import Button from '../buttons/buttons'
import cloud1 from '../../assets/cloud1.png'
import cloud2 from '../../assets/cloud2.png'

import steam1 from '../../assets/steam1.png'
import steam2 from '../../assets/steam2.png'

import moon from '../../assets/moon.png'
import star from '../../assets/star.png'

const Landing = () => {
  return (
    <header>
      <div className="boxLanding">
      <img src={steam1 } className='steam1'/>
        <img src={steam2} className='steam2'/>
        <img src={star } className='star'/>
        <img src={moon } className='moon'/>
        <h2> Ameya Goel</h2>
        <hr className='line' style={{height: '.1875rem', width:'40rem',
    background: "#fff",
    border: "none",}}/>
        <h3> illustration • design • ui/ux</h3>
        <h1> ameyagoel@gmail.com</h1>
        <Button ></Button>
        <img src={cloud1 } className='cloud1Img'/>
        <img src={cloud2 } className='cloud2Img'/>
        
      </div>
    </header>
  )
}

export default Landing
