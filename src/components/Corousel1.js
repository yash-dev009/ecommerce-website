import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Corousel1 = () => {




  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="corousel-img"
          src="/assets/casual shoes.webp"
          alt="First slide"
          // style={{height:"20%", width:"60%"}}
        />
      </Carousel.Item>
      
  
      <Carousel.Item interval={2000}>
        <img
          className="corousel-img"
          src="/assets/phone2.jpeg"
          alt='2md slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="corousel-img"
          src="/assets/red-watch.jpg"
          alt="3rd slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="corousel-img"
          src="/assets/beltnew.jpg"
          alt="3rd slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="corousel-img"
          src="/assets/bigbag.webp"
          alt="4th slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

