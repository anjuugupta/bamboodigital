import { Box } from "@mui/material";
import React from "react";
import logo from "../../assets/Group.png";
import "./whychoose.css";
import miroodles from "../../assets/Miroodles Sticker.png";
import miroodlesone from "../../assets/Miroodles Sticker1.png"
import miroodlestwo from "../../assets/Miroodles Sticker2.png"
import miroodlesthree from "../../assets/Miroodles Sticker3.png"
import Hrtag from "../hrtag/Hrtag";
import fohr from "../../assets/abc.png"

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
            <Hrtag/>

 
            <div className="choose-1">
            <div className="miroodles">
                <img src={miroodles} />
                <p>Fast shipping. Free on orders over $25.</p>
                </div>
                <div className="miroodles">
                <img src={miroodlesone} />
                <p>Sustainable process from start to finish.</p>
                </div>
                <div className="miroodles">
                <img src={miroodlestwo} />
                <p>Unique designs and high-quality materials.</p>
                </div>
                <div className="miroodles">
                <img src={miroodlesthree} />
                <p>Fast shipping. Free on orders over $25.</p>
                </div>
                </div>
                <img src={fohr}/>
            </div>
          </div>
      </Box>
    </>
  );
};
