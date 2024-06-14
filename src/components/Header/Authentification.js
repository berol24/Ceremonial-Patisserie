import React from "react";
import "../../styles/Header_css/Authentification.css"
import { Link } from 'react-router-dom';
function Authentification() {
  return (
    <div className="authentification">
      <div className="login_connexion">
       
        <Link to="/login">
          <button className="btn_login">Connexion</button>
        </Link>
      </div>
      <div className="register_connexion">
        <Link to="/register">
          <button className="btn_register">S'inscrire</button>
        </Link>
      </div>
    </div>
  );
}

export default Authentification;
