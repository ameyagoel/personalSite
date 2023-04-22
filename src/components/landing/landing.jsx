import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"

import Button from '../buttons/buttons'
import cloud1 from '../../assets/cloud1.png'
import cloud2 from '../../assets/cloud2.png'

import steam1 from '../../assets/steam1.png'
import steam2 from '../../assets/steam2.png'

import moon from '../../assets/moon.png'
import star from '../../assets/star.png'

import LinkBtn from '../linkbtn/linkbtn'
import ScrollBar from '../scrollBar/scrollBar'

const Landing = () => {
  return (
    <div id='1' className="land" style={{height:'100vh'}}>
      <Container style={{display:'flex', flexDirection:'row', marginLeft:'0%'}}>
        <LinkBtn /> 
        <Col style= {{marginLeft:'10%'}}>
          <div className="boxLanding">
            <h2> Ameya Goel</h2>
            <hr className='line' style={{
              height: '.1875rem', width: '40rem',
              background: "#fff",
              border: "none",
            }} />
            <h3> illustration • design • ui/ux</h3>
            <h1> ameyagoel@gmail.com</h1>
            <Button ></Button>
          </div>
        </Col>
        <Col >
          <img src={moon} className='moon' />
        </Col>
        
        
        
      </Container>
      



      <img src={cloud1} className='cloud1Img' />
      <img src={cloud2} className='cloud2Img' />
      <Container className='scroll'> 
        
        <ScrollBar />
      </Container>
      
    </div>
  )
}

export default Landing
