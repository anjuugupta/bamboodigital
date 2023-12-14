import { Box } from "@mui/material";
import React from "react";
import logo from "../../assets/Group.png";
import "./whychoose.css";
import miroodles from "../../assets/Miroodles Sticker.png";

export const Whychoose = () => {
  return (
    <>
      <Box>
        <div className="choosewrap">
          <div className="wrap-1">
            <img src={logo} alt="logo" className="logowrap" />
            <p>
              Making a luxurious lifestyle accessible for a generous group of
              women is our daily drive.
            </p>
            <div className="container">
              <div className="list-2">
                <img src={miroodles} />
                <p>Fast shipping. Free on orders over $25.</p>
                <img src={miroodles} />
                <p>Sustainable process from start to finish.</p>
                <img src={miroodles} />
                <p>Unique designs and high-quality materials.</p>
                <img src={miroodles} />
                <p>Fast shipping. Free on orders over $25.</p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};
