
import React, { useState } from 'react';
import  "../../styles/ImageCarousel_css/ImageCarousel.css";


const images = [];


for (let i = 40; i >= 1; i--) {
    images.push(require(`../../assets/images/mariage${i}.png`));
}



const ImageCarouselAnniversaire = () => {
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

export default ImageCarouselAnniversaire;
