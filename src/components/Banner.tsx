import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bottom-0 bg-gradient-to-t from-gray-100 to-transparent z-20" />
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="Banner Image"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="Banner Image"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="Banner Image"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
