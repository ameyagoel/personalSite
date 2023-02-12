import React from 'react'
import About from '../components/about/about.jsx'
import Landing from '../components/landing/landing.jsx'
import Navigation from '../components/navigation/navigation.jsx'
import Skills from '../components/skills/skills.jsx'




const Home = () => {
  return (
    <div>
        <Navigation/>
        <Landing/>
        <About id="about"/>
        <Skills/>
    </div>
  )
}

export default Home
