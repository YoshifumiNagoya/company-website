import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navScrollcolor, setNavScrollColor] = useState(false);

  const onchangeNavColor = () => {
    if (window.scrollY >= 100) {
      setNavScrollColor(true);
    } else {
      setNavScrollColor(false);
    }
  };

  window.addEventListener("scroll", onchangeNavColor);

  return (
    <nav
      className={
        navScrollcolor ? "navbar-scroll-color navbar-main" : "navbar-main"
      }
    >
      <ul>
        <Link to="/" className="linknav">
          <li className="nav-item">HOME</li>
        </Link>
        <Link to="/service" className="linknav">
          <li className="nav-item">SERVICE</li>
        </Link>
        <Link to="/product" className="linknav">
          <li className="nav-item">PRODUCT</li>
        </Link>
        <Link to="/company" className="linknav">
          <li className="nav-item">COMPANY</li>
        </Link>
        <Link to="/recruit" className="linknav">
          <li className="nav-item">RECRUIT</li>
        </Link>
        <Link to="/news" className="linknav">
          <li className="nav-item">NEWS</li>
        </Link>
        <Link to="/contact" className="linknav">
          <li className="nav-item">CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
