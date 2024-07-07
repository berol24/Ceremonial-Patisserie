import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import image_pdg from "../assets/images/image_pdg.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";

import Data from "./Data";
function Home() {
  return (
    <div>
      <Header />
      <div className="accueil">
        <div className="bloc_left">
          <div className="message_accueil item1">
            <p>Bienvenue sur le Site de Patisserie Ceremonial</p>
          </div>
          <div className="message_accueil item2">
            <p>
              Notre mission vous faire sourire avec nos Pâtisseries. Un plaisir
              sucré à chaque bouchée, notre pâtisserie est une symphonie de
              saveurs.
            </p>
            <div className="button_start">
             <Link><button>  Commencer</button></Link> 
            </div>
          </div>
        </div>
        <div className="bloc_right">
          <img src={image_pdg} className="image_pdg" alt="image_pdg" />
        </div>
      </div>
    <Data/>
      <Footer />
    </div>
  );
}

export default Home;
