import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/ImageSlider.css'
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';

// Import images
import js from '../components/assests/images/js.png';
import react from '../components/assests/images/react.png';
import html from '../components/assests/images/html.png';
import css from '../components/assests/images/css.png';
import django from '../components/assests/images/django1.png';
import python from '../components/assests/images/python1.png';
import mysql from '../components/assests/images/myswl1.png';
import githup from '../components/assests/images/githup.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const pythonData = [
    { name: 'MySQL', image: mysql },
    { name: 'Python', image: python },
    { name: 'Django', image: django },
    { name: 'JavaScript', image: js },
    { name: 'React', image: react },
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'Githup', image: githup },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []); // Empty dependencies array ensures this runs only once

  return (
    <div>
      <div className="skills">
        <h1> <MdOutlineStarBorderPurple500 className="text-warning me-2" style={{fontSize:"60px"}}/> My Skills</h1>
      </div>

      <div className="Skills-learn">
        <Slider {...settings}>
          {pythonData.map((skill, index) => (
            <div key={index} data-aos="fade-up">
              <div className="skills-img">
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skillnames">
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
