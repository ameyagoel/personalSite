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
import Video from "../../assets/candyvid.mp4"
import loadingCoffee from "../../assets/loadingcoffee.gif"
import ui from "../../assets/dressuptitle.gif"
import title from "../../assets/dressupui.gif"
import jp1 from "../../assets/justPeachy1.png"
import jp2 from "../../assets/justPeachy2.png"




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

    const latteImages = [
        {
            img: ui
        },
        {
            img: title
        },
    ]

    const jpImages= [
        {
            img: jp1
        },
        {
            img: jp2
        },
    ]

    const [slideNumber, setSlideNumber] = useState(0)
    const [dressNumber, setDressNumber] = useState(0)


    const nextSlide = () => {
        slideNumber + 1 === images.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    }

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(images.length - 1) : setSlideNumber(slideNumber - 1)
    }

    const nextSlideDress = () => {
        dressNumber + 1 === latteImages.length ? setDressNumber(0) : setDressNumber(dressNumber + 1)
    }

    const prevSlideDress = () => {
        dressNumber === 0 ? setDressNumber(latteImages.length - 1) : setDressNumber(dressNumber - 1)
    }

    return (
        <div id="1" >
            <div style={{ display: 'flex' }}>
                <h4 className='ill' style={{color: 'white', padding: ' 2rem 0rem 0rem 2rem' }}> Candy Rush </h4>
            </div>
            <hr className='line' style={{
                height: '.1875rem', width: '40rem',
                background: "#fff",
                border: "none",
                marginLeft: '2rem',
                marginBottom: '0rem',
                marginTop: '0rem',
            }} />
            <h3 className='info' style={{  color: 'white', padding: '.6rem 0rem .2rem 2rem' }}> Mono Games • C# • Platformer </h3>
            <h3 className='desc' style={{ fontWeight: '400',  color: 'white', padding: '0rem 0rem 1rem 2rem' }}>  A Game I made in a team of four in my first year of college
                I was responsible for UI design, asset and environment design, as well as
                coding the sprite rendering, user experience elements, NPC dialogue, and
                level progression
            </h3>
            <div className='project_container'>
                <div className='project_card' >


                    <div className='item_image'>
                        <img src={images[slideNumber].img} />
                    </div>
                    <div style={{ justifyContent: 'center', display: 'flex' }}>
                        <img onClick={prevSlide} src={prev} className='prev' />
                        <img onClick={nextSlide} src={next} className='next' />

                    </div>
                    <h3> UI Screens </h3>
                </div>
                <div className='project_card' >


                    <div className='item_image' style={{ justifyContent: 'center', display: 'flex' }}>
                        <video controls autostart autoPlay src={Video} type="video/mp4" />

                    </div>
                    <h3> Demo </h3>
                </div>


            </div>
            <div className='ill'  style={{ display: 'flex' }}>
                <h4 id='2' className='ill' style={{  color: 'white', padding: ' .6rem 0rem .2rem 2rem' }}> Latte's Cafe Dress Up</h4>
            </div>
            <hr className='line' style={{
                height: '.1875rem', width: '40rem',
                background: "#fff",
                border: "none",
                marginLeft: '2rem'
            }} />
            <h3 className='info' style={{ color: 'white', padding: '1rem 0rem 1rem 2rem' }}> Adobe Animate • HTML • Javascript </h3>

            <h3 className='desc'  style={{ fontWeight: '400', color: 'white', padding: '0rem 0rem 1rem 2rem' }}>  A simple dress up game I made for fun with a character based off of a cafe latte. This was a solo project in which I did all the art, animation, UI, and coding
            </h3>
            <div className='project_container'>
                <div className='project_card' >


                    <div className='item_image'>
                        <img src={latteImages[dressNumber].img} />
                    </div>
                    <div style={{ justifyContent: 'center', display: 'flex' }}>
                        <img onClick={prevSlideDress} src={prev} className='prev' />
                        <img onClick={nextSlideDress} src={next} className='next' />
                    </div>
                    <Container style={{ justifyContent: 'center', display: 'flex', marginLeft: 'auto' }} >
                        <a style={{ textAlign: 'center' }} className='btn' href='https://lattes-dress-up.vercel.app/' > Play Game </a>
                    </Container>
                </div>
                <div className='project_card' >


                    <div className='item_image'>
                        <img src={loadingCoffee} />
                    </div>
                    <h3> Loading Screen </h3>
                </div>


            </div>

            <div style={{ display: 'flex' }}>
                <h4 id='3' className='ill' style={{  color: 'white', padding: ' .6rem 0rem .2rem 2rem' }}> justPeachy </h4>
            </div>
            <hr className='line' style={{
                height: '.1875rem', width: '40rem',
                background: "#fff",
                border: "none",
                marginLeft: '2rem'
            }} />
            <h3 className='info' style={{  color: 'white', padding: '1rem 0rem 1rem 2rem' }}> React, co:here Api, Express.js </h3>

            <h3 className='desc' style={{ fontWeight: '400', color: 'white', padding: '0rem 0rem 1rem 2rem' }}> An app that examined the phenomenon of gender-based price discrimination by analyzing data pulled from the popular shopping website, Amazon.ca. The backend was made by using Co:here API in combonation with Amazon Pricing API to conduct semantic analysis white the frontend was prototyped in Figma and developed with React. 
            </h3>
            <div className='project_container'>
                <div className='project_card' >
                    <div className='item_image'>
                        <img src={jp1} />
                    </div>
                    <h3> Search Screen </h3>
                    <Container style={{ justifyContent: 'center', display: 'flex', marginLeft: '1rem' }} >
                    </Container>
                </div>
                <div className='project_card' >


                    <div className='item_image'>
                        <img src={jp2} />
                    </div>
                    <h3> Resources on Pink Tax Screen </h3>
                    <Container style={{ justifyContent: 'center', display: 'flex', marginLeft: 'auto' }} >
                        <a style={{ textAlign: 'center' }} className='btn' href='https://github.com/ameyagoel/cmdf2023' > Github </a>
                    </Container>
                </div>


            </div>


        </div>

    )
}

export default ProjectItem
