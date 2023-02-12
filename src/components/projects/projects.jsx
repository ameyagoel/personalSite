import React, { useState } from 'react'
import { Col, Container } from 'react-grid-system'
import './projects.css'
import { Row } from 'react-grid-system'


import candy1 from '../../assets/candy1.png'
import candy2 from '../../assets/candy2.png'
import candy3 from '../../assets/candy3.png'
import x from '../../assets/xicon.png'
import next from '../../assets/next.png'
import prev from '../../assets/prev.png'
import Video from "../../assets/candyvid.mp4";



const ProjectItem = () => {

    const images = [
        {
            img: candy1
        },
        {
            img: candy2
        },
        {
            img: candy3
        },
    ]

    const [slideNumber, setSlideNumber] = useState(0)


    const nextSlide = () => {
        slideNumber + 1 === images.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    }

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(images.length - 1) : setSlideNumber(slideNumber - 1)
    }

    return (
        <div id="2" >
            <h4 style={{ color: 'white', padding: ' 2rem 0rem 0rem 2rem' }}> Candy Rush </h4>
            <hr className='line' style={{
                height: '.1875rem', width: '40rem',
                background: "#fff",
                border: "none",
                marginLeft: '2rem'
            }} />
            <h3 style={{ fontSize: '1.7rem', color: 'white', padding: '1rem 0rem 1rem 2rem' }}> A Vertical Dodge'Em Platformer </h3>
            <h3 style={{ fontWeight: '400', width: '60%', fontSize: '1.2rem', color: 'white', padding: '0rem 0rem 2rem 2rem' }}>  A Game I made in a team of four in my first year of college
                I was responsible for UI design, asset and environment design, as well as
                coding the sprite rendering, user experience elements, NPC dialogue, and
                level progression
            </h3>
            <div className='portfolio_container'>
                <div className='project_card' >


                    <div className='item_image'>
                        <img src={images[slideNumber].img} />
                    </div>
                    <div style={{ justifyContent:'center', display: 'flex' }}>
                        <img onClick={prevSlide} src={prev} className='prev' />
                        <img onClick={nextSlide} src={next} className='next' />

                    </div>
                    <h3> UI Screens </h3>
                </div>
                <div className='project_card' >


                    <div className='item_image'style={{ justifyContent:'center', display: 'flex' }}>
                        <video controls autostart autoPlay src={Video} type="video/mp4" />
                       
                    </div>
                    <h3> Demo </h3>
                </div>


            </div>


        </div>

    )
}

export default ProjectItem
