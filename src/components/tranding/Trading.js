import { Box } from "@mui/material";
import React from "react";
import Hrtag from "../hrtag/Hrtag";
import "./tranding.css";

export const Trading = () => {
  return (
    <>
      <Box className="brandwrap">
      <h1 className='title'>@Trending</h1>
      <Box className="brandImages">
          <div className="Boxss">
          <p>#2021</p>
          <p>#Spring</p>
          <p>#Collection</p>
          <p>#Fall</p>
          <p>#Dress</p>
          <p>#Autocollection</p>
          <p>#Openfashio</p>
          </div>
        </Box>
        <Hrtag />
      </Box>
    </>
  );
};
