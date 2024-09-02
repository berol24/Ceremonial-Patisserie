
import React, { useState, useEffect } from "react";
import "../styles/MyFormular.css";
import image_MTN from "../assets/images/image_MTN.png";
import image_orange from "../assets/images/image_orange.png";
import image_espece from "../assets/images/image_especes.png";

function MyFormular(props) {
  // États pour les champs du formulaire
  const [item_description_produit, setItem_description_produit] = useState("");
  const [item_preference, setItem_preference] = useState("");
  const [item_produit_ajout, setItem_produit_ajout] = useState("");
  const [item_nom_prenom_client, setItem_nom_prenom_client] = useState("");
  const [item_numero_telephone, setItem_numero_telephone] = useState("");
  const [item_lieu_livraison, setItem_lieu_livraison] = useState("");
  const [item_date_livraison, setItem_date_livraison] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false); // État pour gérer la pop-up de confirmation
  const [formVisible, setFormVisible] = useState(true); // État pour gérer la visibilité du formulaire

  const handleDateChange = (e) => {
    let item_date_livraison = e.target.value;
    item_date_livraison = item_date_livraison.replace("T", " ");
    setItem_date_livraison(item_date_livraison);
    console.log("Date sélectionnée:", item_date_livraison);
  };

  const [link, setLink] = useState("");

  const message = `Bonjour , Je souhaiterais passer une commande.
     Je voudrais un *${props.cake_name}* . Il m'en faudrait *${
    props.cake_quantite
  }* unités, 
     et le prix unitaire étant  à *${
       props.cake_prix_unitaire
     }* FCFA, ce qui fait un total de *${props.cake_prix_total}* FCFA.
      *${item_description_produit}*. 

  ${item_preference ? `Pour la décoration, j'aimerais que *${item_preference}*.` : ""} En plus ${
    props.cake_quantite === 1 ? "du gâteau" : "des gâteaux"
  }  , je voudrais également ajouter *${item_produit_ajout}*.

Merci de livrer la commande à l'adresse suivante *${item_lieu_livraison}* le *${item_date_livraison}*. Vous pouvez me contacter au *${item_numero_telephone}* si nécessaire. 
Pour le paiement,  ${
    selectedPayment === "Espèces"
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

  const handleCancelClick = () => {
    setShowConfirmation(true); // Affiche la pop-up de confirmation
  };

  const handleConfirmCancel = () => {
    setFormVisible(false); // Ferme le formulaire en le cachant
    setShowConfirmation(false); // Ferme la pop-up de confirmation
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false); // Ferme la pop-up sans annuler
  };

  return (
    <>
      {formVisible && (
        <div className="formular">
          <form action="#" onSubmit={handleSubmit}>
            <div className="form-container">
              {/* Le reste de votre formulaire */}
              <div className="form-group">
                <label htmlFor="nom_produit">Nom gâteau</label>
                <input
                  type="text"
                  id="nom_produit"
                  value={props.cake_name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantite">Quantité</label>
                <input
                  type="text"
                  name="quantite"
                  id="quantite"
                  value={props.cake_quantite}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="prix_unitaire">Prix unitaire</label>
                <input
                  type="text"
                  name="prix_unitaire"
                  id="prix_unitaire"
                  value={props.cake_prix_unitaire}
                />
              </div>
              <div className="form-group">
                <label htmlFor="prix_total">Prix Total</label>
                <input
                  type="text"
                  name="prix_total"
                  id="prix_total"
                  value={props.cake_prix_total}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description_produit">
                  Description du gâteau
                </label>
                <textarea
                  name="description_produit"
                  id="description_produit"
                  className="form-item"
                  value={item_description_produit}
                  onChange={(e) => setItem_description_produit(e.target.value)}
                  rows="8"
                  cols="5"
                  placeholder=" Décrivez nous comment vous souhaitez avoir votre gâteau . Par exemple : Je veux un gâteau de forme ronde et de couleur de crème rouge avec un peu de pincée de noisette au dessus , je ne veux pas trop de sucre , pas de vanille "
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="preference">Préférence</label>
                <textarea
                  name="preference"
                  id="preference"
                  className="form-item"
                  value={item_preference}
                  onChange={(e) => setItem_preference(e.target.value)}
                  rows="6"
                  cols="5"
                  placeholder="Donnez  nous une préferérence que vous souhaitez avoir sur votre gâteau . Par exemple : Je  veux que le nom à ecrire  sur le gâteau soit : Joyeux anniversaire CARES , avec une bougie"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="produit_ajout">Produit en ajout</label>
                <textarea
                  type="text"
                  name="produit_ajout"
                  id="produit_ajout"
                  className="form-item"
                  value={item_produit_ajout}
                  onChange={(e) => setItem_produit_ajout(e.target.value)}
                  placeholder="Souhaitez vous ajouter un produit ? Par exemple :  Du champagne , du vin , des bougies ,etc."
                 rows="5"
                  
                
                />
              </div>
              <div className="form-group">
                <label htmlFor="nom_prenom_client">
                  Nom et prénom du client
                </label>
                <input
                  type="text"
                  name="nom_prenom_client"
                  id="nom_prenom_client"
                  className="form-item"
                  value={item_nom_prenom_client}
                  onChange={(e) => setItem_nom_prenom_client(e.target.value)}
                  placeholder="Ceremonial Patisserie"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="numero_telephone">Téléphone</label>
                <input
                  type="text"
                  name="numero_telephone"
                  id="numero_telephone"
                  className="form-item"
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
                  className="form-item"
                  value={item_lieu_livraison}
                  onChange={(e) => setItem_lieu_livraison(e.target.value)}
                  placeholder="Ceremonial patisserie / Bonapriso/Dakar/Bonamoussadi /Ndogbong / etc... "
                  required
                />
              </div>
              <div className="form-group" id="date">
                <label htmlFor="date_livraison">
                  Date et heure de livraison
                </label>
                <input
                  type="datetime-local"
                  name="date_livraison"
                  id="date_livraison"
                  value={item_date_livraison}
                  onChange={handleDateChange}
                  placeholder="12/05/2025  15:30"
                  required

                />
              </div>
              <div className="form-group ">
                <label htmlFor="moyen_paiement">Moyen de paiement</label>
                <section>
                  <div>
                    <div className="image-container">
                      <input
                        type="radio"
                        name="moyen_paiement"
                        id="mtn"
                        value="MTN Mobile Money"
                        onChange={(e) => setSelectedPayment(e.target.value)}
                      />
                      <label htmlFor="mtn">
                        <img
                          src={image_MTN}
                          alt="MTN"
                          className="payment-image"
                        />
                        <span>MTN Mobile Money</span>
                      </label>
                    </div>
                    <div className="image-container">
                      <input
                        type="radio"
                        name="moyen_paiement"
                        id="orange"
                        value="Orange Money"
                        onChange={(e) => setSelectedPayment(e.target.value)}
                      />
                      <label htmlFor="orange">
                        <img
                          src={image_orange}
                          alt="Orange Money"
                          className="payment-image"
                        />
                        <span>Orange Money</span>
                      </label>
                    </div>
                    <div className="image-container">
                      <input
                        type="radio"
                        name="moyen_paiement"
                        id="especes"
                        value="Espèces"
                        onChange={(e) => setSelectedPayment(e.target.value)}
                      />
                      <label htmlFor="especes">
                        <img
                          src={image_espece}
                          alt="Espèces"
                          className="payment-image"
                        />
                        <span>Espèces</span>
                      </label>
                    </div>
                  </div>
                </section>
              </div>
              <div className="form-group validation">
                <button type="submit" className="btn-submit">
                  VALIDER
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleCancelClick}
                >
                  ANNULER
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Voulez-vous vraiment annuler ?</p>
          <button onClick={handleConfirmCancel}>Oui</button>
          <button onClick={handleCloseConfirmation}>Non</button>
        </div>
      )}
    </>
  );
}

export default MyFormular;
