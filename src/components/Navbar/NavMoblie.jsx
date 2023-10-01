import React, { useState } from "react";
import "./navmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Switch from "react-switch";

const NavMoblie = ({ theme, handleChangeTheme }) => {
  const [open, setOpen] = useState(false);

  const handleNavbaropen = () => setOpen(!open);

  return (
    <div className="responsive-mobile-view">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleNavbaropen} />
        </p>
      </div>
      {open ? (
        <div className="mobile-nav">
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
            <li className="nav-item">CONTACT</li>
            <Switch onChange={handleChangeTheme} checked={theme === "light"} />
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavMoblie;