import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Corousel2 = () => {
  return (
    <div>    <Carousel>
    <Carousel.Item interval={2000}>
      <img
        className=" corousel-img2"
        src="/assets/Earpod.jpg"
        alt="First slide"
      />
      
    </Carousel.Item>
    
    <Carousel.Item interval={2000}>
      <img
        className=" corousel-img2"
        src="/assets/red-watch.jpg"
        alt="Second slide"
      />
    </Carousel.Item>

    <Carousel.Item interval={2000}>
      <img
        className=" corousel-img2"
        src="/assets/lenovo.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className=" corousel-img2"
        src="/assets/Led.jpeg"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className=" corousel-img2"
        src="/assets/samsung.webp"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Corousel2