import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import "./linkbtn.css"

const Link = () => {
  return (
    <Col className='socials' style={{marginTop:'10vh'}}>
      <Row >
      <a className='insta' href='https://www.instagram.com/meylatte/'></a>
      </Row>
      <Row>
      <a className='linkd' href='https://www.linkedin.com/in/ameya-goel-14b4181b5/'></a>
      </Row>
      <Row>
      <a className='email' href='mailto:ameyagoel@gmail.com?subject=Contact Inquiry' ></a>
      </Row>
      <Row>
      <a className='art' href="/portfolio"></a>
      </Row>
      <Row>
      <a className='git' href="https://github.com/ameyagoel"></a>
      </Row>
      </Col>

  )
}

export default Link