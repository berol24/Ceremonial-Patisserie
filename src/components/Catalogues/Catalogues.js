import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../styles/Data.css";
import icon_search from "../../assets/icons/icon_search.svg";
import icon_filter from "../../assets/icons/icon_filter.svg";
import "../../styles/Catalogues_css/Catalogues.css";
import { Link } from "react-router-dom";
import Slogan_text from "../Slogan_text";

function Catalogues() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
   

    const isNumeric = (str) => {
      return /^\d+$/.test(str);
    };

    const filter = data.filter((item) => {
      if (isNumeric(name)) {
        return item.price.toString().includes(name);
      } else {
        return item.name.toLowerCase().includes(name.toLowerCase());
      }
    })

    setFilteredData(filter);
    console.log(`The name you entered was: ${name}`);
  };

  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); 
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="catalogue_title">
        <h3>MON CATALOGUE </h3>
        <button style={{ background: "none", border: "none" }}>
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
          />
          <button type="submit">
            <img src={icon_search} alt="icon_search" />
          </button>
        </form>
      </div>

      <div className="catalogue_accueil">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Link to={`/cake/${item.id}`} key={item.id}>
              <div className="cake_detail">
                <div className="image_item">
                  <img
                    src={`/assets/images/${item.url_image}.png`}
                    alt={item.name}
                  />
                </div>
                <h2 className="cake_name">{item.name}</h2>
                <p className="cake_price">{item.price} fcfa</p>
              </div>
            </Link>
          ))
        ) : (
          <div>Pas de résultat</div>
        )}
        <Slogan_text/>
      </div>
      <Footer />
    </div>
  );
}

export default Catalogues;
