import React from 'react'
import About from '../components/about/about.jsx'
import Landing from '../components/landing/landing.jsx'
import Navigation from '../components/navigation/navigation.jsx'
import Footer from '../components/footer/footer.jsx'




const Home = () => {
  return (
    <div>
        <Navigation/>
        <Landing/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home
