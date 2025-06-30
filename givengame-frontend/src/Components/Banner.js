import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { SignUpButton } from '@clerk/clerk-react';
import './Banner.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { SignInButton, SignUpButton, SignedOut } from '@clerk/clerk-react';





function Banner () {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,        // hide arrows
    autoplay: true,       // ⬅️ turn on autoplay
    autoplaySpeed: 5000,  // ⬅️ 2-second interval
    pauseOnHover: false,  // keep cycling even on hover (optional)
    fade: true 
  };

  const images = [

    // "/Assets/Baltimore Youth.PNG",
    "/Assets/Baseball Swing.PNG",
    "/Assets/Boys Baseball.PNG",
    "/Assets/Boys Hockey.PNG",
    "/Assets/Boys Football.PNG",
    "/Assets/Girls Soccer.PNG",
    "/Assets/More Girls Soccer.PNG",
    "/Assets/Teenage Lacrosse.PNG"
  
  
  
  ]

    // const [currentIndex, setCurrentIndex] = useState(0);

    const navigate = useNavigate();

    // const handlePrev = () => {
    //   setCurrentIndex((prevIndex) => 
    //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //   );
    // };

    // const handleNext = () => {
    //   setCurrentIndex((prevIndex) => 
    //     prevIndex === images.length -1 ? 0 : prevIndex + 1
    //   );
    // };


    return (

      <div className="slider-wrapper">
      <div className="banner-overlay">
        <h1 className="banner-heading">
          Become a <span className="giver-highlight">GIVER</span> to Help them <span className="highlight-red">GAME</span>
        </h1>
        <h3>
          (Full site coming August 2025! Scroll to meet our talented team  members!)
        </h3>
        <SignUpButton mode="modal" redirectUrl="/thank-you">Register Today!</SignUpButton>
      </div>

      <Slider {...settings}>
        {images.map((img, i) => (
          <div className="slide-wrapper" key={i}>
            <img src={img} alt={`Slide ${i}`} className="slide-img" />
          </div>
        ))}
      </Slider>
    </div>
      //   <div className="banner">
      // {/* <img src="https://www.arc4studio.com/store/images/large/BaseballBanners_LRG.jpg" alt="Banner" /> */}
      //     <button className="banner-arrow left" onClick={handlePrev}>‹</button>
      //     <img src={images[currentIndex]} alt="Banner Images" className="banner-image" />
          
      //     <button className="banner-arrow right" onClick={handleNext}>›</button>

      //   </div>
    );
};

export default Banner;