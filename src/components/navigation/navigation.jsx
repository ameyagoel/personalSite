import React from 'react'
import "./navigation.css"
import {Link} from "react-router-dom";




const navigation = () => {
  return (
    <div style={{paddingLeft: '1rem', backgroundColor:' rgba(96, 107, 153, .4)', position:'fixed', width: '100vw', zIndex: 1}}>
       <Link to="/"> <a className='navbtnImg'></a> </Link>
       {/* <Link to="/about"> <a className='navbtntText'>| About |</a></Link> */}
      <Link to="/portfolio">
      <a  className='navbtntText'>| Portfolio |</a></Link>
      <a href='#contact' className='navbtntText'>Work | </a>
    </div>
  )
}

export default navigation

