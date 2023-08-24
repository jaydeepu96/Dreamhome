import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import g1Img from '../Assets/g1.jpg';
import g2Img from '../Assets/g2.jpg';
import g3Img from '../Assets/g3.jpg';
import g4Img from '../Assets/g4.jpg';
import {LuBedDouble } from 'react-icons/lu';
import {GiBathtub} from 'react-icons/gi';
import {IoIosExpand,} from 'react-icons/io';
import {RiDislikeLine} from 'react-icons/ri';
import {ImNewTab} from 'react-icons/im';
import {MdOpenInFull} from 'react-icons/md';
import '../Component.css/Popularproprti.css'
import { Container, Row, Col, CardImg, } from "react-bootstrap";
const Popularproperti = () => {
  return (

    <Container style={{backgroundColor:"#181A20"}} fluid>
   
      <Row>
        <Row style={{marginTop:'50px'}}>
     <h3 style={{color:"#fff"}}>Discover Popular Properties</h3>
     <p style={{marginLeft:"10px",color:"#fff"}}>Aliquam lacinia diam quis lacus euismod</p>
        </Row>
        <Col md={3} style={{marginBottom:"50px"}}>
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
     

    <Col md={3}>
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
    
    <Col md={3}>
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
 
        <Col md={3}>
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
        
         <Row> <button className='ud-btn' style={{backgroundColor:"#fffff",border:"1px solid",width:"25%",marginLeft:"500px",backgroundColor:"#EB6753",color:"#fff"}}>Learn More</button></Row>
        
      </Row>
    </Container>
  
   
  )
}

export default Popularproperti;