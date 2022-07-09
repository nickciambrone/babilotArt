import React from "react";
import "./Navbar.styles.scss";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let navigate = useNavigate();
  const navItems = [
    ["Home", ""],
    ["Resume", ""],
    ["Portfolio", ["Graphic Design", "Drawing", "Painting", "Photography"]],
    ["Contact", ""],
    ["Shop", ""],
  ];
 

  return (
    // <div className = 'nav-bar' style = {{display:'flex', justifyContent: 'space-evenly', backgroundColor:'#563d7c'}}>
    //     {navItems.map(ele=><NavItem item = {ele}/>)}

    // </div>
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#cadfe1" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mr-auto"
            style={{ width: "100%", justifyContent: "space-evenly" }}
          >
            <li className="nav-item active">
              <div className="nav-link" href="#">
                <div
                  onClick={() => navigate("/babilotArt/home")}
                  style={{ width: "14%", marginLeft: "43%" }}
                >
                  <span className="nav-text">Home</span>
                </div>{" "}
                <span className="sr-only">(current)</span>
              </div>
            </li>

            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="nav-text"> Portfolio</span>
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/babilotArt/portfolio/graphic-design">
                  Graphic Design
                </a>
                <a className="dropdown-item" href="/babilotArt/portfolio/drawing">
                  Drawing
                </a>
                <a className="dropdown-item" href="/babilotArt/portfolio/painting">
                  Painting
                </a>
                <a className="dropdown-item" href="/babilotArt/portfolio/photography">
                  Photography
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <div
                className="nav-link"
                href="#"
                onClick={() => navigate("/babilotArt/resume")}
              >
                <span className="nav-text">Resume</span>{" "}
                <span className="sr-only">(current)</span>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="nav-text"> Shop</span>
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Prints
                </a>
                <a className="dropdown-item" href="#">
                  Paintings
                </a>
                <a className="dropdown-item" href="#">
                  Other Stuff
                </a>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <div
                className="nav-link"
                href="#"
                onClick={() => navigate("/babilotArt/contact")}
              >
                <span className="nav-text">Contact</span>{" "}
                <span className="sr-only">(current)</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;