import React from 'react'
import { Container, Row ,Col,Card} from 'react-bootstrap';
import citylisting1Img from '../Assets/citylisting1.png';
import citylisting2Img from '../Assets/citylisting2.png';
import citylisting3Img from '../Assets/citylisting3.png';
import citylisting4Img from '../Assets/citylisting4.png';

const Properticity = () => {
  return (
   <Container>
    <Row style={{alignItems:"center",visibility:"visible",animationDelay:"300ms",animationName:"fadeInUp",display:"flex"}}>
      <Col style={{marginLeft:"20px",marginTop:"30px"}}>
      <h2 class="title">Properties by Cities</h2>
      <p class="paragraph">Aliquam lacinia diam quis lacus euismod</p>
      </Col>
     </Row>
   <Row>
    <Col md={3}  style={{backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <Card  style={{ width: '18rem',marginBottom:'40px',}}>
      <Card.Img variant="top" src={citylisting1Img} />
      <Card.Body>
      <Card.Title>Los Angeles</Card.Title>
        <Card.Text>
        12 Properties
        </Card.Text>
       </Card.Body>
    </Card>
    </Col>
    <Col md={3}  style={{backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Card style={{ width: '18rem',marginBottom:'40px' }}>
      <Card.Img variant="top" src={citylisting2Img} />
      <Card.Body>
      <Card.Title>Miami</Card.Title>
        <Card.Text>
        12 Properties
        </Card.Text>
       </Card.Body>
    </Card></Col>
    <Col md={3}  style={{backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",}}><Card style={{ width: '18rem',marginBottom:'40px' }}>
      <Card.Img variant="top" src={citylisting3Img} />
      <Card.Body>
      <Card.Title>New York</Card.Title>
        <Card.Text>
        12 Properties
        </Card.Text>
       </Card.Body>
    </Card></Col>
    <Col md={3} style={{backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center"}}><Card style={{ width: '18rem',marginBottom:'40px' }}>
      <Card.Img variant="top" src={citylisting4Img} />
      <Card.Body>
      <Card.Title>Chicago</Card.Title>
        <Card.Text>
        12 Properties
        </Card.Text>
       </Card.Body>
    </Card></Col>
   </Row>
   </Container>
  )
}

export default Properticity