import React from 'react'
import Input from "../Input/Input";
import Button from "../Button/Button";
import "../../styles/Login_css/Login.css";
import Slogan from "../Slogan";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login_slogan">
        <Slogan />
      </div>
      <div className="form_login">
        <form method="POST" action="/">
          {/* <div className="my_title"> */} {/* </div> */}
          <h1 className="title_login">Connectez-vous</h1>
          <p className="subtitle_login">
          Connectez-vous pour accéder à votre espace
          </p>
        
          <div className="input_pair input_pair_login">
            <Input
               className_items="input-items-login"
               className_item="input-item-login"
              label="Pseudo"
              type="text"
              name="pseudo"
              width_svg="16"
              height_svg="16"
              class_svg="bi bi-amd"
              path="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            />
         
            <Input
             className_items="input-items-login"
             className_item="input-item-login"
              label="Mot de passe"
              type="password"
              name="password"
              width_svg="16"
              height_svg="16"
              class_svg="bi bi-lock-fill"
              path="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"
            />
          </div>
          <Button type="submit" className="btn_login">
          Connexion
          </Button>
          <p className="login_question">
          Vous n’avez pas de compte ? <Link to="/register"> Créer un compte</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login
