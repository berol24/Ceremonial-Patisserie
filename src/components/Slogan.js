import React, { useEffect, useState } from "react";
import logo_ceremonial from "../assets/images/logo_ceremonial.svg";
import "../styles/Slogan.css";

function Slogan() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche la transition après le montage du composant
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Ajoute un léger délai pour une transition plus fluide
  }, []);


  return (
    <div className={`slogan_contain ${isVisible ? 'show' : ''}`}>
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
