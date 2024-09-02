import React, { useState } from "react";
import "../../styles/Header_css/Header.css";
import logo_ceremonial from "../../assets/images/logo_ceremonial.svg";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo_ceremonial} alt="Ceremonial Logo" />
        </Link>
      </div>

      <div className="nav-icons">
        {menuOpen ? (
          <HighlightOffIcon className="icon closeIcon" onClick={toggleMenu} />
        ) : (
          <MenuIcon className="icon menuIcon" onClick={toggleMenu} />
        )}
      </div>

      <div className={`nav-links ${menuOpen ? "show" : "closeButton"}`}>
        <Navlinks />
      </div>
    </div>
  );
}

export default Header;
