import React from "react";
import "./home.styles.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="home-main">
{  /*      <h1 style={{ fontFamily: "Comfortaa, cursive" }}>HOME</h1> */
}        <div
          className="headshots"
          style={{ display: "flex", flexDirection: "row" }}
        >
{      /*    <img
            width="33%"
            src="https://i0.wp.com/calliebabilot.com/wp-content/uploads/2020/12/IMG_5269.jpg?fit=300%2C300&ssl=1"
          />
          <img
            width="33%"
            src="https://i0.wp.com/calliebabilot.com/wp-content/uploads/2020/12/IMG_5268.jpg?fit=300%2C300&ssl=1"
          />
          <img
            width="33%"
            src="https://i0.wp.com/calliebabilot.com/wp-content/uploads/2020/12/IMG_5267.jpg?fit=300%2C300&ssl=1"
  /> */}
        </div>
        <h1 style={{ fontFamily: "Comfortaa, cursive", textAlign: "left" }}>
          A few things about me...
        </h1>
        <div style={{ textAlign: "left", fontFamily: "Comfortaa" }}>
          <p>
            My name is Callie Babilot and I am a 22 year old graphic designer
            based in Paramus, NJ. From a very young age, I became obsessed with
            creatively expressing myself through my artistic abilities. I picked
            up hobbies including drawing, painting, illustration, and
            photography which have happily brought me to where I am now.
          </p>
          <p>
            Fast forward years later, and the flow of artistry never stopped. I
            have now graduated from Stockton University with a Bachelor of Fine
            Arts Degree with a concentration in Visual Communications.
          </p>

          <p>
            There is nothing I love more than being outdoors or traveling
            somewhere outside of my usual surroundings. I tend to develop
            inspiration for art through my environment, the people I meet, and
            the things I love doing. Therefore, I tend to gain new perspectives
            on life every moment that I can, thus benefitting my career and
            passion for art.
          </p>
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
        <div className="accomplishments">
          <h1 style={{ fontFamily: "Comfortaa, cursive", textAlign: "left" }}>
            Some of my accomplishments include…
          </h1>
          <ul style = {{textAlign:'left' , fontFamily: "Comfortaa" }}>
            <li style={{lineHeight:'30px'}}>Custom Commissions and Selling Artwork (2018-present)</li> 
            <li style={{lineHeight:'30px'}}>Received National Art Honors Society Scholarship and Award (2017) </li>
            <li style={{lineHeight:'30px'}}>Special Recognition for Artwork at Bergen Community College Arts Festival (2016-2017) </li>
            <li style={{lineHeight:'30px'}}>Painted Mural for Paramus Municipal Pool (2016)</li>
          </ul>
        </div>
      </div>
      <div
        className="home-inspiration"
        style={{ fontFamily: "Comfortaa", textAlign: "left" }}
      >
        <h4>- MY INSPIRATION</h4>
        <div>
          While growing up in a household where art was greatly appreciated, I
          knew that I wanted to make the world a more colorful and creative
          place. Every piece tells a story, and a snippet from my journey as an
          artist. Come along with me as I explore my perspective of fine arts.
        </div>
      </div>
    </div>
  );
};

export default Home;
