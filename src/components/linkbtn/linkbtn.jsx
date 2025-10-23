import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import "./linkbtn.css"

const Link = () => {
  return (
    <Row className='socials' >

      <Row>
        <a className='linkd' href='https://www.linkedin.com/in/ameya-goel-14b4181b5/' target="_blank"></a>
      </Row>
      {/* <Row>
        <a className='email' href='mailto:ameyagoel@gmail.com?subject=Contact Inquiry' target="_blank"></a>
      </Row> */}

      <Row>
        <a className='git' href="https://github.com/ameyagoel" target="_blank"></a>
      </Row>
    </Row>

  )
}

export default Link