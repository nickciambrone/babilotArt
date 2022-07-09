import React from "react";
import cake from "./cake.png";
import brunch from "./brunch.png";
import kushcake from "./kushcake.png";
import stillLife from "./stillLife.jpeg";
import gabe from "./gabe.jpeg";
import selfPortrait from "./selfPortrait.jpeg";
import woman from "./woman.jpeg";
import sunnyTits from "./sunnyTits.jpeg";
import farmer from "./farmer.jpeg";
import windowGirl from "./windowGirl.jpeg";
import taco from "./taco.jpeg";
import kid from "./kid.jpeg";
import './portfolio.styles.scss'
const Portfolio = () => {
  console.log(window.location.pathname);

  return (
    <div className="portfolio">
      {window.location.pathname === "/babilotArt/portfolio/graphic-design" ? (
        <div
          className="graphic-design-section portfolio-section"
          style={{ display: "flex" }}
        >
          <div className="graphic-design portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={brunch} />
          </div>
          <div className="graphic-design portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={cake} />
          </div>
          <div className="graphic-design portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={kushcake} />
          </div>
        </div>
      ) : (
        ""
      )}
      {window.location.pathname === "/babilotArt/portfolio/drawing" ? (
        <div
          className="drawing-section portfolio-section"
          style={{ display: "flex" }}
        >
          <div className="drawing portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={stillLife} />
          </div>
          <div className="drawing portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={gabe} />
          </div>
          <div className="drawing portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={selfPortrait} />
          </div>
        </div>
      ) : (
        ""
      )}
      {window.location.pathname === "/babilotArt/portfolio/painting" ? (
        <div
          className="painting-section portfolio-section"
          style={{ display: "flex" }}
        >
          <div className="painting portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={woman} />
          </div>
          <div className="painting portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={farmer} />
          </div>
          <div className="painting portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={sunnyTits} />
          </div>
        </div>
      ) : (
        ""
      )}
      {window.location.pathname === "/babilotArt/portfolio/photography" ? (
        <div
          className="photography-section portfolio-section"
          style={{ display: "flex" }}
        >
          <div className="photography portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={windowGirl} />
          </div>
          <div className="photography portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={taco} />
          </div>
          <div className="photography portfolio-item">
            <img width="80%" style={{ marginLeft: "10%" }} src={kid} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Portfolio;
