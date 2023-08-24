import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import blog1img from "../Assets/blog1.jpg";
import blog2img from "../Assets/blog2.jpg";
import blog3img from "../Assets/blog3.jpg";

import { Container, Row, Col, CardImg } from "react-bootstrap";
function OurBlog() {
  return (
    <Container style={{ marginTop: "100px",}}>
      <Row>
        <Row>
          <h3 style={{marginLeft:"80px"}}>From Our Blog</h3>
          <h6 style={{marginLeft:"40px"}}>Aliquam lacinia diam quis lacus euismod</h6>
        </Row>
        <Col md={4} style={{marginBottom:"20px",marginTop: "70px"}}>
          <Card
            style={{
              width: "20rem",
              backgroundColor: "#FFF",
              display: "flex",
           
            }}
            className="mx-auto d-block"
          >
            <Card.Img variant="top" src={blog1img} />
            <Card.Body>
              <Card.Title>Living Room</Card.Title>
              <Card.Text>
              Private Contemporary Home Balancing Openness
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} style={{marginBottom:"20px",marginTop: "70px"}}>
          <Card
            style={{
              width: "20rem",
              backgroundColor: "#FFF",
              display: "flex",
          
            }}
            className="mx-auto d-block"
          >
            <Card.Img variant="top" src={blog2img} />
            <Card.Body>
              <Card.Title>Living Room</Card.Title>
              <Card.Text>
              Private Contemporary Home Balancing Openness
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} style={{marginBottom:"20px",marginTop: "70px" }}>
          <Card
            style={{
              width: "20rem",
              backgroundColor: "#FFF",
              display: "flex",
          
            }}
            className="mx-auto d-block"
          >
            <Card.Img variant="top" src={blog3img} />
            <Card.Body>
              <Card.Title>Living Room</Card.Title>
              <Card.Text>
              Private Contemporary Home Balancing Openness
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  );
}
export default OurBlog;
