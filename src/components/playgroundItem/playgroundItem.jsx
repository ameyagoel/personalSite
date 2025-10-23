import React, { useEffect, useState } from "react";
import "./playgroundItem.css";
import tape from "../../assets/tape.svg";
import DesignItem from "../designItem/designItem";


export default function PlaygroundItem({ item, onClick }) {
    const { imgMain, bgFrame, pos = {}, width, height, imgHeight, imgWidth, imgPos = {}, rotation = 0, title } = item;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1400);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // simple layout for mobile
    if (isMobile) {
        return (
            <DesignItem  title={item.title} img={item.imgMain} onClick={onClick}/>
        );
    }


    return (
        <div
            className={`playground-item ${item.className}`}
            onClick={onClick}
            style={{
                width: `${width}`,
                height: `${height}`,
                ...pos,
                //backgroundImage: `url(${bgFrame})`,
            }}
        >
            <div className="item-context" style={{

            }}>
                <img src={bgFrame} alt="frame" className="frame-svg" />
                <img className='play_thumb' style={{
                    transform: `rotate(${rotation}deg)`,
                    height: `${imgHeight}`,
                    width: `${imgWidth}`,
                    ...imgPos
                }} src={imgMain} />
                {/* <h4 className="playground-item-title">{title}</h4> */}
            </div>
        </div>

    );
}
