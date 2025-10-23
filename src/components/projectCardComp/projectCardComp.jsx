import React, { useState } from 'react'
import './projectCardComp.css'
import x from '../../assets/xbtn.svg'


export default function ProjectPage({ proj, onClose }) {

    const [slideNumber, setSlideNumber] = useState(0)


    const changeImage = (num) => {
        setSlideNumber(num);
    }

    let displayItem;

    if (proj.images[slideNumber].video) {
        displayItem =
            <iframe className='item_image' controls autoPlay src={proj.images[slideNumber].vid}> </iframe>;
        //"https://www.youtube.com/embed/icpPgVlYLno?si=1KaJ11kwsihNu4sR"

    } else {
        displayItem = <img className='item_image' src={proj.images[slideNumber].img} />;
    }

    let linkBtn;
    

    if (proj.link != null) {
        linkBtn = <a className='linkBtn' href={proj.link} target="_blank">View</a>
    } else {
        linkBtn = <></>;
    }

    return (
        <div className='proj'>

            <div className='projectCont'>


                <div className='projectContent'>

                    <div className='visuals'>
                        <div className='thumbnails'>
                            {proj.images.map((imageObj, i) => (
                                <img
                                    key={i}
                                    src={imageObj.img}  
                                    onClick={() => changeImage(i)}
                                    className='thumbnail'
                                />
                            ))}
                        </div>
                        {displayItem}


                    </div>
                    <div className='projMain'>
                        <h4 className='projTitle'>{proj.title}</h4>
                        <h3 className='projDetail'>{proj.lang} ✦ {proj.year}</h3>
                        <h6 className='projDesc'> {proj.desc}</h6>
                        {linkBtn}
                    </div>
                    <img src={x} className='returnbtn' onClick={onClose} ></img>
                </div>
            </div>
            <div className='overlay' onClick={onClose} ></div>

        </div>

    )
}
