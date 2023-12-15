import React from 'react';
import { Box } from '@mui/material';
import './autumcsrd.css';
import autumn from "../../assets/autumn.png";
import autumntwo from "../../assets/autumntwo.png";

export const AutumnCard = () => {
  return (
    <Box>
      <div className='collectionwrap'>
        <div className='collectionimage wrap-up'>
          <img src={autumntwo} alt='Autumn Collection' className='desktop-image' />

          <img src={autumn} alt='Autumn Collection Two' className='mobile-image' hidden />

          <div className='textwrap'>
            <p className='automnColl'>AUTUMN</p>
            <p className='collp'>collection</p>
          </div>
        </div>
      </div>
    </Box>
  );
};
