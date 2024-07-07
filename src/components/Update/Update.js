import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "../../styles/Update_css/Update.css";
import Slogan from "../Slogan";
import { Link } from "react-router-dom";

function Update() {
  return (
    <div className="update">
      <div className="update_slogan">
        <Slogan />
      </div>
      <div className="form_update">
        <form method="POST" action="/">
          <h1 className="title_update">Modifier mon profil</h1>
          <p className="subtitle_update">
            modifiez votre profil
          </p>
          <div className="input_pair_update">
            <Input
              className_items="input-items-update"
              className_item="input-item-update"
              label="Nom"
              type="text"
              name="nom"
              width_svg="16"
              height_svg="16"
              class_svg="bi bi-amd"
              path="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            />

            <Input
             className_items="input-items-update"
             className_item="input-item-update"
              label="Prenom"
              type="text"
              name="prenom"
              width_svg="16"
              height_svg="16"
              class_svg="bi bi-amd"
              path="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            />
          </div>
          <div className="input_pair_update">
            <Input
             className_items="input-items-update"
             className_item="input-item-update"
              label="Pseudo"
              type="text"
              name="pseudo"
              width_svg="16"
              height_svg="16"
              class_svg="bi bi-amd"
              path="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            />
            <Input
             className_items="input-items-update"
             className_item="input-item-update"
              label="Numéro de téléphone"
              type="number"
              name="numero_telephone"
              width_svg="16"
              height_svg="16"
              class_svg="bi bi-telephone-fill"
              path="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </div>
          <div className="input_pair_update">
            <Input
          className_items="input-items-update"
          className_item="input-item-update"
              label="Email"
              type="email"
              name="email"
              width_svg="16"
              height_svg="16"
              class_svg="bi bi-envelope-fill"
              path="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"
            />
            <Input
              className_items="input-items-update"
              className_item="input-item-update"
              label="Mot de passe"
              type="password"
              name="password"
              width_svg="16"
              height_svg="16"
              class_svg="bi bi-lock-fill"
              path="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"
            />
          </div>
          <Button type="submit" className="btn_update">
            Modifier
          </Button>
        
        </form>
      </div>
    </div>
  );
}

export default Update;
