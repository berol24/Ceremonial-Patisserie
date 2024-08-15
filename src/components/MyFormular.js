import React, { useState } from "react";

function MyFormular() {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
     let link = "https://wa.me/23756450734?text="+ item; //mettre le texte dans la messagerie  
    // let link = "https://api.whatsapp.com/send?text="+ item;
    // window.location.href  = link;
    window.open(link, "_blank");
  };



  return (
    <div>
    <a href="http://localhost:3000/logo_ceremonial.png" download>Download</a>

      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label for="">Nom produit</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div>
          <label for="">Quantité</label>
          <input type="number" name="quantite" id="quantite" value="10" />
        </div>
        <div>
          <label for="">Prix</label>
          <input type="number" name="prix" id="prix" value="5000" />
        </div>
        <div>
          <label for="">Prix Total</label>
          <input type="number" name="prix_total" id="prix_total" />
        </div>
        <div>
          <label for="">Nom client</label>
          <input
            type="text"
            name="nom_client"
            id="nom_client"
            value="azazazaa"
          />
        </div>
        <div>
          <label for="">Numéro de téléphone</label>
          <input
            type="text"
            name="numero_telephone"
            id="numero_telephone"
            value="742575757"
          />
        </div>

        <div>
          <label for="">Lieu de livraison : </label>
          <input
            type="checkbox"
            id="ceremonial"
            name="ceremonial"
            value="ceremonial"
          />
          <label for="">Cérémonial</label>
          <input type="checkbox" id="autre" name="autre" value="autre" />
          <label for="">Autres</label>
          <input
            type="text"
            id="autre_lieu"
            name="autre_lieu"
            value="ertyfdsqdf"
          />
        </div>
        <div>
          <label for="">Description du produit</label>
          <input
            type="text"
            name="description_produit"
            id="description_produit"
            value="azazazaa"
          />
        </div>
        <div>
          <label for="">Date de livraison</label>
          <input
            type="date"
            value=""
            name="date_livraison"
            id="date_livraison"
            value="10-25-2002"
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>

      <br />
      <div class="myText"></div>
    </div>
  );
}

export default MyFormular;
