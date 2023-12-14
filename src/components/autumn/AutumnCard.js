import React from 'react';
import { Box } from '@mui/material';
import './autumcsrd.css'
import autumn from "../../assets/autumn.png"

export const AutumnCard = () => {
  return (
    <Box>
    <div className='collectionwrap'>
    <div className='collectionimage'>
      <img src={autumn} alt='Collection' />
      <div className='textwrap'>
        <p className='automnColl'>AUTUMN</p>
       <p className='collp'> collection</p>
       </div>
    </div>
  </div>
    </Box>
  )
}
