import React from 'react'
import "./buttons.css"
import Resume from '../../assets/Ameya_Goel_Resume.pdf'


const Button = () => {
  return (
    <div className='buttons'>
      <a href={Resume} download className='btn'> Download Resume</a>
      <a href='mailto:ameyagoel@gmail.com?subject=Contact Inquiry' className='btn'> Contact Me</a>
    </div>
  )
}

export default Button