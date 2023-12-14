import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import './videoplayer.css';

export default function VideoPlayer() {
  return (
    <Box className='videowrap'>
        <CardMedia>
          <video
            controls
            poster="https://assets.codepen.io/6093409/river.jpg"
            style={{ width: '100%', height: '100%' }}
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
              style={{ width: '100%', height: '100%' }}
            />
          </video>
        </CardMedia>
    </Box>
  );
}
