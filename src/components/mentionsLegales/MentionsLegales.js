import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../styles/mentionsLegales_css/mentionsLegales.css";
function MentionsLegales() {
  return (
  <>
   
       <Header />
       <div className="mentions_legales">
      <h1>Mentions Légales</h1>
        <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en
            l'économie numérique, il est précisé aux utilisateurs du site <strong> CEREMONIAL-PATISSERIE </strong>
             l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        
        <h2>Édition du site</h2>
        <p>
            Le présent site, accessible à l’URL <a href="https://ceremonial-patisserie.netlify.app/" target="_blank">https://ceremonial-patisserie.netlify.app/</a>
            , est édité par :
        </p>
        <p>
            <strong>Berol DJOMO</strong>, résidant à Paris, de nationalité Camerounaise (Cameroun).
        </p>
        
        <h2>Hébergement</h2>
        <p>
            Le Site est hébergé par la société <strong>Netlify, Inc.</strong>, dont le siège social est situé à :
        </p>
        <p>
            <strong>2325 3rd Street, Suite 215, San Francisco, CA 94107, USA</strong>.
        </p>
        
        <h2>Directeur de publication</h2>
        <p>
            Le Directeur de la publication du Site est <strong>Flavie Tankeu</strong>.
        </p>
        
        <h2>Nous contacter</h2>
        <p>Par téléphone : <a href="tel:+237655810768">+237 655 810 768</a></p>
        <p>Par email : <a href="mailto:giresdjomo@yahoo.fr">giresdjomo@yahoo.fr</a></p>
      
        </div>
      <Footer />
   
    </>
  );
}

export default MentionsLegales;
