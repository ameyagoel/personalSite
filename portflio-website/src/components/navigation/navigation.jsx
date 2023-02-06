import React from 'react'
import Link from '../linkbtn/link'
import "./navigation.css"



const navigation = () => {
  return (
    <div className='navWrapper'>
      <a className='navbtnImg'></a>
      <a href='#contact' className='navbtntText'>| About |</a>
      <a href='#contact' className='navbtntText'>Portfolio |</a>
      <a href='#contact' className='navbtntText'>Work | </a>
    </div>
  )
}

export default navigation