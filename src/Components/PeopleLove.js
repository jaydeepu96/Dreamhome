import React from 'react';
import { Container, Row, Col, CardImg ,Card} from "react-bootstrap";

const PeopleLove = () => {
  return (
    <>
       <Container>
   
   <Row>
     <Row style={{marginLeft:'10px',marginTop:'80px'}}>
  <h3>People Love Living with Realton</h3>
  <p style={{marginLeft:"30px"}}>Aliquam lacinia diam quis lacus euismod</p>
     </Row>
   <Col md={4}> <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Great Work</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        “Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”
        </Card.Text>
        <h6 class="mb-0">Floyd Miles</h6>
        <p class="mb-0">Bank of America</p>
      </Card.Body>
    </Card></Col>
    
 <Col md={4}>
 <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Great Work</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        “Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”
        </Card.Text>
        <h6 class="mb-0">Floyd Miles</h6>
        <p class="mb-0">Bank of America</p>
      </Card.Body>
    </Card>
 </Col>
 <Col md={4}> <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Great Work</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        “Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”
        </Card.Text>
        <h6 class="mb-0">Floyd Miles</h6>
        <p class="mb-0">Bank of America</p>
      </Card.Body>
    </Card></Col>
   </Row>
 </Container>
    </>
  )
}

export default PeopleLove
