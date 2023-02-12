import React from 'react'
import { Col, Container } from 'react-grid-system'
import './portfolioItems.css'


import port1 from '../../assets/port1.jpg'
import port2 from '../../assets/port2.png'


const PortfolioItem = () => {
    return (
        <div  id="2">
            <h4 style={{ color: 'white', padding: ' 2rem 0rem 0rem 2rem' }}> Illustration </h4>
            <hr className='line' style={{
                height: '.1875rem', width: '40rem',
                background: "#fff",
                border: "none",
                marginLeft: '2rem'
            }} />
            <h3 style={{ color: 'white', padding: '1rem 0rem 2rem 2rem' }}> My favorite illustrations I've done in Procreate and Paint Tool Sai </h3>
            <div className='portfolio_container'>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
            </div>

            <h4 id='3' style={{ color: 'white', padding: ' 2rem 0rem 0rem 2rem' }}> Design </h4>
            <hr className='line' style={{
                height: '.1875rem', width: '40rem',
                background: "#fff",
                border: "none",
                marginLeft: '2rem'
            }} />
            <h3 style={{ color: 'white', padding: '1rem 0rem 2rem 2rem' }}> My favorite illustrations I've done in Procreate and Paint Tool Sai </h3>
            <div className='portfolio_container'>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> Title </h3>
                    <div className='port-btn'>
                        <a href=''> Zoom In</a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default PortfolioItem
