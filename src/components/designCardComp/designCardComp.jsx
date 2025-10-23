import React, { useState } from 'react'
import './designCardComp.css'
import x from '../../assets/xbtn.svg'
import ModelViewer from '../modelviewer/modelViewer';
// import logo3d from '../../../public/models/logo3dRendered.glb';
// import curtis from '../../../public/models/curtisModel_rigging3_waving.glb';
//"/models/logo3dRendered.glb"

export default function DesignCard({ design, onClose }) {
    const modelUrl = design.model;
    console.log(modelUrl);
    const figma = design.figma;
    const images = design.images.length;
    const modelColor = design.color;
    console.log(modelColor);

    console.log(images);

    const [slideNumber, setSlideNumber] = useState(0)


    const changeImage = (num) => {
        setSlideNumber(num);
    }

    let displayItem;

    if (figma) {
        displayItem = <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)", }}  className='des_fig' src={figma} allowFullScreen></iframe>
    }
    else if (modelUrl) {
        
         displayItem = <ModelViewer  className='des_model' model={modelUrl} color={modelColor}></ModelViewer>
    }
    else {
        displayItem = <img className='des_img' src={design.images[slideNumber]} />;
    }

    return (
        <div className='card'>

            <div className='designContent'>


                <div className='visuals'>

                    {(images > 1) &&
                        <div className='thumbnails'>
                            {design.images.map((imageObj, i) => (
                                <img
                                    key={i}
                                    src={imageObj}
                                    onClick={() => changeImage(i)}
                                    className='thumbnail'
                                />
                            ))}
                        </div>
                    }
                    
                    {displayItem}
                    



                </div>
                <div className='desMain'>
                    <h4 className='desTitle'>{design.title}</h4>
                    <h6 className='desDesc'> {design.desc}</h6>
                </div>
                <img src={x} className='returnbtn' onClick={onClose} ></img>
            </div>
            <div className='overlay' onClick={onClose} ></div>

        </div>

    )
}
