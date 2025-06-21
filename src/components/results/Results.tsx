"use client";
import React from "react";
import { Filter, GeneralBanner, ProductCard } from "@/components";
import styles from "./styles.module.css";
import { carType } from "@/types/typing";

type ResultsType = {
  products: carType[];
  years: any;
  brands: any;
  selectedYears: number[];
  selectedBrands: string[];
  selectedMileage: [number, number];
  setSelectedYears: (value: number[]) => void;
  setSelectedBrands: (value: string[]) => void;
  setSelectedMileage: (value: [number, number]) => void;
};

const Results = ({
  products,
  years,
  brands,
  selectedYears,
  setSelectedYears,
  selectedBrands,
  setSelectedBrands,
  selectedMileage,
  setSelectedMileage,
}: ResultsType) => {
  return (
    <div className={styles.container}>
      <Filter
        brands={brands}
        years={years}
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        selectedMileage={selectedMileage}
        setSelectedMileage={setSelectedMileage}
      />

      {products.length < 1 ? (
        <div className={styles.noResults}>
          <h3 className={styles.title}>
            Por el momento no contamos con resultados para estos filtros, por
            favor, prueba con otros.
          </h3>
        </div>
      ) : (
        <div className={styles.results}>
          <GeneralBanner type="alert">
            Te ofrecemos la total libertad de traer a tu mecánico para una
            inspección detallada o de programar una prueba de manejo. Queremos
            que compruebes por ti mismo la calidad de nuestros vehículos.
          </GeneralBanner>
          <div className={styles.grid}>
            {products.map((product: carType) => (
              <ProductCard
                key={product.id}
                id={product.id}
                attributes={product}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
