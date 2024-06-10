import React from "react";
import "../../styles/Authentification.css"
function Authentification() {
  return (
    <div className="authentification">
      <div className="login">
        <a href="#">
          <button>Connexion</button>
        </a>
      </div>
      <div className="register">
        <a href="#">
          <button>S'inscrire</button>
        </a>
      </div>
    </div>
  );
}

export default Authentification;
