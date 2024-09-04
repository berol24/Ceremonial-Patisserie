import React, { useEffect, useState } from "react";
import "../styles/WelcomePage.css";
import photo_gateau from "../assets/images/photo_gateau.svg";
import Slogan from "./Slogan";

function WelcomePage() {

    const [showSlogan, setShowSlogan] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSlogan(true);
        setShowLoader(false);
      }, 800);
  
      return () => clearTimeout(timer); 
    }, []);
  


  return (
    <div className="load">
    {showLoader && (
      <div className="loader-container">
        <img src={photo_gateau} alt="Ceremonial Logo" className="photo_gateau" />
        <div className="loader"></div>
      </div>
    )}
    {showSlogan && <Slogan />}
  </div>
  );
}

export default WelcomePage;
