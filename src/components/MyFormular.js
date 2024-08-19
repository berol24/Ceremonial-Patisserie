import React, { useState, useEffect } from "react";
import "../styles/MyFormular.css";
import image_MTN from "../assets/images/image_MTN.png";
import image_orange from "../assets/images/image_orange.png";
import image_espece from "../assets/images/image_especes.png";

function MyFormular() {
  const [item_nom_produit, setItem_nom_produit] = useState("");
  const [item_quantite, setItem_quantite] = useState("");
  const [item_prix_unitaire, setItem_prix_unitaire] = useState("");
 const item_prix_total = item_prix_unitaire * item_quantite ;
  const [item_description_produit, setItem_description_produit] = useState("");
  const [item_preference, setItem_preference] = useState("");
  const [item_produit_ajout, setItem_produit_ajout] = useState("");
  const [item_nom_prenom_client, setItem_nom_prenom_client] = useState("");
  const [item_numero_telephone, setItem_numero_telephone] = useState("");
  const [item_lieu_livraison, setItem_lieu_livraison] = useState("");
  const [item_date_livraison, setItem_date_livraison] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleDateChange = (e) => {
    let item_date_livraison = e.target.value;
    item_date_livraison = item_date_livraison.replace('T', ' ');
    setItem_date_livraison(item_date_livraison);
    console.log('Date sélectionnée:', item_date_livraison);
  };



  const [link, setLink] = useState("");

  const message = `Bonjour , Je souhaiterais passer une commande.
     Je voudrais un *${item_nom_produit}* . Il m'en faudrait *${item_quantite}* unités, 
     et le prix unitaire étant  à *${item_prix_unitaire}* FCFA, ce qui fait un total de *${item_prix_total}* FCFA.
      *${item_description_produit}*. 

Pour la décoration, j'aimerais que *${item_preference}*. En plus ${
    item_quantite == 1 ? "du gâteau" : "des gâteaux"
  }  , je voudrais également ajouter *${item_produit_ajout}*.

Merci de livrer la commande à *${item_lieu_livraison}* le *${item_date_livraison}*. Vous pouvez me contacter au *${item_numero_telephone}*si nécessaire. 
Pour le paiement,  ${
    selectedPayment == "Espèces"
      ? "je préfère payer en espèces."
      : "je préfère utiliser " + selectedPayment
  }.

Cordialement,

*${item_nom_prenom_client}*`;

  useEffect(() => {
 
    const updateLink = () => {
      if (window.innerWidth <= 768) {
        setLink("https://wa.me/23756265982?text=" + message);
      } else {
        setLink("https://api.whatsapp.com/send?text=" + message);
      }
    };


    updateLink();


    window.addEventListener("resize", updateLink);

  
    return () => {
      window.removeEventListener("resize", updateLink);
    };
  }, [message]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div className="formular">
     
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="nom_produit">Nom gâteau</label>
            <input
              type="text"
              id="nom_produit"
              value={item_nom_produit}
              onChange={(e) => setItem_nom_produit(e.target.value)}
              placeholder="Gâteau Vanille"
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantite">Quantité</label>
            <input
              type="number"
              name="quantite"
              id="quantite"
              value={item_quantite}
              onChange={(e) => setItem_quantite(e.target.value)}
              placeholder="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="prix_unitaire">Prix unitaire</label>
            <input
              type="number"
              name="prix_unitaire"
              id="prix_unitaire"
              value={item_prix_unitaire}
              onChange={(e) => setItem_prix_unitaire(e.target.value)}
              placeholder="5000"
            />
          </div>
          <div className="form-group">
            <label htmlFor="prix_total">Prix Total</label>
            <input
              type="number"
              name="prix_total"
              id="prix_total"
              value={item_prix_total}
              
             
            />
          </div>
          <div className="form-group">
            <label htmlFor="description_produit">Description du gâteau</label>
            <textarea
              name="description_produit"
              id="description_produit"
              value={item_description_produit}
              onChange={(e) => setItem_description_produit(e.target.value)}
              rows="5"
              cols="5"
              placeholder="Je veux un gâteau de forme ronde et de couleur de crème rouge avec un peu de pincée de noisette au dessus , je ne veux pas trop de sucre , pas de vanille "
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="preference">Préférence</label>
            <textarea
              name="preference"
              id="preference"
              value={item_preference}
              onChange={(e) => setItem_preference(e.target.value)}
              rows="5"
              cols="5"
              placeholder="Par exemple : Je  veux que le nom à ecrire  sur le gâteau soit : Joyeux anniversaire CARES , avec une bougie"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="produit_ajout">Produit en ajout </label>
            <input
              type="text"
              name="produit_ajout"
              id="produit_ajout"
              value={item_produit_ajout}
              onChange={(e) => setItem_produit_ajout(e.target.value)}
              placeholder="Du champagne , du vin , des bougies ,etc."
            />
          </div>
          <div className="form-group">
            <label htmlFor="nom_prenom_client">Nom et prénom du client</label>
            <input
              type="text"
              name="nom_prenom_client"
              id="nom_prenom_client"
              value={item_nom_prenom_client}
              onChange={(e) => setItem_nom_prenom_client(e.target.value)}
              placeholder="Ceremonial Patisserie"
            />
          </div>
          <div className="form-group">
            <label htmlFor="numero_telephone">Téléphone</label>
            <input
              type="text"
              name="numero_telephone"
              id="numero_telephone"
              value={item_numero_telephone}
              onChange={(e) => setItem_numero_telephone(e.target.value)}
              placeholder="655810768"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lieu_livraison">Lieu de livraison</label>
            <input
              type="text"
              name="lieu_livraison"
              id="lieu_livraison"
              value={item_lieu_livraison}
              onChange={(e) => setItem_lieu_livraison(e.target.value)}
              placeholder="Ceremonial patisserie / Bonapriso/Dakar/Bonamoussadi /Ndogbong / etc... "
            />
          </div>
          <div className="form-group" id="date">
            <label htmlFor="date_livraison">Date et heure de livraison</label>
            <input
              type="datetime-local"
              name="date_livraison"
              id="date_livraison"
              value={item_date_livraison}
              onChange={handleDateChange}
              placeholder="12/05/2025  15:30"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="moyen_paiement">Moyen de paiement</label>
            <section>
              <div>
                <div className="image_paiement">
                  <img src={image_MTN} />
                </div>
                <input
                  type="radio"
                  name="mtn"
                  id="mtn"
                  value="MTN-MOBILE-MONEY"
                  checked={selectedPayment === "MTN-MOBILE-MONEY"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
              </div>
              <div>
                <div className="image_paiement">
                  {" "}
                  <img src={image_orange} />
                </div>
                <input
                  type="radio"
                  name="orange"
                  id="orange"
                  value="ORANGE-MONEY"
                  checked={selectedPayment === "ORANGE-MONEY"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
              </div>
              <div>
                <div className="image_paiement">
                  <img src={image_espece} />
                </div>
                <input
                  type="radio"
                  name="espece"
                  id="espece"
                  value="Espèces"
                  checked={selectedPayment === "Espèces"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
              </div>
            </section>
          </div>
        </div>

        <div className="btn">
          <button type="button">ANNULER</button>
          <button type="submit">ENVOYER</button>
        </div>
      </form>
    </div>
  );
}

export default MyFormular;
