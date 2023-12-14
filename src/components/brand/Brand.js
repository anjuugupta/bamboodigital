import { Box } from '@mui/material'
import React from 'react'
import Hrtag from "../hrtag/Hrtag"
import "./brand.css"

import prada from "../../assets/Prada.png"
import  burberry from "../../assets/Burberry.png"
import boss from "../../assets/Boss.png"
import cartier from "../../assets/Catier.png"
import gucci from "../../assets/Gucci.png"
import tiffany from "../../assets/Tiffany & Co.png"

export const Brand = () => {
  return (
    < >
    <Box className="brandwrap">
    <Hrtag/>
    <Box className="brandImages">
    <div className='Boxss'>
    <img src={prada}/>
    <img src={burberry}/>
    <img src={boss}/>
    <img src={cartier}/>
    <img src={gucci}/>
    <img src={tiffany}/>
    </div>
    </Box> 
    <Hrtag/>
    </Box>    
    </>
  )
}
