
import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import "../../styles/CakeDetail_css/CakeDetail.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SloganText from "../SloganText";
import MyFormular from "../MyFormular";
import icone_delete from "../../assets/images/delete.svg";

function CakeDetail() {
  const { id } = useParams();
  const [cake, setCake] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [showFormular, setShowFormular] = useState(false); // État pour la pop-up

  const navigate = useNavigate();

  const handleCommandeClick = () => {
    navigate(-1);  // -1 permet de revenir à la page précédente
  };



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
    
      <h1 className="title_detail_commande">Détails de ma commande</h1>
      <div className="detail_commande" key={cake.id}>
        <div className="left_detail_commande">
          <img src={`/assets/images/${cake.url_image}.png`} alt={cake.name} />
        </div>
        <div className="right_detail_commande">
          <div className="name_price">
            <span className="name_cake">{cake.name}</span>
            <span>{cake.price} fcfa</span>
          </div>

          <div className="description_cake">
            <p>{cake.description} </p>
          </div>

          <div  className="btn_add_remove">
            <section className="btn_qty">
              <div className="btn_add_remove_item" onClick={decrementQuantity} style={{ cursor: "pointer" }}>
                -
              </div>
              <span className="qte_cake">{quantity.toString().padStart(2, "0")}</span>
              <div className="btn_add_remove_item" onClick={incrementQuantity} style={{ cursor: "pointer" }}>
                +
              </div>
            </section>
            <section className="btn_price">
              <span>{totalPrice} fcfa</span>
            </section>
          </div>

          <div className="commande" >
          {quantity.toString().padStart(2, "0") === "00" ?(
    ""
  ): (
    <button type="button" onClick={handleCommanderClick}>Commander</button>
  )  }
          </div>

          <div className="cancel"  onClick={handleCommandeClick}>
            <span style={{ cursor: "pointer" }}><img src={icone_delete} alt="delete" /> </span>
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
