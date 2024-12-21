"use client"
import React from "react";
import styles from "./styles.module.css";
import ProductCard from "../pricecard/PriceCard";
import Summary from "../summary/Summary";
import Features from "../features/Features";
import DescriptonSummary from "../description/DescriptonSummary";
import ProductByYear from "../productByYear/ProductByYear";
import ProductByCity from "../productByCity/ProductByCity";
import { SeoMeta, SimilarCars } from "@/components";
import { carType } from "@/types/typing";
import SummaryHighlights from "../summaryhighlights/SummaryHighlights";
import ImageGallery from "react-image-gallery";

const ProductContainer = ({ product }: { product: carType }) => {
  const { name, year, description, images, mileage, extra, price, highlights } = product;
  const {
    title,
    description: metaDescription,
    keywords,
    subject,
    productSchema,
  } = product.seoDetails;

  const imagesShow = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

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
          {images.length > 0 ? (
            <ImageGallery items={imagesShow} showPlayButton={false} additionalClass={styles.borderRadius8} />
          ) : (
            <h2>No image</h2>
          )}
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
