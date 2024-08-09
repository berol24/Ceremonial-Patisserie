import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../styles/Realisations_css/Realisations.css";
import realisation1 from "../../assets/images/realisation1.png";
import realisation2 from "../../assets/images/realisation2.png";
import realisation3 from "../../assets/images/realisation3.png";
import realisation4 from "../../assets/images/realisation4.png";
import SloganText from "../../components/SloganText";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
function Realisations() {
  return (
    <div>
      <Header />
      <div className="title_realisation">
        <h1>NOS REALISATIONS</h1>
      </div>

      <div className="subtitle_realisation">
        <p>
          “Bienvenue dans notre section dédiée aux réalisations de notre
          talentueuse équipe . Préparez vous à être transporté dans un univers
          de saveurs exquises et de créations visuellement époustouflantes.”
        </p>
      </div>

      <div className="container">
        <div className="image_left">
          <div className="img_real">
            <img src={realisation1} alt="image_realisation" />
          </div>
          <div className="img_real">
            <img src={realisation2} alt="image_realisation" />
          </div>
        </div>

        <div className="text_center">
          Sur le terrain, nous sommes comme des artistes dans leur atelier,
          chaque geste est précis, chaque ingrédient est choisi avec soin pour
          créer des œuvres d'art comestibles. Que ce soit en dressant des
          gâteaux élaborés, en décorant des desserts délicats ou en
          confectionnant des pâtisseries artisanales, notre équipe met tout son
          cœur et son savoir-faire dans chaque création.
        </div>

        <div className="image_right">
          <div className="img_real">
            <img src={realisation3} alt="image_realisation" />
          </div>
          <div className="img_real">
            <img src={realisation4} alt="image_realisation" />
          </div>
        </div>
      </div>

      {/* //////////////////////// Mariage */}

      <div className="title_mariage">
        <h1>MARIAGES</h1>
      </div>

      <div className="subtitle_mariage">
        <p>
          Chaque gâteau de mariage que nous créons est une œuvre d'art
          personnalisée, reflétant votre style, votre personnalité et l'essence
          même de votre amour.
        </p>
      </div>

      <ImageCarousel/>

      {/* //////////////////////// anniversaire */}
      <div className="title_anniversaire">
        <h1>ANNIVERSAIRES</h1>
      </div>

      <div className="subtitle_anniversaire">
        <p>
          Que ce soit pour célébrer un premier anniversaire ou un jalon
          important, chez CEREMONIAL , nous transformons chaque événement en une
          fête inoubliable avec nos créations sucrées sensationnelles.
        </p>
      </div>


      <ImageCarousel/>
      {/* //////////////////////// ceremonial en action*/}
      <div className="title_ceremonial_en_action">
        <h1>CEREMONIAL EN ACTION</h1>
      </div>

      <div className="subtitle_ceremonial_en_action">
        <p>
          Préparez-vous à être émerveillé par la précision de leurs gestes, la
          créativité de leurs designs et l'amour qu'ils mettent dans chaque
          détail.
        </p>
      </div>
  
      <div style={{ padding: "15px 30px" , display: 'flex' ,justifyContent:'center'}}>
        <iframe
          width="80%"
          height="500"
          src="https://www.youtube.com/embed/0GuUHuJz2j0?si=hzfdRAIIQZF_QnHN&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <SloganText />
      <Footer />
    </div>
  );
}

export default Realisations;
