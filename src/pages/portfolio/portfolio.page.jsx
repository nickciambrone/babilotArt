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
import "./portfolio.styles.scss";
import PortfolioItemDetails from "./portfolio-item-details/portfolio-item-details.component";
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: false,
      imgPaths: [],
    };
  }
  render() {
    const setSelectedImageFalse= () =>{
      this.setState({selectedImage:false})
    }

    return (
      <div className="portfolio">
        {!this.state.selectedImage ? (
          <div className="portfolio-full">
            {window.location.pathname === "/portfolio/graphic-design" ? (
              <div
                className="graphic-design-section portfolio-section"
                style={{ display: "flex" }}
              >
                <div className="graphic-design portfolio-item">
                  <img
                    onClick={() =>
                      this.setState({
                        selectedImage: "1",
                        imgPaths: ["cake.png", "farmer.jpeg"],
                      })
                    }
                    id="1"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%", cursor:'pointer' }}
                    src={brunch}
                  />
                </div>
                <div className="graphic-design portfolio-item">
                  <img
                    onClick={() =>
                      this.setState({ selectedImage: "2", imgPaths: [""] })
                    }
                    id="2"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%", cursor:'pointer' }}
                    src={cake}
                  />
                </div>
                <div className="graphic-design portfolio-item">
                  <img
                    onClick={() =>
                      this.setState({ selectedImage: "3", imgPaths: [""] })
                    }
                    id="3"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%", cursor:'pointer' }}
                    src={kushcake}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            {window.location.pathname === "/portfolio/drawing" ? (
              <div
                className="drawing-section portfolio-section"
                style={{ display: "flex" }}
              >
                <div className="drawing portfolio-item">
                  <img
                    id="4"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={stillLife}
                  />
                </div>
                <div className="drawing portfolio-item">
                  <img
                    id="5"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={gabe}
                  />
                </div>
                <div className="drawing portfolio-item">
                  <img
                    id="6"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={selfPortrait}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            {window.location.pathname === "/portfolio/painting" ? (
              <div
                className="painting-section portfolio-section"
                style={{ display: "flex" }}
              >
                <div className="painting portfolio-item">
                  <img
                    id="7"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={woman}
                  />
                </div>
                <div className="painting portfolio-item">
                  <img
                    id="8"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={farmer}
                  />
                </div>
                <div className="painting portfolio-item">
                  <img
                    id="9"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={sunnyTits}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            {window.location.pathname === "/portfolio/photography" ? (
              <div
                className="photography-section portfolio-section"
                style={{ display: "flex" }}
              >
                <div className="photography portfolio-item">
                  <img
                    id="10"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={windowGirl}
                  />
                </div>
                <div className="photography portfolio-item">
                  <img
                    id="11"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={taco}
                  />
                </div>
                <div className="photography portfolio-item">
                  <img
                    id="12"
                    className="portfolio-image"
                    width="80%"
                    style={{ marginLeft: "10%" }}
                    src={kid}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <PortfolioItemDetails itemId={this.state.selectedImage} goBack = {setSelectedImageFalse} imgPaths = {this.state.imgPaths}/>
        )}
      </div>
    );
  }
}

export default Portfolio;
