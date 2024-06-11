import React from "react";
import "../../styles/Header_css/Header.css";
import logo_ceremonial from "../../assets/images/logo_ceremonial.svg";
import Navlinks from "./Navlinks";
import Authentification from "./Authentification";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">
       <Link href="/"> <img src={logo_ceremonial} alt="logo_ceremonial" /></Link> 
      </div>
      <div className="nav-links">
        <Navlinks/>
      </div>
      <div className="login_register">
        <Authentification />
      </div>
    </div>
  );
}

export default Header;
