import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "../../styles/Register_css/Register.css";
import Slogan from "../Slogan";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="register_slogan">
        <Slogan />
      </div>
      <div className="form_register">
        
        <form method="POST" action="/">
             <h1 className="title_register">Inscrivez-vous</h1>
             <p className="subtitle_register">Inscrivez-vous pour créer  votre espace</p>
          <div className="input_pair">
            <Input label="Nom" type="text" name="nom" />
            <Input label="Prenom" type="text" name="prenom" />
          </div>
          <div className="input_pair">
            <Input label="Pseudo" type="text" name="pseudo" />
            <Input
              label="Numéro de téléphone"
              type="number"
              name="numero_telephone"
            />
          </div>
          <div className="input_pair">
            <Input label="Email" type="email" name="email" />
            <Input label="Mot de passe" type="password" name="password" />
          </div>
          <Button type="submit" className="btn_register">Inscription</Button>
        
        <p className="register_question">Avez vous déjà un compte ? <Link to="/login">Connectez-vous</Link> </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
