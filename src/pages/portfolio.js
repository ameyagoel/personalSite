import React from 'react'
import About from '../components/about/about.jsx'
import Landing from '../components/landing/landing.jsx'
import Navigation from '../components/navigation/navigation.jsx'
import Skills from '../components/skills/skills.jsx'
import Portfolio from '../components/portfolio/portfolio.jsx'
import LinkBtn from '../components/linkbtn/linkbtn.jsx'
import PortfolioItem from '../components/portfolioItems/portfolioItems.jsx'




const PortfolioPage = () => {
  return (
    <div className='portfolio'>
         <Navigation/>
         <Portfolio></Portfolio>
         <PortfolioItem></PortfolioItem>
    </div>
    
  )
}

export default PortfolioPage
