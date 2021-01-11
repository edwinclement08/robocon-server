import React from 'react';
import './achievements.css';

import p16 from '../../assets/img/achievement/robocon16.jpg'
import p17 from '../../assets/img/achievement/robocon17.jpg'
import p18 from '../../assets/img/achievement/robocon18.jpg'
import p20 from '../../assets/img/achievement/robocon2020.png'
import {Row , Col} from 'antd';


function Achievements() {
  return (
    <section id='achievements'>
    <div className='ac-img'>
      <h1 className='ac-header'>Achievements</h1>
    </div>

    <div className='ac-list-container'>

    <div className='ac-list-item'>
      <Row>
        
        <Col lg={16} xs={24}>
          <div className='ac-list-content'>
          <h1>ROBOCON 2020</h1>
          <p>
          Theme: ROBO RUGBY 7s : Play rugby 7's game using two robots</p>
          <ul>
            <li> 
            Secured <strong>AIR-11</strong> in Stage 1 of the competition.
            </li>
            <li>
              Successfully implemented Try Robot and Pass Robot.
            </li>
            <li>
              Successfully done passing and receiving of rugby ball by the bots.
            </li>
            
            <li>
              Achieved a kicking range of <strong>15 m </strong>with Try robot. 		 		
            </li>
          </ul>
          </div>
        </Col>
        <Col lg={8} xs={24}>
          <div className='ac-list-img-container' >
           <img src={p20}  className='ac-list-img'/>
          </div>
        </Col>
      </Row>
      </div>

      <hr/>

    <div className='ac-list-item'>
      <Row>
        <Col lg={8} xs={24}>
          <div className='ac-list-img-container'>
           <img src={p18}  className='ac-list-img'/>
          </div>
        </Col>
        <Col lg={16} xs={24}>
          <div className='ac-list-content'>
          <h1>ROBOCON 2018</h1>
          <p>
          Theme: NÉM CÒN : The Festival Wishing Happiness and Prosperity (Shuttlecock Throwing)</p>
		<ul>
			<li> 
			 Ranked 26th among 112 national participating colleges.
			 </li>
			 <li>
				 Ranked 3rd among Mumbai University Colleges.
			 </li>
			 <li>
				 We successfully simulated the throwing and landing of shuttlecocks using MATLAB.
			 </li>
			 <li>
				 2nd fastest rack lifting among national	participating teams.				
			 </li>
		</ul>
          </div>
        </Col>
      </Row>
      </div>

    <hr/>
      <div className='ac-list-item'>
      <Row>
        
        <Col lg={16} xs={24}>
          <div className='ac-list-content'>
          <h1>ROBOCON 2017</h1>
          <p>
          Theme: Asobi : The Landing Disc</p>
		<ul>
			<li>
				Ranked 18th among 112 national participating colleges.
			</li>
			<li>
				Ranked 2nd among Mumbai University Colleges
			</li>
			<li>
				The robot was able to land disk in all the seven spots of varying height and distance as given in problem statement.
				</li>
		</ul>
          </div>
        </Col>
        <Col lg={8} xs={24}>
          <div className='ac-list-img-container' >
           <img src={p17}  className='ac-list-img'/>
          </div>
        </Col>
      </Row>
      </div>

      <hr/>
      <div className='ac-list-item'>
      <Row>
        <Col lg={8} xs={24}>
          <div className='ac-list-img-container'>
           <img src={p16}  className='ac-list-img'/>
          </div>
        </Col>
        <Col lg={16} xs={24}>
          <div className='ac-list-content'>
          <div>
          <h1>ROBOCON 2016</h1>
          <p>
          Theme: Chai-Yo : Clean Energy Recharging the World</p>
			<ul>
				<li> 
					Ranked 21st among 105	national participating colleges
				 </li>
				 <li>
					Ranked 1st in Mumbai Colleges
				 </li>
				 <li>
					One of the teams with	successful completion of river crossing as mentioned in problem statement.
					</li>
				 
			</ul>
      </div>
          </div>
        </Col>
      </Row>
      </div>

    </div>


      


    </section>
  );
}

export default Achievements;
