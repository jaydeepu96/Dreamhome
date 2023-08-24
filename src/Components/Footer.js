import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Component.css/Fotur.css'; // Replace with the actual CSS file path
import { FiTwitter } from 'react-icons/fi';
import {BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor:"#181A20"}}>
      <Container>
        <Row>
          <Col md={5}>
           <img src='	https://creativelayers.net/themes/homez-html/images/header-logo.svg'></img>
           <Row>
            <Col><p class="info-title" style={{color:"#fff"}}>Total Free Customer Care</p><a href="+(0)-123-050-945-02">+(0) 123 050 945 02</a></Col>
            <Col><p class="info-title" style={{color:"#fff"}}>Nee Live Support?</p><h6 class="info-mail"><a href="mailto:hi@homez.com">hi@homez.com</a></h6></Col>
           </Row>
           <h5 class="title text-white mb10" style={{color:"#fff",marginTop:"20px"}}>Apps</h5>
           <Row>
            <Col><Button style={{color:"#fff"}}>Apple Store</Button></Col>
            <Col><Button style={{color:"#fff"}}>Google Play Store</Button></Col>
           </Row>
           <h6 class="text-white mb20"style={{marginTop:"40px"}}>Follow us on social media</h6>
           <BsFacebook style={{color:"#fff",justifyItems:"space-around"}}/>
            <FiTwitter style={{color:"#fff",justifyItems:"space-around",marginLeft:"30px"}}/>
            <BsInstagram style={{color:"#fff",marginLeft:"20px"}} />
           <Row>
          
           </Row>
          </Col>
          <Col md={7}>
            <Row style={{marginTop:"50px"}}><Col><h6 class="title text-white mb20">Keep Yourself Up to Date</h6>
            <input type="email" class="form-control" placeholder=" Enter Your Email"></input>
          
            </Col></Row>
            <Row style={{marginTop:"50px"}}>
            <Col style={{color:"#fff"}}>
            <h3>Popular Search</h3>
            <ul className='ppp'> 
              <a href="" className="appbn"><h6 style={{color:"#fff"}}>Apartment for Rent</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>Apartment Low to hide</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>Apartmentfor Buy</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>Offices for Buy</h6></a>
            <a href="#" className="appbn"style={{color:"#fff"}}>Offices for Rent</a>
           </ul>
           </Col>
           <Col style={{color:"#fff"}}>
          <h3>Quick Links</h3>
          <ul className='ppp'> 
              <a href="" className="appbn"><h6 style={{color:"#fff"}}>Privacy Policy</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>Pricing Plans</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>Our Services</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>Contact Support</h6></a>
            <a href="#" className="appbn"style={{color:"#fff"}}>FAQs</a>
           </ul>
          </Col>
          <Col style={{color:"#fff"}}>
            <h3>Discover</h3>
            <ul className='ppp'> 
              <a href="" className="appbn"><h6 style={{color:"#fff"}}>Miami</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>Los Angeles</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>Chicago</h6></a>
              <a href="#" className="appbn"><h6 style={{color:"#fff"}}>New York</h6></a>
          
           </ul>
          </Col></Row>
          </Col>
        </Row>



    
        <Row>
          <Col md={12} >
            <div className="footer-bottom" style={{color:"#fff"}}>
              <p>© Homez - All rights reserved</p>
              <p>Privacy · Terms · Sitemap</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
