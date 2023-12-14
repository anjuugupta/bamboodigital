import React from 'react';
import { Box } from '@mui/material';
import collection from '../../assets/collection.png';
import './collectionshopping.css'; 

export const Collectionshopping = () => {
  return (
    <Box>
      <div className='collectionwrap'>
        <h1 className='title'>collections</h1>
        <div className='collectionimage'>
          <img src={collection} alt='Collection' />
          <div className='overlay'>
            <h1>10</h1>
            <p className='additional-text'>October
            collection</p>
          </div>
        </div>
      </div>
    </Box>
  );
};
