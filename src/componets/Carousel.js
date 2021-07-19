//import React from 'react';
import React  from 'react';
//import Carousel from './Carousel';

import Carousel from 'react-bootstrap/Carousel'
import Lightboxes from '../Images/Lightboxes.jpg'
import Neurons from '../Images/Neurons.png'
import Cyberdyne from '../Images/Cyberdyne.jpg'


function carousel() {

return (

    <Carousel>
    <Carousel.Item interval={9999}>
      <img
        className="d-block w-100 " width="700px" height="700px"
        src={Cyberdyne}
        alt="Body slide"
      />
      <Carousel.Caption>
        <h3>About Me?</h3>
        <p>Who am I? What do i do?</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={9999}>
      <img
      className="d-block w-100 " width="700px" height="700px"
        src={Lightboxes}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Take a Link at me</h3>
        <p>Links of best work</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
      className="d-block w-100 " width="700px" height="700px"
        src={Neurons}
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
