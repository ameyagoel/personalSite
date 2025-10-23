import React, { useState } from 'react'
import './playground.css'
import cup from '../../assets/coffeecup.svg'

import coffeecup from '../../assets/coffeecupplay.svg'
import tape from '../../assets/tape.svg'
import stickynote from '../../assets/stickynote.svg'
import pencil from '../../assets/pencil.svg'
import paper from '../../assets/paper.svg'
import notebook from '../../assets/notebook.svg'
import loosePaper from '../../assets/loosepaper.svg'
import laptop from '../../assets/laptop.svg'
import polaroid from '../../assets/polaroidframe.svg'

import design1 from '../../assets/design1.jpg'
import rain from "../../assets/rainscene.png"
import moonMagThumb from "../../assets/jademoonmagic-min.png"
import moonMag from "../../assets/jadeMoonMagicAnim-min.gif"
import curtis from "../../assets/curtis.png"
import spacefish from "../../assets/spacefish.png"






import PlaygroundItem from '../playgroundItem/playgroundItem'
import DesignCard from '../designCardComp/designCardComp'




const Playground = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [


    {
      title: "3D Rainy Day Cafe Scene",
      className: "item-rain",
      imgMain: rain,
      images: [
        rain,
      ],
      desc: "Rainy day cafe scene that was made for my portfolio site in Womp3D as a way to test out the tool and get familiar with lighting and textures",
      // pos: { left: "35%" },
      // width: "28rem",
      // height: "30rem",
      bgFrame: laptop,
      imgHeight: "15rem",
      imgWidth: "25rem",
      imgPos: { top: "0%" },
    },
    {
      title: "Moon Magic Animation",
      className: "item-moon",
      imgMain: moonMagThumb,
      images: [
        moonMag
      ],
      desc: "A drawing I painted in Paint Tool Sai and then animated using Adobe Animate to polish my motion graphic skills and express a concept I had in my imagination",
      // pos: { left: "4rem" },
      // width: "20rem",
      // height:  "30rem",
      bgFrame: loosePaper,
      imgHeight: "12rem",
      imgWidth: "13rem",
      imgPos: { bottom: "3rem", left: "4rem", },
      rotation: -20
    },
    {
      title: "Old School Tokyo Travel Poster",
      className: "item-tokyo",
      imgMain: design1,
      images: [
        design1
      ],
      desc: "An Old School travel poster made in Adobe Illustrator used to practice using the perspective tool and play around with colors",
      // pos: { bottom: "-15rem", left: "0rem" },
      rotation: -10,
      // width: "25rem",
      // height:  "20rem",
      bgFrame: notebook,
      imgWidth: "17rem",
      imgHeight: "10rem",
      imgPos: { bottom: "7rem", left: "4rem" },
    },
    {
      title: "Celestial Sea Life",
      className: "item-celestial",
      imgMain: spacefish,
      images: [
        spacefish
      ],
      desc: "A fun side project I did since I love both sky and sea life over a few weeks using watercolor then used photoshop to edit the photo afterwards",
      // pos: { top: "-3rem", right: "5rem" },
      rotation: 15,
      // width: "20rem",
      // height:  "20rem",
      bgFrame: polaroid,
      imgWidth: "11rem",
      imgHeight: "11rem",
      imgPos: { top: "3rem", left: "5rem" },
    },
    {
      title: "Curtis the Cat",
      className: "item-curtis",
      imgMain: curtis,
      images: [
        curtis,
      ],
      desc: "Curtis the cat was modeled and rigged in Blender as a fun side project while I was working at UBC's Emerging Media Lab and ended up becoming the mascot for their Procedural Poetry Funhouse VR game.",
      // pos: { bottom: "-7rem", right: "-2rem" },
      rotation: 20,
      // width: "18rem",
      // height:  "15rem",
      bgFrame: stickynote,
      imgHeight: "10rem",
       model: "/models/curtis.glb",
      color: "#797979",
      
    },

  ];

  return (
    <div className="playground">
      {/* Header */}
      <div className="header">
        <div className="playheaderRow">
          <img className="cup" src={cup} alt="cup" />
          <h4 className="title">Playground</h4>
          <img className="cup" src={cup} alt="cup" />
        </div>
        <h6 className="descText">
          A cozy corner for experiments, sketches, and little things I’ve learned and brewed up between projects.
        </h6>
      </div>

      {/* Desk Scene */}
      <div className="table-scene">
        <img src={coffeecup} className="coffeecup" alt="coffee cup" />
        <img src={pencil} className="pencil" alt="pencil" />

        {/* Render PlaygroundItems */}
        {items.map((item) => (
          <PlaygroundItem
            key={item.title}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Overlay for Selected Item */}
      {selectedItem && (
        <DesignCard
          design={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Playground
