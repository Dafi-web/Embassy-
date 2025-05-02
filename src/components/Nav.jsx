import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://github.com/Dafi-web/cssas1/blob/main/WhatsApp%20Image%202025-04-30%20at%2011.44.47.jpeg?raw=true"
          alt="Logo"
        />
        <span>SKV Embassy</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
