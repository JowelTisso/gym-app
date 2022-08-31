import "./Header.css";
import React from "react";
import logo from "../../assets/wtf_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo pointer" />
      <nav className="menu-list">
        <ul className="menu-list">
          <li className="flex-center">
            <Link to={"/"} className="link">
              Fitness
            </Link>
          </li>
          <li className="flex-center">
            <Link to={"/"} className="link">
              Nutrition
            </Link>
          </li>
          <li className="flex-center">
            <Link to={"/"} className="link">
              Gyms
            </Link>
          </li>
          <li className="flex-center">
            <Link to={"/"} className="link">
              Become WTF Partner
            </Link>
          </li>
          <li className="flex-center">
            <Link to={"/"} className="link">
              About Us
            </Link>
          </li>
        </ul>
        <button className="btn-login br-1x pointer">Login</button>
      </nav>
    </header>
  );
};

export default Header;
