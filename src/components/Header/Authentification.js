import React from "react";
import "../../styles/Header_css/Authentification.css"
import { Link } from 'react-router-dom';
function Authentification() {
  return (
    <div className="authentification">
      <div className="login">
        <Link  to="/login">
          <button>Connexion</button>
        </Link>
      </div>
      <div className="register">
        <Link to="/register">
          <button>S'inscrire</button>
        </Link>
      </div>
    </div>
  );
}

export default Authentification;
