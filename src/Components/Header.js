import React from 'react';
import '../Component.css/Header.css'
import  {Nav,Row,Col, Navbar,Container,Dropdown}from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';

function Header() {
  return (
    <>
      <Navbar bg="white" style={{position:"relative"}}>
        <Container>
        <Row>
         <Col  style={{backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",}}> 
         <img src='https://creativelayers.net/themes/homez-html/images/header-logo2.svg'></img>
          <Nav className="me-auto">
          <Dropdown>
      <Dropdown.Toggle variant="" id="" style={{marginLeft:"",marginBottom:"50px",marginTop:"50px"}}>
        Home
      </Dropdown.Toggle>
     <Dropdown.Menu>
        <Dropdown.Item href="#/home-v1">Home V1</Dropdown.Item>
        <Dropdown.Item href="#/home-v2">Home V2</Dropdown.Item>
        <Dropdown.Item href="#/home-v3">Home V3</Dropdown.Item>
        <Dropdown.Item href="#/home-v4">Home V4</Dropdown.Item>
         <Dropdown.Item href="#/home-v5">Home V5</Dropdown.Item>
        <Dropdown.Item href="#/home-v6">Home V6</Dropdown.Item>
        <Dropdown.Item href="#/home-v7">Home V7</Dropdown.Item>
        <Dropdown.Item href="#/home-v8">Home v8</Dropdown.Item>
        <Dropdown.Item href="#/home-v9">Home V9</Dropdown.Item>
        <Dropdown.Item href="#/home-v10">Home V10</Dropdown.Item>
         </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
    <Dropdown.Toggle variant="" id="" style={{marginLeft:"",marginBottom:"50px",marginTop:"50px"}}>
        Listing
      </Dropdown.Toggle>
     <Dropdown.Menu>
        <h1>Home V1</h1>
        <Dropdown.Item href="#/home-v2">Home V2</Dropdown.Item>
        <Dropdown.Item href="#/home-v3">Home V3</Dropdown.Item>
        <Dropdown.Item href="#/home-v4">Home V4</Dropdown.Item>
         <Dropdown.Item href="#/home-v5">Home V5</Dropdown.Item>
        <Dropdown.Item href="#/home-v6">Home V6</Dropdown.Item>
        <Dropdown.Item href="#/home-v7">Home V7</Dropdown.Item>
        <Dropdown.Item href="#/home-v8">Home v8</Dropdown.Item>
        <Dropdown.Item href="#/home-v9">Home V9</Dropdown.Item>
        <Dropdown.Item href="#/home-v10">Home V10</Dropdown.Item>
         </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
    <Dropdown.Toggle variant="" id="" style={{marginLeft:"",marginBottom:"50px",marginTop:"50px"}}>
        Property
      </Dropdown.Toggle>
     <Dropdown.Menu>
        <Dropdown.Item href="#/home-v1">Agents</Dropdown.Item>
        <Dropdown.Item href="#/home-v2">Dashboar</Dropdown.Item>
        <Dropdown.Item href="#/home-v3">Map style</Dropdown.Item>
        <Dropdown.Item href="#/home-v4">single style</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
    <Dropdown.Toggle variant="" id="" style={{marginLeft:"",marginBottom:"50px",marginTop:"50px"}}>
        Blog
      </Dropdown.Toggle>
     <Dropdown.Menu>
        <Dropdown.Item href="#/home-v1">List V1</Dropdown.Item>
        <Dropdown.Item href="#/home-v2">List V2</Dropdown.Item>
        <Dropdown.Item href="#/home-v3">List V3</Dropdown.Item>
        <Dropdown.Item href="#/home-v4">Single style</Dropdown.Item>
       
         </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
    <Dropdown.Toggle variant="" id="" style={{marginLeft:"",marginBottom:"50px",marginTop:"50px"}}>
        Pages
      </Dropdown.Toggle>
     <Dropdown.Menu>
        <Dropdown.Item href="#/home-v1">About</Dropdown.Item>
        <Dropdown.Item href="#/home-v2">Contact</Dropdown.Item>
        <Dropdown.Item href="#/home-v3">Compare</Dropdown.Item>
        <Dropdown.Item href="#/home-v4">Pricing</Dropdown.Item>
         <Dropdown.Item href="#/home-v5">Faq</Dropdown.Item>
        <Dropdown.Item href="#/home-v6">Login</Dropdown.Item>
        <Dropdown.Item href="#/home-v7">Register</Dropdown.Item>
        <Dropdown.Item href="#/home-v8">404</Dropdown.Item>
        <Dropdown.Item href="#/home-v9">Invoices</Dropdown.Item>
        <Dropdown.Item href="#/home-v10">Ui Elementes</Dropdown.Item>
         </Dropdown.Menu>
    </Dropdown>
     </Nav>
     </Col>
         
   
     
     <Col  style={{backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",}}><p >Login/Register</p>
      <button style={{backgroundColor:"#fffff",border:"1px solid",width:"240%",height:"50px",color:"black",borderRadius:"50px",marginLeft:"100px"}}>Add Property</button>
   <img src='https://creativelayers.net/themes/homez-html/images/icon/nav-icon-dark.svg' style={{marginLeft:"150px"}}></img>
     </Col>
          </Row>  
           </Container>
      </Navbar>
    
     
      
    </>
  );
}

export default Header;


