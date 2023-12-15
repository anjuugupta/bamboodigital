import React from "react";
import Box from '@mui/material/Box'
import "./herobanners.css";

//Images Herobanner
import banner from "../../assets/image.png";
import bannertwo from "../../assets/banner.png"

export const HeroBanner = () => {
  return (
    <Box className="banner">
      <img src={banner} 
      alt="Desktop Hero Banner" 
        className="mobile-image" 
        />

      <img 
        src={bannertwo} 
        alt="Mobile Hero Banner" 
        className="desktop-image"
        hidden
      />
      <Box className="contantBanner">
        <p>Luxury Fashion & Accessories</p>
        <button className="btn"><a>Explore Collection</a></button>
      </Box>
    </Box>
  );
};
