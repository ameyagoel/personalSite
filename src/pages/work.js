import React from 'react'
import About from '../components/about/about.jsx'
import Landing from '../components/landing/landing.jsx'
import Navigation from '../components/navigation/navigation.jsx'
import Skills from '../components/skills/skills.jsx'
import Portfolio from '../components/portfolio/portfolio.jsx'
import LinkBtn from '../components/linkbtn/linkbtn.jsx'
import PortfolioItem from '../components/portfolioItems/portfolioItems.jsx'
import Work from '../components/work/work.jsx'
import ProjectItem from '../components/projects/projects.jsx'




const WorkPage = () => {
  return (
    <div className='portfolio'>
         <Navigation/>
         <Work></Work>
         <ProjectItem></ProjectItem>
    </div>
    
  )
}

export default WorkPage
