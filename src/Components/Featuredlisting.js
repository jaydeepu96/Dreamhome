import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import g1Img from '../Assets/g1.jpg';
import g2Img from '../Assets/g2.jpg';
import g3Img from '../Assets/g3.jpg'
import { Container, Row, Col, CardImg,Card } from "react-bootstrap";
import {LuBedDouble } from 'react-icons/lu';
import {GiBathtub} from 'react-icons/gi';
import {IoIosExpand,} from 'react-icons/io';
import {RiDislikeLine} from 'react-icons/ri';
import {ImNewTab} from 'react-icons/im';
import {MdOpenInFull} from 'react-icons/md';
const Featuredlisting = () => {
  return (
    <>
    <Container>
   
      <Row>
        <Row style={{marginLeft:'10px',marginTop:'80px'}}>
     <h3>Discover Our Featured Listings</h3>
     <p style={{marginLeft:"30px"}}>Aliquam lacinia diam quis lacus euismod</p>
        </Row>
        <Col md={4} style={{marginBottom:"50px"}}>
        <Card style={{ width: '18rem',marginLeft:'20px',marginBottom:"50px" }}>
      <Card.Img variant="top" src={g1Img } />
      <Card.Body>
      <Card.Link href="#" style={{color:"#fff"}}>Luxury villa in Rego Park</Card.Link>
        <Card.Text>
        California City, CA, USA
        </Card.Text>
        <ListGroup.Item>
          <a><span><LuBedDouble/></span>   3bed   </a>
          <a><span><GiBathtub/></span> 4bath    </a>
          <a><span><IoIosExpand/></span>  1200sqft  </a>
        </ListGroup.Item>
      </Card.Body>
      <ListGroup className="list-group-flush">
      
       </ListGroup>
      <Card.Body>
         <span>For Rent</span><ImNewTab style={{marginLeft:"100px"}}/><RiDislikeLine style={{marginLeft:"15px"}}/><MdOpenInFull style={{marginLeft:"15px"}}/>
      </Card.Body>
    </Card>
        </Col>
     

    <Col md={4}>
    <Card style={{ width: '18rem',marginLeft:'20px',marginBottom:"40px" }}>
      <Card.Img variant="top" src={g2Img} />
      <Card.Body>
      <Card.Link href="#" style={{color:"#fff"}}>Villa on Hollywood Boulevard</Card.Link>
        <Card.Text>
        California City, CA, USA
        </Card.Text>
        <ListGroup.Item>
        <a><span><LuBedDouble/></span>   3bed   </a>
          <a><span><GiBathtub/></span> 4bath    </a>
          <a><span><IoIosExpand/></span>  1200sqft  </a>
        </ListGroup.Item>
      </Card.Body>
      <ListGroup className="list-group-flush">
       
       </ListGroup>
      <Card.Body>
      <span>For Rent</span><ImNewTab style={{marginLeft:"100px"}}/><RiDislikeLine style={{marginLeft:"15px"}}/><MdOpenInFull style={{marginLeft:"15px"}}/>
      </Card.Body>
    </Card>

        </Col>
    
    <Col md={4}>
    <Card style={{ width: '18rem',marginLeft:'20px',marginBottom:"80px" }}>
      <Card.Img variant="top" src={g3Img} />
      <Card.Body>
      <Card.Link href="#" style={{color:"#fff"}}>Triple Story House for Rent</Card.Link>
        <Card.Text>
        California City, CA, USA
        </Card.Text>
        <ListGroup.Item>
        <a><span><LuBedDouble/></span>   3bed   </a>
          <a><span> <GiBathtub/>
          </span> 4bath    </a>
          <a><span> <IoIosExpand/> </span>  1200sqft  </a>
        </ListGroup.Item>
      </Card.Body>
      <ListGroup className="list-group-flush">
       
       </ListGroup>
      <Card.Body>

        <span>For Rent</span><ImNewTab style={{marginLeft:"100px"}}/><RiDislikeLine style={{marginLeft:"15px"}}/><MdOpenInFull style={{marginLeft:"15px"}}/>
    
      </Card.Body>
    </Card>
        </Col>
   
      </Row>
    </Container>
    </>
   
  )
}

export default Featuredlisting