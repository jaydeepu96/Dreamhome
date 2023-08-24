import React from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import '../Component.css/Neddhelp.css'

const Needhelp = () => {
  return (
    <div>
<Container style={{borderRadius:"12px",backgroundColor:"#F7F7F7",boxSizing:"border-box",padding:"120px",display:"block"}} fluid>
    <Row style={{display:'flex'}}>
    <Col md={6}>
    <h1>Need help? Talk to our expert.</h1>
    <p>Talk to our experts or Browse through more properties.</p>
    </Col>
    <Col md={3}>
      <button className='ud-btn'>Contact Us</button></Col>
      <Col>
        <button className='ud-btn'>+888888888888</button>
    

    </Col>
    </Row>
   

</Container>

    </div>
  )
}

export default Needhelp