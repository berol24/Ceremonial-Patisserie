import React from "react";
import "../../styles/Header.css";
import logo_ceremonial from "../../assets/images/logo_ceremonial.svg";
import Navlinks from "./Navlinks";
import Authentification from "./Authentification";

function Header() {
  return (
    <div className="header">
      <div className="logo">
       <a href="/"></a>  <img src={logo_ceremonial} alt="logo_ceremonial" />
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
