import React, { useState } from 'react'
import { Col, Container } from 'react-grid-system'
import './portfolioItems.css'


import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import port4 from '../../assets/port4.png'
import port5 from '../../assets/port5.jpg'
import port6 from '../../assets/port6.png'
import port7 from '../../assets/port7.jpg'
import port8 from '../../assets/port8.png'
import port9 from '../../assets/port9.png'
import port10 from '../../assets/port10.png'
import port11 from '../../assets/port11.png'
import port12 from '../../assets/port12.png'
import port13 from '../../assets/port13.png'
import port14 from '../../assets/port14.png'
import port15 from '../../assets/port15.png'


import design1 from '../../assets/design1.jpg'
import design2 from '../../assets/design2.png'
import design3 from '../../assets/design3.jpg'
import design4 from '../../assets/design4.png'
import design5 from '../../assets/design5.png'
import design6 from '../../assets/design6.png'
import design7 from '../../assets/design7.png'
import loading from '../../assets/loading.gif'
import x from '../../assets/xicon.png'



const PortfolioItem = () => {

    const images = [
        {
            img: port1
        },
        {
            img: port2
        },
        {
            img: port3
        },
        {
            img: port4
        },
        {
            img: port5
        },
        {
            img: port6
        },
        {
            img: port7
        },
        {
            img: port8
        },
        {
            img: port9
        },
        {
            img: port10
        },
        {
            img: port11
        },
        {
            img: port12
        },
        {
            img: port13
        },
        {
            img: port14
        },
        {
            img: port15
        },
        {
            img: design1
        },
        {
            img: design2
        },
        {
            img: design3
        },
        {
            img: design4
        },
        {
            img: design5
        },
        {
            img: design6
        },
        {
            img: design7
        },
        {
            img: loading
        }
    ]

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)

    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }
    
    return (
        <div id="2" >

            {openModal &&
                <div className='openWrapper'>
                    <img onClick={handleCloseModal} src={x} className='btClose' />
                    <div className='fullScreenImg'> 
                        <img src={images[slideNumber].img} />
                    </div>

                </div>
            }
            <h4 className='ill' style={{ color: 'white', padding: ' 2rem 0rem 0rem 2rem' }}> Illustration </h4>
            <hr className='line' style={{
                height: '.1875rem', width: '40rem',
                background: "#fff",
                border: "none",
                marginLeft: '2rem'
            }} />
            <h3 className='info' style={{color: 'white', padding: '1rem 0rem 2rem 2rem' }}> Paint Tool Sai • Procreate • 2019-2023 </h3>
            <div className='portfolio_container'>
                <div className='portfolio_card'>
                    <img src={port1} className='item_image' />
                    <h3> City Graffiti </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(0)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port3} className='item_image' />
                    <h3> City Skyline </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(2)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port4} className='item_image' />
                    <h3> Follow You to the Stars </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(3)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port5} className='item_image' />
                    <h3> Whale Watching </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(4)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port6} className='item_image' />
                    <h3> Spray Painting the Stars </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(5)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port10} className='item_image' />
                    <h3> Spaced-Out </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(9)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port13} className='item_image' />
                    <h3> Moonlight </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(12)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port12} className='item_image' />
                    <h3> Lighting Study </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(11)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port14} className='item_image' />
                    <h3> First Snow </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(13)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port15} className='item_image' />
                    <h3> Take a breath </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(14)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={port7} className='item_image' />
                    <h3> Birds of the Stars </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(6)}> Zoom In</a>
                    </div>
                </div>
            </div>

            <h4 id='3' className='ill' style={{ color: 'white', padding: ' 2rem 0rem 0rem 2rem' }}> Design </h4>
            <hr className='line' style={{
                height: '.1875rem', width: '40rem',
                background: "#fff",
                border: "none",
                marginLeft: '2rem'
            }} />
            <h3 className='info' style={{ color: 'white', padding: '1rem 0rem 2rem 2rem' }}> Adobe Illustrator • Adobe Animate • Procreate • Paint Tool Sai • 2019-2022

</h3>
            <div className='portfolio_container'>
                <div className='portfolio_card'>
                    <img src={design1} className='item_image' />
                    <h3> Old School Travel Poster </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(15)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={design4} className='item_image' />
                    <h3> UC Riverside Taiko Concert 2022 Logo </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(18)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={design5} className='item_image' />
                    <h3> Quick Draw Archery Hoodie  </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(19)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={design6} className='item_image' />
                    <h3> AUS Instagram Post </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(20)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={design7} className='item_image' />
                    <h3> AUS Instagram Post </h3>
                    <div className='port-btn'>
                        <a  onClick={() => handleOpenModal(21)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={design3} className='item_image' />
                    <h3> Expenses Layout Practice </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(17)}> Zoom In</a>
                    </div>
                </div>
                <div className='portfolio_card'>
                    <img src={loading} className='item_image' />
                    <h3> Flight UI Loading Screen </h3>
                    <div className='port-btn'>
                        <a onClick={() => handleOpenModal(22)}> Zoom In</a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default PortfolioItem
