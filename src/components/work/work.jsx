import React from 'react'
import './work.css'
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

const Work = () => {
  return (
    <div   style={{minHeight:'100vh'}}>  
    <Container style={{display:'flex', flexDirection:'row', marginLeft:'0%'}}>
  <LinkBtn /> 
  <Col style= {{marginLeft:'10%'}}>
    <div className="boxPort" style= {{width:'55rem'}} >
      <h2>Projects</h2>
      <hr className='line' style={{
        height: '.1875rem', width: '40rem',
        background: "#fff",
        border: "none",
      }} />
      <h3> Various Games and Projects I have worked on
</h3>
<h3 style={{fontWeight:300, fontSize:'1.4rem '}}> Scroll For More ↓
</h3>

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

export default Work
