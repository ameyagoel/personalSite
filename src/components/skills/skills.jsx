import React from 'react'
import "./skills.css"
import { Container, Row, Col } from 'react-grid-system'
import pfp from '../../assets/pfp.png'
import border from '../../assets/border.png'
import star from '../../assets/starSkills.png'
import skills1 from '../../assets/skills1.png'
import skills2 from '../../assets/skills2.png'
import skills3 from '../../assets/skills3.png'
import moon from '../../assets/moonbanner.png'

import cloud1 from '../../assets/cloud1.png'
import cloud2 from '../../assets/cloud2.png'


const Skills = () => {
  return (
    <div id='3'style={{ maxHeight: '110vh' }}>
      <Container style={{ marginTop: '4rem'}}>
        <Row style={{  justifyContent: 'center', }}>
          <Col xs={1.5} sm={1.5} lg={.6}>
            <img src={star} className='star' />
          </Col>
          <Col xs={4.5}sm={3.5} lg={2} >
            <h5 className='header'> Skills </h5>
          </Col>
          <Col xs={1}sm={1} lg={.6} style={{ marginLeft: '1rem'}}>
            <img src={star} className='star' />
          </Col>

        </Row>
      </Container>
      <Container className='skill' style={{display:'flex'}}>
      <img src={skills1} className='skills' />
      <img src={skills2} className='skills' />
      <img src={skills3} className='skills' />
     


        
        
      </Container>
      <Row style={{justifyContent: 'center', marginTop:'1.3rem'}}> 
        
      <Col sm={3}lg={4}> 
        <img src={cloud1} className='cloud3Img' />
      </Col>
      <Col  sm={6}lg={4}> 
      <img  src={moon} className='moon' />
      </Col>
      <Col sm={3}lg={4}> 
      <img src={cloud2} className='cloud4Img' /> 
      </Col>
      </Row>


    </div>
  )
}

export default Skills