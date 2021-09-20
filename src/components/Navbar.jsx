import React from "react";
import "./Navbar.css";
import img from "../images/portfolioimg.png";
const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <header>
          <ul className="list-item">
            <li className="nav-image">
              <img src={img} alt="img" />
            </li>
            <li>Home</li>
            <li>Contact</li>
            <li>More</li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Navbar;
