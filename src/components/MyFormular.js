import React, { useState, useEffect } from "react";

function MyFormular() {
  const [item, setItem] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    // Fonction pour mettre à jour le lien en fonction de la largeur de l'écran
    const updateLink = () => {
      if (window.innerWidth <= 768) {
        setLink("https://wa.me/23756265982?text=" + item);
      } else {
        setLink("https://api.whatsapp.com/send?text=" + item);
      }
    };

    // Appeler updateLink une première fois lors du chargement
    updateLink();

    // Écouter les changements de taille de l'écran
    window.addEventListener("resize", updateLink);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("resize", updateLink);
    };
  }, [item]); // Re-run effect when item changes

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    window.open(link, "_blank");
  };

  return (
    <div>
      <a href="https://ceremonial-patisserie.netlify.app/logo_ceremonial.png" download>Download</a>

      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom_produit">Nom produit</label>
          <input
            type="text"
            id="nom_produit"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantite">Quantité</label>
          <input type="number" name="quantite" id="quantite" defaultValue="10" />
        </div>
        <div>
          <label htmlFor="prix">Prix</label>
          <input type="number" name="prix" id="prix" defaultValue="5000" />
        </div>
        <div>
          <label htmlFor="prix_total">Prix Total</label>
          <input type="number" name="prix_total" id="prix_total" />
        </div>
        <div>
          <label htmlFor="nom_client">Nom client</label>
          <input
            type="text"
            name="nom_client"
            id="nom_client"
            defaultValue="azazazaa"
          />
        </div>
        <div>
          <label htmlFor="numero_telephone">Numéro de téléphone</label>
          <input
            type="text"
            name="numero_telephone"
            id="numero_telephone"
            defaultValue="742575757"
          />
        </div>

        <div>
          <label htmlFor="lieu_livraison">Lieu de livraison : </label>
          <input
            type="checkbox"
            id="ceremonial"
            name="ceremonial"
            value="ceremonial"
          />
          <label htmlFor="ceremonial">Cérémonial</label>
          <input type="checkbox" id="autre" name="autre" value="autre" />
          <label htmlFor="autre">Autres</label>
          <input
            type="text"
            id="autre_lieu"
            name="autre_lieu"
            defaultValue="ertyfdsqdf"
          />
        </div>
        <div>
          <label htmlFor="description_produit">Description du produit</label>
          <input
            type="text"
            name="description_produit"
            id="description_produit"
            defaultValue="azazazaa"
          />
        </div>
        <div>
          <label htmlFor="date_livraison">Date de livraison</label>
          <input
            type="date"
            name="date_livraison"
            id="date_livraison"
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>

      <br />
      <div className="myText"></div>
    </div>
  );
}

export default MyFormular;
