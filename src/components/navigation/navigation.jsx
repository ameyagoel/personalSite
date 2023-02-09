import React from 'react'
import Link from '../linkbtn/link'
import "./navigation.css"



const navigation = () => {
  return (
    <div style={{paddingLeft: '1rem', backgroundColor:' rgba(96, 107, 153, .4)', position:'fixed', width: '100vw', zIndex: 1}}>
      <a className='navbtnImg'></a>
      <a href='#about' className='navbtntText'>| About |</a>
      <a href='#contact' className='navbtntText'>Portfolio |</a>
      <a href='#contact' className='navbtntText'>Work | </a>
    </div>
  )
}

export default navigation