import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SloganText from "../SloganText";
import "../../styles/Contacts_css/Contacts.css";
import mail from "../../assets/icons/mail.png";
import map from "../../assets/icons/map.png";
import telephone from "../../assets/icons/telephone.png";

import image_MTN from "../../assets/images/image_MTN.png";
import image_orange from "../../assets/images/image_orange.png";

function Contacts() {
  return (
    <div>
      <Header />
      <div className="contact">
        <div className="contact-contain">
          <div className="contactez-nous">
            <h1 className="contact-title">Contactez-nous</h1>
            <div className="contact-telephone">
              <div>
                {" "}
                <img src={telephone} alt="icone-telephone" />{" "}
              </div>
              <span>0123456789</span>
            </div>
            <div className="contact-email">
              <div>
                {" "}
                <img src={mail} alt="icone-mail" />{" "}
              </div>
              <span>contact@ceremonial.com</span>
            </div>
            <div className="contact-map">
              <div>
                {" "}
                <img src={map} alt="icone-map" />{" "}
              </div>
              <span>Carrefour Carnaval Bilongue</span>
            </div>
          </div>
          <div className="moyen-paiement">
            <h1 className="paiement-title">Moyen de paiement</h1>
            <div className="paiement">
              <div className="mtn">
                <div>
                  <img src={image_MTN} alt="icone-telephone" />
                </div>
                <span>67523456789</span>
              </div>
              <div className="orange">
                <div>
                  <img src={image_orange} alt="icone-telephone" />
                </div>
                <span>6563456789</span>
              </div>
            </div>
          </div>
        </div>

        <div>map</div>
      </div>

      <SloganText />
      <Footer />
    </div>
  );
}

export default Contacts;
