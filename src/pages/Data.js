import React, { useEffect, useState } from "react";
import "../styles/Data.css";
import { Link } from "react-router-dom";
import SloganText from "../components/SloganText";
import heart_bold from "../assets/images/heart-bold.svg";
import heart_fill from "../assets/images/heart-fill.svg";

function Data() {
  const [shuffledData, setShuffledData] = useState([]); // Nouvel état pour les données mélangées
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data) => {
        setShuffledData(shuffleArray(data)); // Mélange une seule fois
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  }, []);

  const toggleFavorite = (item, e) => {
    e.preventDefault();  // Empêche le comportement par défaut
    e.stopPropagation(); // Empêche la propagation de l'événement

    const isFavorite = favorites.some((fav) => fav.id === item.id);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== item.id)
      : [...favorites, item];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Fonction pour mélanger un tableau (appelée une seule fois)
  const shuffleArray = (array) => {
    const shuffled = [...array]; // Crée une copie pour ne pas muter l'original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <>
      <div className="catalogue_accueil">
        {shuffledData.slice(0, 6).map((item) => {
          const isFavorite = favorites.some((fav) => fav.id === item.id);
          return (
            <div className="catalogue_item" key={item.id}>
              <div className="cake_detail">
                <div
                  className="icon_favori"
                  onClick={(e) => toggleFavorite(item, e)}
                >
                  <img
                    src={isFavorite ? heart_fill : heart_bold}
                    alt="btn_favori"
                  />
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
          );
        })}

        <div className="mes_catalogues">
          <Link to="/catalogues">Nos Catalogues</Link>
        </div>
      </div>
      <SloganText />
    </>
  );
}

export default Data;
