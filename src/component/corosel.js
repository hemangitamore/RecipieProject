// src/components/ExampleCarouselImage.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const corosel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={'/images/recipeApp.jpg'}
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
            <h3>{image.label}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default corosel;
