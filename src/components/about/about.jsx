import React from 'react'
import "./about.css"
import { Container, Row, Col } from 'react-grid-system'
import pfp from '../../assets/me.svg'
import cafe from '../../assets/cafepic.svg'
import sky from '../../assets/skypic.svg'
import AboutTab from '../aboutTabs/aboutTabs.jsx'
import Job from '../job/jobComp.jsx'



const About = () => (
  <div className="about">
    <div className='aboutRow'>
      <AboutTab></AboutTab>
      <div className='images'>
        <img src={sky} className='image' />
        <img src={pfp} className='pfp' />
        <img src={cafe} className='image' />
        
      </div>
    </div>
    <div>
      <h4 className='expTitle'> Experience </h4>
      <Container className='jobs'>
        <Job
          title={"Software Developer"}
          company={"UBC Emerging Media Lab"}
          year={"Jan 2025 - April 2025"}
          context={"Developed interactive features and assets directly within Unreal Engine to support gameplay and design goals. "}
        > </Job>
        <Job
          title={"Front-End Developer"}
          company={"Culture Foundry Studios"}
          year={"June 2024 - April 2025"}
          context={"Developed interactive features and assets directly within Unreal Engine to support gameplay and design goals. "}
        > </Job>
        <Job
          title={"UX Designer"}
          company={"UBC Emerging Media Lab"}
          year={"June 2024 - Aug 2024"}
          context={"Developed interactive features and assets directly within Unreal Engine to support gameplay and design goals. "}
        > </Job>
        <Job
          title={"Web Designer"}
          company={"Cities in Motion Lab"}
          year={"Nov 2023 - June 2024"}
          context={"Developed interactive features and assets directly within Unreal Engine to support gameplay and design goals. "}
        > </Job>
      </Container>

    </div>

  </div>
)

export default About