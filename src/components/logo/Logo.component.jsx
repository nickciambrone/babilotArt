import React from "react";
import logo from "./butterfly.png";
import "./Logo.styles.scss";

const Logo = ({history}) => {

  return (
    <div className="logo">
      <img src={logo} className="logo-graphic" style={{cursor:'pointer'}} onClick = {()=>history.push('/home')}/>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "2px 0 2px 0",
        }}
        className = 'logo-intro'
      >
        <span>Callie Babilot</span>
        <span style={{ fontFamily: "Playball, cursive" }}>
          Graphic Designer
        </span>
      </h1>
    </div>
  );
};

export default Logo;
