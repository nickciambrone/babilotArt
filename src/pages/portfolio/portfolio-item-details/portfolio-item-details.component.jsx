import React from "react";
import brunch from "../brunch.png";
import "./portfolio-item-details.styles.scss";
const PortfolioItemDetails = ({ itemId, goBack, imgPaths }) => {
  console.log(imgPaths);
  return (
    <div style={{textAlign:'left'}}>
      <div className="portfolio-item-details-left" style={{width:'66%'}}>
        <div className = 'go-back-portfolio' onClick={() => goBack()} style={{  width:'20%', cursor:'pointer', textAlign:'center' }}>
        &laquo; Portfolio
        </div>
        <div className = 'images-details' style = {{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        {imgPaths.map((ele) => (
          <img src={"/images/" + ele} width='40%' />
        ))}
        </div>
      </div>
      <div className="portfolio-item-details-right"></div>
    </div>
  );
};

export default PortfolioItemDetails;
