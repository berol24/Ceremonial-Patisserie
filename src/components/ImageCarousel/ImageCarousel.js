
import React, { useState } from 'react';
import  "../../styles/ImageCarousel_css/ImageCarousel.css";
import realisation1 from "../../assets/images/realisation1.png";
import realisation2 from "../../assets/images/realisation2.png";
import realisation3 from "../../assets/images/realisation3.png";
import realisation4 from "../../assets/images/realisation4.png";
import realisation5 from "../../assets/images/realisation5.png";
import realisation6 from "../../assets/images/realisation6.png";
import realisation7 from "../../assets/images/realisation7.png";
import realisation8 from "../../assets/images/realisation8.png";
import realisation9 from "../../assets/images/realisation9.png";
import realisation10 from "../../assets/images/realisation10.png";
const images = [
    realisation1,
    realisation2,
    realisation3,
    realisation4, 
    realisation5,
    realisation6,
    realisation7,
    realisation8,
    realisation9,
    realisation10
 
];


const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < images.length - 3) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Revenir au début si à la fin
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - 3); // Aller à la fin si au début
        }
    };

    return (
        <div className="carousel-container">
            <button onClick={prevSlide} className="carousel-button prev-button">
                &#8249;
            </button>
            <div className="carousel-images">
                {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <div className="image-container" key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="carousel-button next-button">
                &#8250;
            </button>
        </div>
    );
};

export default ImageCarousel;
