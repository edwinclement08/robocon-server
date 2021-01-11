import React,{useState} from 'react';
import './contact.css';
import { Row, Col, Form, Input,Button  } from 'antd';
import emailjs from 'emailjs-com';
import contactImg from "../../assets/img/contact.png"

const { TextArea } = Input;

function Contact() {

  const [sending,setSending] = useState(false)

  const [info,setInfo] = useState({
    name:'',
    email:'',
    mobile:'',
    message:''
  })

  const handleChange = (e)=>{
    const {name,value}=e.target
    setInfo(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }


  const onSubmit= async (e)=>{
    e.preventDefault()
    
    

    if(!info.name || !info.email || !info.mobile || !info.message ){
      alert('Please enter all the details.')
      return;
    }

    setSending(true)
    

  try {
    const res = await emailjs.send('gmail','template_s74q41p', info, 'user_QOvSkYkchIfAoLYREjqVG')
    alert('Thankyou for contacting us.')
    setInfo({
      name:'',
      email:'',
      mobile:'',
      message:''
    })

  } catch (error) {
    console.log('FAILED...', error);
    alert('Erorr!!, Please Try again later')
  }
   
  
  setSending(false)

    
    
  }

  return (
    <section id='contactPage'>
      <Row>
        <Col lg={12} xs={24}>
          <div className='form'>

            <h1>Contact Us</h1>
            <Form onSubmit = {onSubmit}>
              <Input 
                name = 'name' 
                placeholder="Name" 
                onChange={handleChange} 
                value={info.name}

              /><br/><br/>

              <Input 
                name = 'email' 
                placeholder="Email" 
                onChange={handleChange} 
                value={info.email}

                /><br/><br/>

              <Input 
                type='number' 
                name = 'mobile' 
                placeholder="mobile" 
                onChange={handleChange} 
                value={info.mobile}
                
                /><br/><br/>

              <TextArea 
              rows={4} 
              name='message' 
              placeholder='Your Message' 
              onChange={handleChange} 
              value={info.message} 
              /><br/><br/>

              {sending ? 
               <Button type="primary" loading>
                Sending
               </Button> 
               : 
               <Button type='primary' onClick={onSubmit} >
                Send
               </Button> 
              }     
            </Form>         
          </div>
        </Col>

        <Col lg={12} xs={24}>
          <div style={{textAlign:'center', paddingTop:'10px'}}>
            <img src={contactImg} alt="contactImg" className="img-fluid-animated"    />
          </div>
        </Col>

      </Row>

    </section>
  );
}

export default Contact;
