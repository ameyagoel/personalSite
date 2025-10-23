import React, { useState } from 'react'
import { Col, Container } from 'react-grid-system'
import './projectItem.css'
import { Row } from 'react-grid-system'
import cup from "../../assets/cafePhoto.svg"




export default function ProjectItem({title, type, img , onClick}) {
    return (
        <div className='overall' onClick={onClick}> 
        <div className='projectContainer'>
            
            <div className='projContent'>
                
            <img className='thumbailImg' src={img} />
            <div className='projInfo'>
                <h4 className='proj_title'> {title}</h4>
                <h3 className='type'>{type}</h3>
            </div>
            </div>
            <img className='cupPhoto' src={cup} />
        </div>
        </div>

    )
}

