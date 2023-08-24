import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Container, Row, Col, CardImg } from "react-bootstrap";
function Realton () {
  return (
    <Container>
      <Row>
        <Row style={{marginTop:"80px",marginLeft:"10px"}}>
     <h2 style={{fontSize: "30px"}}>See how Realton can help</h2>
     <p style={{}}>Aliquam lacinia diam quis lacus euismod</p>
        </Row>
         <Col md={4} style={{marginBottom:"20px",marginTop:"20px"}}>
          <Card
            style={{
              width: "20rem",
              height:"370px",
              backgroundColor: "#FFF",
              display: "flex",
              padding: "10px",
              textAlign:"center"
            }}
            className="mx-auto d-block"
          >
            <Card.Img variant="top" src="https://creativelayers.net/themes/homez-html/images/icon/property-buy.svg" style={{height:"150px"}} />
            <Card.Body>
              <Card.Title>Buy a property</Card.Title>
              <Card.Text>
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </Card.Text>
              <Button style={{backgroundColor:"#fff"}}>Find a home</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} style={{marginBottom:"20px",marginTop:"20px"}}>
          <Card
            style={{
              width: "20rem",
              height:"370px",
              backgroundColor: "#FFF",
              display: "flex",
              padding: "10px",
              textAlign:"center"
            }}
            className="mx-auto d-block"
          >
            <Card.Img variant="top" src="https://creativelayers.net/themes/homez-html/images/icon/property-buy.svg" style={{height:"150px"}}/>
            <Card.Body>
              <Card.Title>Sell a property</Card.Title>
              <Card.Text>
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </Card.Text>
              <Button  style={{backgroundColor:"#fff"}}>Find a add</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} style={{marginBottom:"20px",marginTop:"20px"}}>
          <Card
            style={{
              width: "20rem",
              height:"370px",
              backgroundColor: "#FFF",
              display: "flex",
              padding: "10px",
              textAlign:"center"
            }}
            className="mx-auto d-block"
          >
            <Card.Img variant="top" src="https://creativelayers.net/themes/homez-html/images/icon/property-buy.svg"style={{height:"150px"}} />
            <Card.Body>
              <Card.Title>Rent a property</Card.Title>
              <Card.Text>
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </Card.Text>
              <Button  style={{backgroundColor:"#fff"}}>Find a rental</Button>
            </Card.Body>
          </Card>
        </Col> 
       
      </Row>
    </Container>

  );
}
export default Realton ;
