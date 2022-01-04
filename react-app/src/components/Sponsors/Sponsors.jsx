import React from 'react';
import logo1 from '../../assets/img/sponsor/logo1.jpg'
import logo2 from '../../assets/img/sponsor/logo2.jpg'
import logo3 from '../../assets/img/sponsor/logo3.jpg'
import logo4 from '../../assets/img/sponsor/logo4.jpg'
import logo5 from '../../assets/img/sponsor/logo5.png'
import logo6 from '../../assets/img/sponsor/newSpons.jpg'
import Chart from './Chart'
import './sponsors.css'
import {Row,Col,Button} from 'antd'
import file from './spon.pdf'

function Sponsors() {
  return (
  <section id='sponsors'>
    <div className='sponsor-components'>
    <Row>
      <Col lg={4} xs={24}>
      <div style={{verticalAlign:'center'}}>
       <p style={{color:'#eee',fontSize:'1rem'}}><em>You can download the sponsorship brochure <span ><a style={{color:'#f25c27'}} href={file} download>here</a></span></em></p>
      
      </div>
        </Col>
      <Col lg={20} xs={24} >
        <Chart/>
      </Col>
    </Row>
      
    </div>
    <div className='spon-img-container' >
      <p> Sponsors</p>
      <div className='sponsor-images'>
        
        <img src={logo6} alt='logo6' className='image-size'/>
        
      </div>
    </div>


    <div className='spon-img-container' >
      <p>Previous Sponsors</p>
      <div className='sponsor-images'>
        
        <img src={logo1} alt='logo1' className='image-size'/>
        <img src={logo2} alt='logo2' className='image-size'/>
        <img src={logo3} alt='logo3' className='image-size'/>
        <img src={logo4} alt='logo4' className='image-size'/>
        <img src={logo5} alt='logo5' className='image-size'/>
      </div>
    </div>
    
  </section>
  );

}

export default Sponsors;
 