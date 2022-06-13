import React from "react";
import logo1 from "./pic/f_logo.png";
// import { Link } from "react-router-dom";
import "./foot.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container text-center top">
          {/* <Link to="/portfolio"> */}
            <div className="img">
              <img className="myfooter" src={logo1} alt="footer pic" style={{ width: "6rem" }} />
            </div>
          {/* </Link> */}
          <p>
            <a href="#contact">Feel Free to get in touch</a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
