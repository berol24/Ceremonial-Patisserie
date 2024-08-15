import React, { useState, useEffect } from "react";
import "../../styles/Favoris_css/Favoris.css";
import { Link } from "react-router-dom";
import SloganText from "../../components/SloganText";
import heart_fill from "../../assets/images/heart-fill.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Favoris() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    console.log(savedFavorites);
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="empty_favorites">
        <h2>Vous n'avez pas encore de favoris.</h2>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="favoris_page">
        <h1>Liste de Favoris</h1>
        <div className="catalogue_accueil">
          {favorites.map((item) => (
            <div className="catalogue_item" key={item.id}>
              <div className="cake_detail">
                <div className="icon_favori">
                  <img src={heart_fill} alt="Favori" />
                </div>
                <Link to={`/cake/${item.id}`}>
                  <div className="image_item">
                    <img
                      src={`/assets/images/${item.url_image}.png`}
                      alt={item.name}
                    />
                  </div>
                  <h2 className="cake_name">{item.name}</h2>
                  <p className="cake_price">{item.price} fcfa</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SloganText />
      <Footer />
    </>
  );
}

export default Favoris;
