import React from 'react'
import About from './components/about/about.jsx'
import Button from './components/buttons/buttons.jsx'
import Clouds from './components/clouds/clouds.jsx'
import { Routes, Route } from "react-router-dom"
import Landing from './components/landing/landing.jsx'
import LinkBtn from './components/linkbtn/linkbtn.jsx'
import Navigation from './components/navigation/navigation.jsx'
import Skills from './components/skills/skills.jsx'
import ScrollBar from './components/scrollBar/scrollBar.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Home from './pages/home.js'
import PortfolioPage from './pages/portfolio.js'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/portfolio" element={ <PortfolioPage/> } />
        </Routes>
    </div>
  )
}

export default App
