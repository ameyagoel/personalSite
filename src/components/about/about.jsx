import React from 'react'
import "./about.css"
import { Container, Row, Col } from 'react-grid-system'
import pfp from '../../assets/pfp.png'
import border from '../../assets/border.png'
import star from '../../assets/star.png'
import draw from '../../assets/draw.png'
import gamer from '../../assets/gamer.png'
import crochet from '../../assets/crochet.png'
import coffee from '../../assets/coffee.png'
import music from '../../assets/music.png'

const About = () => {
  return (
    <div id="2" style={{ backgroundColor: '#fff', minHeight: '100vh' , overflow: 'hidden'}}>
      <Container style={{ marginLeft: '0%' }}>
        {/* <Row style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }} >
          <img src={star} style={{}} className="starLarge" />
        </Row> */}
        <Row className='aboutSect' >
          <Col md={6} lg={5} style={{ paddingLeft: '10%', paddingTop: '10%', }} >
            <Row style={{  }}>
              <Col sm={5} lg={10}>
              <img src={pfp} className='pfp' />
              </Col>
              <Col sm={6} lg={2}>
            <Container className='abttext' style={{ width:"60vh",paddingTop: '10%' }}>
              <h4 style={{ textAlign: 'left' }}> About Me </h4>
              <h6 style={{ textAlign: 'left', width: '45rem'}}> Hi! I'm Ameya Goel. I am an illustrator, designer, and developer from Denver, Colorado. I am currently studying computer science with a focus on UI/UX and design at the University of British Colombia in Vancouver, BC. I have been doing freelance design work since high school and am always looking to grow and improve my skills as both a designer and a developer! </h6>
            </Container>
          </Col>

            </Row>
            
            <Row className="interestRow"style={{}}>
              <Col  sm={6} lg={11} >
                <h5 style={{ marginLeft: 0, textAlign: 'left' }}> Interests </h5>
                
              </Col>
              <Col sm={6} lg={1} >
                <img src={border} className='border'style={{width:'45rem', marginTop: '2rem'}}/>
              </Col>
              
            </Row>
          </Col>
          
        </Row>
        <Row className='inters' style={{ paddingLeft: '5%', alignItems:'baseline'}} >
          <Col style={{alignItems:'center',  }} > 
              <Row>
              <img src={draw} className='interest' />
              </Row>
              <Row>
              <h1 className='interestNote'> Drawing and Animation </h1>
              </Row>
          </Col>
          <Col style={{alignItems:'center',  }} > 
              <Row>
              <img src={gamer} className='interest' />
              </Row>
              <Row>
              <h1 className='interestNote'> Video Games </h1>
              </Row>
          </Col>
          <Col style={{alignItems:'center',}} > 
              <Row>
              <img src={coffee} className='interest' />
              </Row>
              <Row>
              <h1 className='interestNote'> Cafes </h1>
              </Row>
          </Col>
          <Col style={{alignItems:'center',  }} > 
              <Row>
              <img src={music} className='interest' />
              </Row>
              <Row>
              <h1 className='interestNote'> Listening To Music </h1>
              </Row>
          </Col>
          <Col style={{alignItems:'center',  }} > 
              <Row>
              <img src={crochet} className='interest' />

              </Row>
              <Row>
              <h1 className='interestNote'> Crocheting </h1>
              </Row>
          </Col>
          
        </Row>

      </Container>

    </div>
  )
}

export default About