// ImageCarousel.js
import React, { useState } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = ({ images, altText }: { images: string[], altText: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className={styles.imageContainer}>
        <Image
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={altText}
          width={1200}
          height={1200}
          className={styles.image}
        />
        <div className={styles.btns}>
          <button className={styles.prevButton} onClick={prevImage}>&lt;</button>
          <button className={styles.nextButton} onClick={nextImage}>&gt;</button>
        </div>
      </div>
    );
  };

export default ImageCarousel;

  