import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import "./aboutTabs.css"
import interest1 from '../../assets/drawing.png'
import interest2 from '../../assets/baking.png'
import interest3 from '../../assets/cafe.png'
import interest4 from '../../assets/games.png'
import interest5 from '../../assets/marine.png'
import interest6 from '../../assets/plants.png'
import interest7 from '../../assets/sewing.png'
import interest8 from '../../assets/crochet.png'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className={`tabPanel ${value === index ? 'active' : ''}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >

      <CustomTabPanel value={value} index={0} className='content'>
        <Container className='abttext'>
          <h4 className='tab_title'> Hi! I'm Ameya </h4>
          <Box className='tabBox' >
            <Tabs value={value} onChange={handleChange} >
              <Tab className='tabButton' label="About" {...a11yProps(0)} />
              <Tab className='tabButton' label="Skills" {...a11yProps(1)} />
              <Tab className='tabButton' label="Interests" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <h6 className='text'> I am an illustrator, designer, and developer from Denver, Colorado and currently based in Vancouver, British Columbia. I studied computer science at UBC with a focus on UI/UX and human-computer interaction. I specialize in web/mobile app design, branding design, and VR/AR experience development.  </h6>
          <h6 className='text'>You can usually find me doing arts and crafts in a cafe, sipping a latte, outside watching the clouds go by, or at home baking new recipes!</h6>
        </Container>
      </CustomTabPanel >
      <CustomTabPanel className='content' value={value} index={1}>
        <Container className='abttext'>
          <h4 className='tab_title'> Skills </h4>
          <Box className='tabBox' >
            <Tabs value={value} onChange={handleChange} >
              <Tab className='tabButton' label="About" {...a11yProps(0)} />
              <Tab className='tabButton' label="Skills" {...a11yProps(1)} />
              <Tab className='tabButton' label="Interests" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <div>
            <ul role="list" className="listItems">
              <li className='listItem'>Python</li>
              <li className='listItem'>React</li>
              <li className='listItem'>Java/Javascript </li>
              <li className='listItem'>HTML/CSS</li>
              <li className='listItem'>C++/C </li>
              <li className='listItem'>Unreal Engine</li>
              <li className='listItem'>Adobe Suite</li>
              <li className='listItem'>Figma</li>
              <li className='listItem'>Unity</li>
              <li className='listItem'>Blender</li>
              <li className='listItem'>Procreate</li>
            </ul>

          </div>
        </Container>
      </CustomTabPanel>
      <CustomTabPanel className='content' value={value} index={2}>
        <Container className='abttext'>
          <h4 className='tab_title'> Interests </h4>
          <Box className='tabBox' >
            <Tabs value={value} onChange={handleChange} >
              <Tab className='tabButton' label="About" {...a11yProps(0)} />
              <Tab className='tabButton' label="Skills" {...a11yProps(1)} />
              <Tab className='tabButton' label="Interests" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <ul role="list" className="interestList">
            <li className='interestItem'><img src={interest2} className='interestImg' />Baking</li>
            <li className='interestItem'><img src={interest3} className='interestImg' />Cafe Hopping</li>
            <li className='interestItem'><img src={interest8} className='interestImg' />Crocheting </li>
            <li className='interestItem'><img src={interest1} className='interestImg' />Drawing</li>
            <li className='interestItem'><img src={interest4} className='interestImg' />Video Games </li>
            <li className='interestItem'><img src={interest7} className='interestImg' />Sewing</li>
            <li className='interestItem'><img src={interest5} className='interestImg' />Marine Life </li>
            <li className='interestItem'><img src={interest6} className='interestImg' />Plants</li>
          </ul>
        </Container>
      </CustomTabPanel>
    </Box>
  );
}
