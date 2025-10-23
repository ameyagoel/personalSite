import React, { useState } from 'react'
import './design.css'
import cup from '../../assets/coffeecup.svg'

//candy rush img
import design1 from '../../assets/design1.jpg'
import design4 from '../../assets/design4.png'
import design3 from '../../assets/design3.jpg'
import design6 from '../../assets/design6.png'
import design7 from '../../assets/design7.png'
import design8 from '../../assets/design8.png'
import design9 from '../../assets/design9.png'
import design10 from '../../assets/design10.png'
import design11 from '../../assets/design11.png'
import design12 from '../../assets/design12.png'
import design15 from '../../assets/design15.png'


import DesignItem from '../designItem/designItem'
import DesignCard from '../designCardComp/designCardComp'




const Design = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  const designs = [
    
    
    {
      title: "UC Riverside Taiko Concert 2022 Logo",
      imgMain: design4,
      images:  [
        design4
      ],
      desc: "A logo commision for the Univeristy of California Riverside's 2022 Taiko Concert. It was designed and drawn in Procreate and was used for branding and merchandise"
    },
    {
      title: "UBC AUS Instagram Graphics",
      imgMain: design7,
      images: [
        design7,
        design6,
        design8,
        design9
      ],
      desc: "Graphics I created for social media while volunteering with UBC's Arts Undergraduate Society to promote different events and initiatives hosted by the society."
    },
    {
      title: "Cities in Motion Lab Logo",
      imgMain: design11,
      images: [
        design11,
        design10
      ],
      desc: "Logo created for the Cities in Motion Lab in Adobe Illustrator used for their website and branding."
    },
    {
      title: "Clarify Skincare App",
      imgMain: design12,
      images: [
        design12,
      ],
      figma: "https://embed.figma.com/proto/TXfqZNMnNzmPyI1OKcXrps/INFO-300---Team-Project?node-id=363-4214&starting-point-node-id=363%3A4214&embed-host=share",
      desc: "Logo created for the Cities in Motion Lab in Adobe Illustrator used for their website and branding."
    },
    {
      title: "Procedural Poetry VR Logo",
      imgMain: design15,
      images: [
        design15,
      ],
      model: "/models/logo3dRendered.glb",
      color: "#000",
      desc: "Logo created for the Procedural Poetry Funhouse VR project with UBC EML that was turned into a 3D model to use in game."
    },
    {
      title: "Expenses Layout",
      imgMain: design3,
      images: [
        design3
      ],
      desc: "Practing layouts for how to display sales and expenses graphics using Starbuck's expense report as a reference."
    },
    
  ];

  return (
    <div className='design'>
      <div className='header'>
        <div className='desheaderRow'>
          <img className='cup' src={cup} />
          <h4 className='title'> Design</h4>
          <img className='cup' src={cup} />
        </div>
        {/* <hr className='divider'></hr> */}
      </div>
      <div className='designs'>
        {designs.map((design, i) => (
          <DesignItem
            key={i}
            title={design.title}
            img={design.imgMain}
            onClick={() => setSelectedDesign(design)}
          />
        ))}
      </div>

      {selectedDesign && (
        <DesignCard
          design={selectedDesign}
          onClose={() => setSelectedDesign(null)}
        />
      )}
    </div>



  )
}

export default Design
