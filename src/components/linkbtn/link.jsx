import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import "./link.css"

const Link = () => {
  return (
    <Container style={{marginTop:'8%'}}> 
    <Col >
    <Row >
      <a className='git'></a> </Row>
      <Row>
      <a className='insta' href='https://www.instagram.com/meylatte/'></a>
      </Row>
      <Row>
      <a className='linkd' href='https://www.linkedin.com/in/ameya-goel-14b4181b5/'></a>
      </Row>
      <Row>
      <a className='email' href='mailto:ameyagoel@gmail.com?subject=Contact Inquiry' ></a>
      </Row>
      <Row>
      <a className='about' href="#about"></a>
      </Row>
      <Row>
      <a className='art'></a>
      </Row>
      </Col>
      </Container>

  )
}

export default Link