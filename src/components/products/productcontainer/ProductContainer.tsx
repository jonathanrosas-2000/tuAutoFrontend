"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
import ProductCard from "../pricecard/PriceCard";
import Summary from "../summary/Summary";
import Features from "../features/Features";
import DescriptonSummary from "../description/DescriptonSummary";
import ProductByYear from "../productByYear/ProductByYear";
import ProductByCity from "../productByCity/ProductByCity";
import Image from "next/image";
import { SeoMeta, SimilarCars } from "@/components";
import { carType } from "@/types/typing";
import SummaryHighlights from "../summaryhighlights/SummaryHighlights";
import ImageCarrousel from "../../carrousel/ImageCarousel";

const ProductContainer = ({ product }: { product: carType }) => {
  const { name, year, description, images, mileage, extra, price, highlights } =
    product;
  const {
    title,
    description: metaDescription,
    keywords,
    subject,
    productSchema,
  } = product.seoDetails;

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
    <>
      <SeoMeta
        title={title}
        description={metaDescription}
        keywords={keywords}
        subject={subject}
        productSchema={productSchema}
      />
      <div className={styles.container}>
        <div className={styles.car}>
          {/* <div className={styles.imageContainer}> */}
          <ImageCarrousel images={images} altText="Algo" />
          {/* {images.length > 0 ? (
              <div className={styles.carousel}>
                <Image
                  key={images[currentIndex]}
                  src={images[currentIndex]}
                  alt={`Carro seminuevo ${name}`}
                  width={1200}
                  height={1200}
                  className={styles.image}
                />
                <button className={styles.prevButton} onClick={prevImage}>Anterior</button>
                <button className={styles.nextButton} onClick={nextImage}>Siguiente</button>
              </div>
            ) : (
              <h2>No image</h2>
            )} */}
          {/* </div> */}
          <Summary
            year={year}
            version={"1"}
            milage={String(mileage)}
            price={price}
            location={"CDMX"}
          />
          {highlights && <SummaryHighlights highlights={highlights} />}
          {extra.length > 0 && <Features features={extra} />}
          {!!description && <DescriptonSummary description={description} />}
          <SimilarCars />
          <ProductByYear name={name} />
          <ProductByCity name={name} />
        </div>
        <ProductCard product={product} />
      </div>
    </>
  );
};

export default ProductContainer;
