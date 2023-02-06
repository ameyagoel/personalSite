import React from 'react'
import About from './components/about/about.jsx'
import Button from './components/buttons/buttons.jsx'
import Clouds from './components/clouds/clouds.jsx'
import Landing from './components/landing/landing.jsx'
import Link from './components/linkbtn/link.jsx'
import Navigation from './components/navigation/navigation.jsx'
import Skills from './components/skills/skills.jsx'




const App = () => {
  return (
    <>
        <Navigation/>
        <Landing/>
        <About/>
        <Skills/>
    </>
  )
}

export default App
