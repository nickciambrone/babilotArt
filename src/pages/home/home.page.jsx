import React from "react";
import "./home.styles.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="home-main">
{  /*      <h1 style={{ fontFamily: "Comfortaa, cursive" }}>HOME</h1> */
}        <div
          className="headshots"
          // style={{ display: "flex", flexDirection: "row" }}
        >
         <img
            width="33%"
            src="/images/IMG_8286.jpeg"
          />
          <img
            width="33%"
            src="/images/Facetune_01-03-2022-16-03-00.jpeg"
          />
          <img
            width="33%"
            src="/images/Facetune_27-09-2020-17-38-13.jpeg"
  /> 
        </div>
        <h1 style={{ fontFamily: "Comfortaa, cursive", textAlign: "left" }}>
          A few things about Callie...
        </h1>
        <div style={{ textAlign: "left", fontFamily: "Comfortaa" }}>
      
      

          <p>
          Callie Babilot is a 23 year old fine artist and graphic designer based in Bergen
          County, NJ. Her infatuation with creatively expressing herself through her artistic
          abilities started at a very young age. Throughout her life, she has focused on
          perfecting her craft with drawing, painting, photography, design, and so much
          more.
          </p>
          <p>
          Callie attended Stockton University and graduated with a Bachelor of Fine Arts
          Degree with a concentration in Visual Communications. Various artistic positions
          in clubs, organizations and internships throughout the time in her
          undergraduate program have helped shape the imaginative and innovative
          person she is today.
          </p>

          <p>
          Since 2020, Callie has been freelancing as a graphic designer, fine artist and
          content creator part time. She is nothing less than a visionary who’s ambition
          revolves around helping people bring their artistic ideas to life as well as her own.
          </p>
          <form method="get" action="/images/calliebabilotresume.pdf" target="_blank"><button class="document" type="submit">View My Resume</button></form>
        </div>
        <div
          className="action-shots"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
      {  /*  <img
            width="33%"
            src="https://i0.wp.com/calliebabilot.com/wp-content/uploads/2020/12/IMG_5274.jpg?rfit=300%2C300ssl=1"
          />
          <img
            width="33%"
            src="https://i0.wp.com/calliebabilot.com/wp-content/uploads/2020/12/IMG_05231.jpg?fit=300%2C300&ssl=1"
          />
          <img
            width="33%"
            src="https://i0.wp.com/calliebabilot.com/wp-content/uploads/2020/12/IMG_5275.jpg?fit=300%2C300&ssl=1"
        />*/}
        </div>
     
      </div>
 
    </div>
  );
};

export default Home;
