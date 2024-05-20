/*export function Navigation(){
    return(
      <div>
          <a href="/">Home</a>
        <a href="/about"> AboutUs</a>
        <a href="/contact"> ContactUs</a>
      </div>
    )
}*/

// component/Navigation.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import './custome-nav.css';



export const Navigation = () => {
  return (

    <Navbar expand="lg " bg="dark" data-bs-theme="dark" className="custom-navbar" >
      <Container >
        <Navbar.Brand href="#home">RecipeApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
           <LinkContainer to={"/"}>
           <Nav.Link >Home</Nav.Link>
           </LinkContainer>
            
           


            <LinkContainer to={"/about-us"}>
              <Nav.Link >AboutUs</Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/contact"}>
              <Nav.Link >ContactUs</Nav.Link>
            </LinkContainer>

            
            <LinkContainer to={"/resister"}>
              <Nav.Link >SignUp</Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/login"}>
              <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to={"/addrecipe"}>
              <Nav.Link >Add Recipe</Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/recipieList"}>
              <Nav.Link >show Recipes</Nav.Link>
            </LinkContainer>

            





          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    /*<div>
      <p><Link to="/">Home</Link></p>
      
       
      <p><Link to="/about">About Us</Link></p>
    
   
    <p><Link to="/contact">Contact Us</Link></p>
    </div>*/




  )
};
