import React, { useEffect, useState } from "react";
import "../styles/Data.css";
import { Link } from "react-router-dom";
import SloganText from "../components/SloganText";

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  }, []);

  return (
    <>
      <div className="catalogue_accueil">
        {data &&
          data.slice(0, 6).map((item) => {
            return (
              <Link to={`/cake/${item.id}`} key={item.id}>
                {" "}
                <div className="cake_detail">
                  <div className="image_item">
                    <img
                      src={`/assets/images/${item.url_image}.png`}
                      alt={item.name}
                    />
                  </div>
                  <h2 className="cake_name">{item.name}</h2>
                  <p className="cake_price">{item.price} fcfa</p>
                </div>{" "}
              </Link>
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
