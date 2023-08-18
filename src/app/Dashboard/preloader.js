import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./preloader.css"; // Create a CSS file for styling

const Preloader = () => {
  return (
    // <div classNameName="preloader-container">
    //   <CircularProgress color={palette.warning.main} className="progress" />
    //   <p>Loading...</p>
    // </div>
    <div className="preloader-container">
      <div className="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </div>
  );
};

export default Preloader;
