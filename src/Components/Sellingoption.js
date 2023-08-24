import React from 'react'
import { Container,Col,Row ,Card} from 'react-bootstrap';
import '../Component.css/Sellingoption.css';
import about1Img from '../Assets/about1.jpg'
import about2Img from '../Assets/about2.jpg'
const Sellingoption = () => {
  return (
   <Container style={{marginTop:"80px"}}>
    <Row>
        <Col md={4} style={{backgroundColor:"#fff", alignItems:"center", justifyContent:"center"}}>
        <h2 style={{marginBottom:"30px !important"}} >Let’s find the right selling option for you</h2>
        <p  style={{fontSize:"15px"}}>As the complexity of buildings to increase, the field of architecture</p>
        <ul style={{marginBottom:"1rem",paddingLeft:"2rem",position:"relative"}}>
                  <li><i class="far fa-check text-white bgc-dark fz15"></i>Find excellent deals</li>
                  <li><i class="far fa-check text-white bgc-dark fz15"></i>Friendly host &amp; Fast support</li>
                  <li><i class="far fa-check text-white bgc-dark fz15"></i>List your own property</li>
                </ul>
                <button className='ud-btn' style={{backgroundColor:"#fffff",border:"1px solid"}}>Learn More</button>
        </Col>

        
    <Col md={2} ><Card style={{ width: '15rem',marginTop:'123px',marginLeft:"40px"}}>
      <Card.Img variant="top" src={about1Img} />
     
    </Card>
    </Col>
    <Col md={6}><Card style={{ width: '18rem',marginBottom:'100px',marginTop:"30px" ,marginLeft:"45px"}}>
      <Card.Img variant="top" src={ about2Img} />
     
    </Card>
    </Col>
  
    </Row>
   </Container>
  )
}

export default Sellingoption