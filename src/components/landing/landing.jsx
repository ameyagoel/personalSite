import React, { useEffect } from 'react';
import { Container } from 'react-grid-system';
import "./landing.css";

import Button from '../buttons/buttons';
import LinkBtn from '../linkbtn/linkbtn';

const Landing = () => {
  //code referenced: https://codepen.io/arickle/pen/XKjMZY
  useEffect(() => {
    const rainContainer = document.querySelector('.rain');
    const numDrops = 80; // fewer drops for a lighter rain

    for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement('div');
      drop.className = 'drop';
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.animationDuration = .5 + Math.random() * 0.7 + 's';
      drop.style.animationDelay = Math.random() * 2 + 's';
      rainContainer.appendChild(drop);
    }
  }, []);

  return (
    <div id="landing">

      <div className="rain"></div>


      <div className="bg-layer"></div>


      <Container className="land">
        <div className="boxLanding" style={{ marginLeft: 'auto' }}>
          <h2>Ameya Goel</h2>
          <h3>design • development • ui/ux • illustration</h3>
          <Button className="landingBtn" />
          <LinkBtn />
           
        </div>
      </Container>
        <h6 className='scroll'>↓ Scroll for More</h6>
    </div>
  );
};

export default Landing;
