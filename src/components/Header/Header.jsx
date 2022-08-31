import "./Header.css";
import React from "react";
import logo from "../../assets/wtf_logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeLink = {
    borderBottom: "2px solid #e7e7e4",
  };

  const activeLinkStyle = ({ isActive }) => (isActive ? activeLink : undefined);

  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo pointer" />
      <nav className="menu menu-list">
        <ul className="menu-list">
          <li className="flex-center">
            <NavLink to={"/fitness"} className="link">
              Fitness
            </NavLink>
          </li>
          <li className="flex-center">
            <NavLink to={"/nutrition"} className="link">
              Nutrition
            </NavLink>
          </li>
          <li className="flex-center">
            <NavLink to={"/"} className="link" style={activeLinkStyle}>
              Gyms
            </NavLink>
          </li>
          <li className="flex-center">
            <NavLink to={"/partner"} className="link">
              Become WTF Partner
            </NavLink>
          </li>
          <li className="flex-center">
            <NavLink to={"/about"} className="link">
              About Us
            </NavLink>
          </li>
        </ul>
        <button className="btn-login br-1x pointer">Login</button>
      </nav>
    </header>
  );
};

export default Header;
