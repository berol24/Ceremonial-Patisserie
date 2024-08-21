


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/CakeDetail_css/CakeDetail.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SloganText from "../SloganText";
import MyFormular from "../MyFormular"; // Import du formulaire

function CakeDetail() {
  const { id } = useParams();
  const [cake, setCake] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [showFormular, setShowFormular] = useState(false); // État pour la pop-up

  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedCake = data.find((item) => item.id.toString() === id);
        setCake(selectedCake);
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  }, [id]);

  if (!cake) {
    return <div>Loading...</div>;
  }

  const totalPrice = quantity * cake.price;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(0, quantity - 1));

  const handleCommanderClick = () => {
    setShowFormular(true); // Affiche le formulaire en pop-up
  };

  const closeFormular = () => {
    setShowFormular(false); // Ferme le formulaire en pop-up
  };

  return (
    <div>
      <Header />

      <h1>Détails de ma commande</h1>
      <div className="detail_commande" key={cake.id}>
        <div className="left_detail_commande">
          <img src={`/assets/images/${cake.url_image}.png`} alt={cake.name} />
        </div>
        <div className="right_detail_commande">
          <div>
            <span>{cake.name}</span>
            <span>{cake.price} fcfa</span>
          </div>

          <div>
            <p>{cake.description}</p>
          </div>

          <div>
            <section>
              <span onClick={decrementQuantity} style={{ cursor: "pointer" }}>
                -
              </span>
              <span className="qte_cake">{quantity.toString().padStart(2, "0")}</span>
              <span onClick={incrementQuantity} style={{ cursor: "pointer" }}>
                +
              </span>
            </section>
            <section>
              <span>{totalPrice} fcfa</span>
            </section>
          </div>

          <div>
            <button type="button" onClick={handleCommanderClick}>
              Commander
            </button>
          </div>

          <div>
            <span style={{ cursor: "pointer" }}>x</span>
          </div>
        </div>
      </div>

      <SloganText />
      <Footer />

      {showFormular && (
        <div className="popup">
          <div className="popup-content">
            <section><span className="close" onClick={closeFormular}>
              &times;
            </span></section>
            <MyFormular cake_name={cake.name} cake_quantite ={quantity.toString().padStart(2, "0")} cake_prix_unitaire={cake.price} cake_prix_total={totalPrice}   />
          </div>
        </div>
      )}
    </div>
  );
}

export default CakeDetail;
