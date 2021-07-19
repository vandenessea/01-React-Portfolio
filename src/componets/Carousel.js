//import React from 'react';
import React  from 'react';
//import Carousel from './Carousel';
import Carousel from 'react-bootstrap/Carousel'
import Body from '../Images/Body.jpg'
import Blue from '../Images/Blue.jpg'


function carousel() {

return (

    <Carousel>
    <Carousel.Item interval={9999}>
      <img
        className="d-block w-100"
        src={Body}
        alt="Body slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={9999}>
      <img
        className="d-block w-100"
        src={Blue}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

);


}


export default carousel;
