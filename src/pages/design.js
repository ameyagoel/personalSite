import React from 'react'
import About from '../components/about/about.jsx'
import Landing from '../components/landing/landing.jsx'
import Navigation from '../components/navigation/navigation.jsx'
import Design from '../components/design/design.jsx'




const DesignPage = () => {
  return (
    <div className='designPage'>
         <Navigation/>
         <Design></Design>
    </div>
    
  )
}

export default DesignPage
