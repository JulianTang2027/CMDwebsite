import React from "react";
import "./navbar.css";
import cmdLogo from "../assets/cmdlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img className="navbarLogo" src={cmdLogo}></img>
        </Link>
      </div>
      <ul>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Services">
          <li>Services</li>
        </Link>
        <li>Team</li>
        <li>Global Presence</li>
        <li>News</li>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
