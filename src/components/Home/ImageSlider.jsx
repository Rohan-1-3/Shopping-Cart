import React, { useEffect, useState } from 'react';
import styles from "../../css/HomePage.module.css";
import { imagesBig, imagesSmall } from "../../data/ImagesData";
import { useViewportWidth } from '../../customHooks/viewportWidth';

function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [images, setImages] = useState([]);
    const viewportWidth = useViewportWidth();

    useEffect(()=>{
        viewportWidth < 550 ? setImages(imagesSmall) : setImages(imagesBig);
    },[viewportWidth])

      // here it changes the image  every few seconds and when it reaches the last image returns to first image
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 3000);

        return () => {
          clearInterval(intervalId);
        };
      }, [images.length]);

    return (
        <React.Fragment>
            <div className={styles.sliderContainer}>
                <button onClick={prevSlide} className={styles.prevButton}>
                &#10094;
                </button>
                {images.map((image, index) => (
                <div
                    key={index}
                    className={index === currentSlide ? `${styles.slide} ${styles.active}` : styles.active}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
                ))}
                <button onClick={nextSlide} className={styles.nextButton}>
                &#10095;
                </button>
            </div>
        </React.Fragment>
    );
}

export default ImageSlider;