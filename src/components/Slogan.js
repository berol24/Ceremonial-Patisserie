import React from "react";
import logo_ceremonial from "../assets/images/logo_ceremonial.svg";
import "../styles/Slogan.css";
import Slogan_text from "./Slogan_text";
function Slogan() {
  return (
    <div className="slogan_contain">
      <div className="slogan">
        <div className="slogan_logo">
          <img src={logo_ceremonial} alt="logo_ceremonial" />
        </div>
        <div className="slogan_text">
          <p>“Ensemble nous donnons de la valeur à vos cérémonies”</p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
