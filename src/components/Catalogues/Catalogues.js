import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../styles/Data.css";
import icon_search from "../../assets/icons/icon_search.svg";
import icon_filter from "../../assets/icons/icon_filter.svg";
import "../../styles/Catalogues_css/Catalogues.css";
import { Link } from "react-router-dom";
import SloganText from "../SloganText";
import heart_bold from "../../assets/images/heart-bold.svg";
import heart_fill from "../../assets/images/heart-fill.svg";

function Catalogues() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Fonction pour mélanger un tableau (appelée une seule fois lors du chargement des données)
  const shuffleArray = (array) => {
    const shuffled = [...array]; // Crée une copie pour ne pas muter l'original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Récupération des données depuis le fichier JSON
  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Données récupérées :", data); // Vérifiez que les données sont bien récupérées
        setData(data);
        const shuffledData = shuffleArray(data); // Mélanger les données une seule fois
        setFilteredData(shuffledData); // Appliquer le mélange initial aux données filtrées
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données JSON :", error);
      });
  }, []);

  // Fonction pour filtrer les résultats selon l'entrée utilisateur
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!data) return; // Si les données ne sont pas encore chargées, ne rien faire

    const isNumeric = (str) => /^\d+$/.test(str);

    const filter = data.filter((item) => {
      if (isNumeric(name)) {
        return item.price.toString().includes(name);
      } else {
        return (
          item.name.toLowerCase().includes(name.toLowerCase()) ||
          item.form.toLowerCase().includes(name.toLowerCase())
        );
      }
    });

    setFilteredData(filter); // Met à jour l'état avec les résultats filtrés
    console.log(`Nom recherché : ${name}`);
  };

  // Fonction pour gérer la touche "Enter" pour déclencher la recherche
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event); // Lancer la recherche avec "Enter"
    }
  };

  // Gestion des favoris
  const toggleFavorite = (item, e) => {
    e.preventDefault();
    e.stopPropagation();

    const isFavorite = favorites.some((fav) => fav.id === item.id);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== item.id)
      : [...favorites, item];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <Header />
      <div className="catalogue_title">
        <h3>MON CATALOGUE</h3>
        <button style={{ background: "none", border: "none", display: "none" }}>
          <img src={icon_filter} alt="icon_filter" />
        </button>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input_search"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="submit">
            <img src={icon_search} alt="icon_search" />
          </button>
        </form>
      </div>
      <div className="catalogue_accueil">
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
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
                    <p className="cake_price">{item.price} Fcfa</p>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div>Pas de résultat</div>
        )}
      </div>
      <SloganText />
      <Footer />
    </div>
  );
}

export default Catalogues;
