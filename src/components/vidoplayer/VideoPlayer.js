import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import videoimage from '../../assets/image12.jpg';
import './videoplayer.css';
import video from "../../assets/video.mp4"

export default function VideoPlayer() {
  return (
    <Box className='videowrap'>
      <CardMedia>
        <video
          controls
          poster={videoimage}  // Use videoimage as the poster
          style={{ width: '100%', height:'auto' }}
        >
          <source
            src={video}
            type="video/mp4"
            style={{ width: '100%', height: '100%' }}
          />
        </video>
      </CardMedia>
    </Box>
  );
}
