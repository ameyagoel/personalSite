import React, { useState } from 'react'
import { Col, Container } from 'react-grid-system'
import './designItem.css'
import { Row } from 'react-grid-system'
import tape from "../../assets/tape.svg"





export default function DesignItem({title,  img , onClick}) {
    return (
        <div className='overall' onClick={onClick}> 
        <div className='designContainer'>
            
            <div className='designCont'>
                
            <img className='designThumb' src={img} />
            <div className='designInfo'>
                <h4 className='design_title'> {title}</h4>
            </div>
            </div>
            <img className='tape' src={tape} />
        </div>
        </div>

    )
}

