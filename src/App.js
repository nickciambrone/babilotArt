import logo from "./logo.svg";
import "./App.css";
import Logo from "./components/logo/Logo.component";
import Navbar from "./components/navbar/Navbar.component";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.page";
import Contact from "./pages/contact/contact.page";
import Portfolio from "./pages/portfolio/portfolio.page";
import Resume from "./pages/resume/resume.page";

function App() {
  return (
    <div className="App">
      <div className="nav-and-logo" style={{ display: "flex" }}>
        <Logo />
        <Navbar />
      </div>
      <div style={{ backgroundColor: "#f1e9da", minHeight:'75vh' }}>
        <div
          style={{
            marginLeft: "6%",
            width: "88%",
            paddingBottom: "80px",
            paddingTop: "20px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop/:category" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path={`/portfolio/:category`}
              element={<Portfolio />}
            ></Route>
            <Route path="/resume" element={<Resume />}></Route>
          </Routes>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fba918",
          color: "black",
          fontWeight: "300",
          fontSize: "10px",
          fontFamily: "Comfortaa",
          padding:'12px 0'
        }}
      >
        Built by <a href='https://www.ciambronesolutions.com' target='_BLANK'>Ciambrone Solutions</a>
      </div>
    </div>
  );
}

export default App;
