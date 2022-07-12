import React from "react";
import resume from "./calliebabilotresume-02.png";
import resume2 from "./Screen-Shot-2022-02-21-at-4.28.33-PM.png";
const Resume = () => {
  return (
    <div
      className="resume"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        marginLeft: "20%",
        alignItems: "center",
        justifyContent:'center'
      }}
    >
    <a download="babilotResume.jpg" href="/path/to/image" title="ImageName">
    <img alt="ImageName" src="/path/to/image" />
</a>
    <img src={resume2} width="100%" />

      <img src={resume} width="100%" />
      <a href="https://www.linkedin.com/in/callie-babilot-5a677921b/" style={{width:'36px'}}><br />
        <i class="fa fa-linkedin-square" style={{ fontSize: "36px" }}></i>
      </a>
    </div>
  );
};

export default Resume;
