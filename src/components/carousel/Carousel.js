import React from "react";
import './Carousel.css';

function Carousel() {
  return (
    <div className="carousel">
      <div className="container-fluid">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                className="d-block w-100"
                alt="Carousel Image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
                className="d-block w-100"
                alt="Carousel Image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
                className="d-block w-100"
                alt="Carousel Image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/61NAdLjXLlL._SX3000_.jpg"
                className="d-block w-100"
                alt="Carousel Image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                className="d-block w-100"
                alt="Carousel Image"
              />
            </div>
          </div>
          <div className="carousel--fadeBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
