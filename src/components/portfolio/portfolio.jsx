import React from 'react'
import './portfolio.css'
import { Col, Row, Container } from 'react-grid-system'
import ButtonPort from '../buttons/buttonsPortFolio'
import cloud1 from '../../assets/cloud1.png'
import cloud2 from '../../assets/cloud2.png'

import steam1 from '../../assets/steam1.png'
import steam2 from '../../assets/steam2.png'

import planet from '../../assets/planet.png'
import star from '../../assets/star.png'

import LinkBtn from '../linkbtn/linkbtn'
import ScrollBar from '../scrollBar/scrollBar'

const Portfolio = () => {
  return (
    <div id='1' className='land' style={{maxHeight:'100vh',overflow: 'hidden'}}>  
    <Container style={{display:'flex', flexDirection:'row', marginLeft:'0%'}}>
  <LinkBtn /> 
  <Col style= {{marginLeft:'10%'}}>
    <div className="boxPort" style= {{width:'60rem'}} >
      <h2>Art + Design</h2>
      <hr className='line' style={{
        height: '.1875rem', width: '40rem',
        background: "#fff",
        border: "none",
      }} />
      <h3> A collection of my best designs and illustrations
</h3>
      <ButtonPort ></ButtonPort>
    </div>
  </Col>
  <Col >
    <img src={planet} className='moon' />
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

export default Portfolio
