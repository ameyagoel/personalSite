import React from 'react'
import About from './components/about/about.jsx'
import Button from './components/buttons/buttons.jsx'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home.js'
import WorkPage from './pages/work.js'
import DesignPage from './pages/design.js'
import PlaygroundPage from './pages/playground.js'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/work" element={ <WorkPage/> } />
        <Route path="/design" element={ <DesignPage/> } />
        <Route path="/playground" element={ <PlaygroundPage/> } />
        </Routes>
    </div>
  )
}

export default App
