//import React from 'react';
import React  from 'react';
//import Carousel from './Carousel';


//import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
//import NavDropdown from 'react-bootstrap/NavDropdown'
//import container from bootstrp react, NavDropdown
//import Nav from 'react-bootstrap/Nav'
import Blue from '../Images/Blue.jpg'


// <img 
//         className="d-block w-100 " width="700px" height="700px" 
//         src={Cyberdyne} 
//         alt="Body slide"
//       />




function card() {

    return (
        
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Img src={Blue}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Img>
    <Card.Link href="https://www.bootcampspot.com/">Card Link</Card.Link>
    <Card.Link href="https://www.bootcampspot.com/">Another Link</Card.Link>
  </Card.Body>
</Card>





    );

}


export default card;


































