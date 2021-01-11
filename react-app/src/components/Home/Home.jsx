import React from 'react';
import { Carousel } from 'antd';
import senior_t2020 from '../../assets/img/slide/Senior_Team.jpg';
import junior_t1_2020 from '../../assets/img/slide/Junior_Team1.jpg';
import junior_t2_2020 from '../../assets/img/slide/Junior_Team2.jpg';
import std3 from '../../assets/img/slide/Stadium3.jpg';
import std4 from '../../assets/img/slide/Stadium4.PNG';
import t1 from '../../assets/img/slide/Team1.jpg';

import t2 from '../../assets/img/slide/Team2.jpg';
import ProblemStatement from './ProblemStatement';
import {Row,Col,Button} from 'antd';
//import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

import './home.css';

function Home() {
  return (
    <section id='home'>
    
      <div className="ss-container">
        <Carousel autoplay>
          <div>
            <img src={senior_t2020} alt="ss" className="ss2-img" />
          </div>
          <div>
            <img src={junior_t1_2020} alt="ss" className="ss2-img" />
          </div>
          <div>
            <img src={junior_t2_2020} alt="ss" className="ss2-img" />
          </div>
          <div>
            <img src={t1} alt="ss" className="ss-img" />
          </div>
          <div>
            <img src={t2} alt="ss" className="ss-img" />
          </div>
          <div>
            <img src={std3} alt="ss" className="ss-img" />
          </div>
          <div>
            <img src={std4} alt="ss" className="ss-img" />
          </div>

        </Carousel>
        <div className='intro'>
        <Row>
          <Col lg={6} xs={24}>
           <h1>Welcome!</h1>
          </Col>
          <Col lg={1} xs={24}></Col>
          <Col lg={17} xs={24}>
            
            <p> <strong>Team Robocon CRCE</strong> is a <em>robotics team</em> from <strong>Fr. Conceicao Rodrigues 
                College of Engineering, Bandra (W).</strong>We're a group of budding undergrad engineers who
                 make robots to participate in Robocon India.
            </p>
          </Col>
        </Row>
        
        </div>
      </div>
      

      <div className='abu-robocon'>
        <h2>ABU Robocon</h2>
        <h4>The ABU Asia-Pacific Robot Contest (ABU Robocon) is an Asian-Oceanian college robot competition,
         founded in 2002 by Asia-Pacific Broadcasting Union. In the competition robots compete to complete a
          task within a set period of time. The contest aims to create friendship among young people with similar
           interests who will lead their countries in the 21st century, as well as help advance engineering and 
           broadcasting technologies in the region.</h4>
      </div>

      <div className="ps-container">
        <ProblemStatement 
          youtube="https://www.youtube.com/embed/_xAYY9qSZiY" 
          title="Fiji - Robocon 2020"
          description="The ABU Robocon-2020 FIJI is designed to promote the idea of RUGBY 7's.The Game
                field and zones are designed like a rugby ground.The highlight of this game is how the two robots
                  collaborate to score Try and the Goal Kick."  
          />
          <hr />
        
        <ProblemStatement 
          youtube="https://www.youtube.com/embed/WVmb6lSDFj4?t=1" 
          title="Mongolia - Robocon 2019"
          description="The task is based on the traditional Mangolian message communication system. 
          The team must compete to deliver the message quickly on their four legged Automatic robots following the
           given rules. The team who first reaches the Uukhai Zone is the Winner !!"  
          />
          <hr />
        
        <ProblemStatement 
          youtube="https://www.youtube.com/embed/6bteFLLunfk?" 
          title="The Landing Disc - Robocon 2017"
          description="The rules provided take inspiration from Japan’s traditional game Tosenkyo. Two teams must
           compete to stack flying discs on top of 7 podiums of varied height. During the match the team can knock
           down the opponents stack of discs. The team with the most number of discs at the end of the match is the
              winner."  
          />
          <hr />
        
        <ProblemStatement 
          youtube="https://www.youtube.com/embed/HM5gpIjiFUQ?" 
          title="Chai-Yo! : Clean Energy Recharging the World - Robocon 2016"
          description="The game of ABU Robocon 2016 is designed in order to create the awareness of efficient energy consumption and
              clean and renewable energy utilization. Each team has to build two robots; Eco Robot and Hybrid Robot. Eco
              Robot doesn’t have an actuator to drive. It receives the driving energy from Hybrid Robot. Eco Robot has to
              use only one steering actuator to control its direction, to track the path containing Slopes and Hills, River,
              and Down Hill. Besides providing driving energy to Eco Robot, Hybrid Robot has to take Wind Turbine Propeller
              from Eco Robot and climb up Wind Turbine Pole in order to assemble Wind Turbine."  
          />
      </div>
    </section>
  );
}

export default Home;
