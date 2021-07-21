//import React from 'react';
import React  from 'react';
//import Carousel from './Carousel';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
//import container from bootstrp react, NavDropdown
import Nav from 'react-bootstrap/Nav'



function navbar() {

    return (
        
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" i class= "bi bi-laptop">React-Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="https://www.bootcampspot.com/">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About Me</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Contact Info</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Linkedln</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Github</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Resume</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      







    );

}


export default navbar;


