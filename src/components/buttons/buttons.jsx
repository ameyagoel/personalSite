import React from 'react'
import "./buttons.css"
import Resume from '../../assets/Ameya_Goel_Resume.pdf'


const Button = ({ onContactClick }) => {
  return (
    <div className='buttons'>       
      <a onClick={onContactClick} className='btn1'>Contact Me</a>
      <a href={Resume} download className='btn2'> View CV</a>
     
    </div>
  )
}

export default Button