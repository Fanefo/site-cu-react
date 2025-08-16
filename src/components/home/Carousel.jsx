import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const slides = [
    {
      image: '/clinic-1.jpg',
      title: 'Servicii de Fizioterapie Moderne',
      description: 'Echipamente de ultimă generație pentru recuperarea dumneavoastră'
    },
    {
      image: '/doctor-1.jpg',
      title: 'Echipă Medicală Specializată',
      description: 'Experți cu experiență în recuperare medicală'
    },
    {
      image: '/treatment-1.jpg',
      title: 'Terapii Personalizate',
      description: 'Tratamente adaptate nevoilor fiecărui pacient'
    }
  ];

  return (
    <Box className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div 
              className="slide-content" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-text">
                <Typography variant="h3">{slide.title}</Typography>
                <Typography variant="h6">{slide.description}</Typography>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
