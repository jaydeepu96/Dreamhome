import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import hiconImg from '../Assets/hicon.png';
import '../Component.css/Apartment.css';
import { PiHouseSimple } from 'react-icons/pi';

const Apartment = () => {
  return (
    <Container>
      <Row>
        <Row style={{marginTop:"80px"}}>
          <h1>Explore Apartment Types</h1>
          <p>Get some Inspirations from 1800+ skills</p>
        </Row>
        <Col md={4} style={{marginBottom:"20px",marginTop:"20px",backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Card style={{ width: '18rem',padding:"30px",borderRadius:"12px" ,position:"relative"}}>
        <PiHouseSimple style={{height:"125px",marginLeft:"20px"}} />
      <Card.Body>
        <Card.Title>Houses</Card.Title>
        <Card.Text>
        22 Properties
        </Card.Text>
     </Card.Body>
    </Card>
        </Col>
        <Col md={4} style={{marginBottom:"20px",marginTop:"20px",backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Card style={{ width: '18rem',padding:"30px",borderRadius:"12px" ,position:"relative"}}>
        <PiHouseSimple style={{height:"125px",marginLeft:"20px"}} />
      <Card.Body>
        <Card.Title>Apartment</Card.Title>
        <Card.Text>
        22 Properties
        </Card.Text>
     </Card.Body>
    </Card>
        </Col>
        <Col md={4} style={{marginBottom:"20px",marginTop:"20px",backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Card style={{ width: '18rem',padding:"30px",borderRadius:"12px" ,position:"relative"}}>
        <PiHouseSimple style={{height:"125px",marginLeft:"20px"}} />
      <Card.Body>
        <Card.Title>Office</Card.Title>
        <Card.Text>
        22 Properties
        </Card.Text>
     </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
   

    
    

 
  )
}

export default Apartment

// import React, { Component } from "react";
// import Slider from "react-slick";

//  import {Card,Container,Row,Col} from 'react-bootstrap';
//  import hiconImg from '../Assets/hicon.png';
//  import '../Component.css/Apartment.css';
//   import { PiHouseSimple } from 'react-icons/pi';

// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <Container style={{display:"flex"}}>
//         <Row>
//         <h2> Responsive </h2>
//         <Slider {...settings}>
         
//           <Col md={4}>
//         <Card style={{ width: '18rem',padding:"30px",borderRadius:"12px" ,position:"relative"}}><PiHouseSimple style={{height:"125px",marginLeft:"20px"}} />
//        <Card.Body>
//          <Card.Title>Houses</Card.Title>
//          <Card.Text>
//          22 Properties
//          </Card.Text>
//       </Card.Body>
//      </Card>
//          </Col>
           
      
         
//           <Col md={4}>
//         <Card style={{ width: '18rem',padding:"30px",borderRadius:"12px" ,position:"relative"}}>
//         <PiHouseSimple style={{height:"125px",marginLeft:"20px"}} />
//        <Card.Body>
//          <Card.Title>Apartment</Card.Title>
//         <Card.Text>
//          22 Properties
//          </Card.Text>
//       </Card.Body>
//      </Card>
//          </Col>
        
       
         
//           <Col md={4}>
//          <Card style={{ width: '18rem',padding:"30px",borderRadius:"12px" ,position:"relative"}}>
//          <PiHouseSimple style={{height:"125px",marginLeft:"20px"}} />
//        <Card.Body>
//          <Card.Title>Apartment</Card.Title>
//          <Card.Text>
//          22 Properties
//         </Card.Text>
//       </Card.Body>
//      </Card>
//          </Col>
         
      
 
//           <Col md={4}>
//         <Card style={{ width: '18rem',padding:"30px",borderRadius:"12px" ,position:"relative"}}>
//         <PiHouseSimple style={{height:"125px",marginLeft:"20px"}} />
//        <Card.Body>
//          <Card.Title>Office</Card.Title>
//          <Card.Text>
//         22 Properties
//          </Card.Text>
//      </Card.Body>
//     </Card>
//         </Col>
//         </Slider>
//         </Row>
        
//       </Container>
//     );
//   }
// }