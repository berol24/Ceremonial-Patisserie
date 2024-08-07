import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SloganText from "../SloganText";

function CakeDetail() {
  const { id } = useParams();
  const [cake, setCake] = useState(null);

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

  return (
    <div>
      <Header />
      <div className="cake_detail" key={cake.id}>
        <div className="image_item">
          <img
            src={`/assets/images/${cake.url_image}.png`}
            alt={cake.name}
          />
        </div>
        <h2 className="cake_name">{cake.name}</h2>
        <p className="cake_price">{cake.price} fcfa</p>
      </div>
      <SloganText/>
      <Footer />
    </div>
  );
}

export default CakeDetail;
