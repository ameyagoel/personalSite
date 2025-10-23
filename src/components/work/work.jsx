import React, { useState } from 'react'
import './work.css'
import cup from '../../assets/coffeecup.svg'
import ProjectItem from '../projectItem/projectItem'
import ProjectPage from '../projectCardComp/projectCardComp'

//candy rush img
import candy1 from '../../assets/candy1.png'
import candy2 from '../../assets/candy2.png'
import candy3 from '../../assets/candy3.png'
import candyVideo from "../../assets/candyGame.mp4"


//latte dress up
import latte1 from "../../assets/loadingcoffee.gif"
import latte2 from "../../assets/dressuptitle.gif"
import latte3 from "../../assets/dressupui.gif"


//barista beat
import baristaVideo from "../../assets/baristavideo.mp4"
import barista1 from "../../assets/barista1.png"
import barista2 from "../../assets/barista2.PNG"
import barista3 from "../../assets/barista3.GIF"
import barista4 from "../../assets/barista4.png"




//procedural poetry 
import poetry1 from "../../assets/poetry1.png"
import poetry2 from "../../assets/poetry2.png"
import poetry3 from "../../assets/poetry3.png"
import poetry4 from "../../assets/poetry4.png"



//nurse practitioner
import nurse1 from "../../assets/nurse2.png"
import nurse2 from "../../assets/nurse3.png"

//cities in motion lab
import cities1 from "../../assets/cities1.png"
import cities2 from "../../assets/cities2.png"
import cities3 from "../../assets/cities3.png"
import cities4 from "../../assets/cities4.png"


//just peachy
import jp1 from "../../assets/justPeachy1.png"
import jp2 from "../../assets/justPeachy2.png"



const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    
    {
      title: "Procedural Poetry Funhouse",
      type: "VR Game",
      images: [
        {
          img: poetry4,
          video: true,
          vid: "https://www.youtube.com/embed/icpPgVlYLno?si=1KaJ11kwsihNu4sR"
        },
        {
          img: poetry1,
          video: false
        },
        {
          img: poetry2,
          video: false
        },

        {
          img: poetry3,
          video: false
        },

      ],
      lang: "C++ / Unreal / Blender / Figma",
      year: "2024",
      desc: "A project that aims to use AI and VR to reimagine poetry as a physical space. I worked on this project with UBC's Emerging Media Lab as a UX/UI Designer in which I Enhanced player immersion in by creating 3D graphics, environments, models, and animations for the Procedural Poetry Funhouse in Blender that were implemented in Unreal Engine. ",
      link: "https://eml.ubc.ca/projects/procedural-poetry-playhouse/"
    },
    {
      title: "Nurse Practioner VR",
      type: "VR Tool",
      images: [
        {
          img: nurse1,
          video: false,
          vid: candyVideo
        },
        {
          img: "https://eml.sites.olt.ubc.ca/files/2025/05/NP_Showcase_Poster_Updated.jpeg-940x705.jpg",
          video: false
        },
        {
          img: nurse2,
          video: false
        },

        {
          img: "https://eml.sites.olt.ubc.ca/files/2024/06/SpringShowcase2024_Demo_JBurns_AScott_Vlim01-940x627.jpg",
          video: false
        },

      ],
      lang: "C++ / Unreal",
      year: "2025",
      desc: "A VR tool for student Nurse Practitioners to practice communication and clinical decision-making skills. I worked on this project with UBC's Emerging Media Lab as a Software Engineer in which I developed interactive features and assets that improved usability and accessibility in Ureal Engine to support gameplay.",
      link: "https://eml.ubc.ca/projects/nurse-practitioner-vr-tool/"
    },
    {
      title: "Cities in Motion Lab",
      type: "Web Page",
      images: [
        {
          img: cities1,
          video: false,
        },
        {
          img: cities2,
          video: false
        },
        {
          img: cities3,
          video: false
        },

        {
          img: cities4,
          video: false
        },

      ],
      lang: "Wordpress / Javascript",
      year: "2024",
      desc: "Designed the web presence and branding for profressors and researchers at the Cities in Motion Lab that research global urban mobility, access, and infrastructure.",
      link: "https://citiesinmotionlab.org/"
    },
    {
      title: "Barista Beat Battle",
      type: "Game",
      images: [
        {
          img: barista4,
          video: true,
          vid: baristaVideo
        },
        {
          img: barista1,
          video: false
        },
        {
          img: barista2,
          video: false
        },

        {
          img: barista3,
          video: false
        },

      ],
      lang: "C++ / OpenGL",
      year: "2024",
      desc: "A 2D Turn Based RPG Game with rhythmic elements that I made along with five other students. In the game you play as the character Chai and recently entered the cafe and are bringing peace between coffee and tea. The player engages with enemies through turn based combat where they can use basic attacks, heal, or unleash special moves that come with a mini-game. I was responsbile for the UI Design, character design, game meshes, sprite animation, and coding the cutscene system and dialogue. .",
    },
    {
      title: "Latte's Dress Up",
      type: "Web Game",
      images: [
        {
          img: latte3,
          video: false,
        },
        {
          img: latte1,
          video: false
        },
        {
          img: latte2,
          video: false
        },

      ],
      lang: "Javascript / Adobe Animate",
      year: "2023",
      desc: "A simple dress up game I made for fun with a character based off of a cafe latte. This was a solo project in which I did all the art, animation, UI, and coding",
      link: "https://lattes-dress-up.vercel.app/"
    },
    {
      title: "justPeachy",
      type: "Website",
      images: [
        {
          img: jp1,
          video: false,
        },
        {
          img: jp2,
          video: false
        },

      ],
      lang: "Python / React / Javascript",
      year: "2023",
      desc: "An app that examined the phenomenon of gender-based price discrimination by analyzing data pulled from the popular shopping website, Amazon.ca. The backend was made by using Co:here API in combonation with Amazon Pricing API to conduct semantic analysis white the frontend was prototyped in Figma and developed with React.",
      link: "https://github.com/ameyagoel/cmdf2023"
    },
    {
      title: "Candy Rush",
      type: "Game",
      images: [
        {
          img: candy1,
          video: true,
          vid: candyVideo
          
        },
        {
          img: candy2,
          video: false
        },

        {
          img: candy3,
          video: false
        },

      ],
      lang: "C# / MonoGames",
      year: "2021",
      desc: "A 2D Vertical Platformer that I made along with three other students in my first year of college. I was responsible for UI design, asset and environment design, as well as coding the sprite rendering, user experience elements, NPC dialogue, and level progression.",
    },

  ];

  return (
    <div className='work'>
      <div className='header'>
        <div className='workheaderRow'>
          <img className='cup' src={cup} />
          <h4 className='title'> Projects</h4>
          <img className='cup' src={cup} />
        </div>
        {/* <hr className='divider'></hr> */}
      </div>
      <div className='projects'>
        {projects.map((proj, i) => (
          <ProjectItem
            key={i}
            title={proj.title}
            type={proj.lang}
            img={proj.images[0].img}
            onClick={() => setSelectedProject(proj)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectPage
          proj={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>



  )
}

export default Work
