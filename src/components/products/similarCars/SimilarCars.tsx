"use client";
import React, { useState, useEffect } from "react";
import { products as productsFromDB } from "@/data/cars";
import { carType } from "@/types/typing";

//Page Components
import { ProductCard } from "@/components";
import SummaryTitle from "../summarytitle/SummaryTitle";
import SummaryContainer from "@/layout/SummaryContainer";

import styles from "./syles.module.css";

const SimilarCars = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<carType[]>([]);

  useEffect(() => {
    const selectRandomVehicles = () => {
      const randomBrand =
        productsFromDB[Math.floor(Math.random() * productsFromDB.length)].brand;

      const sameBrandVehicles = productsFromDB.filter(
        (product) => product.brand === randomBrand
      );

      if (sameBrandVehicles.length >= 3) {
        const randomVehicles = sameBrandVehicles
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setSelectedVehicles(randomVehicles);
      } else {
        const randomVehicles = productsFromDB
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setSelectedVehicles(randomVehicles);
      }
    };

    selectRandomVehicles();
  }, []);

  return (
    <div className={styles.container}>
      <SummaryTitle title="Otros Vehiculos" />

      <div className={styles.grid}>
        {selectedVehicles.map((vehicle) => (
          <ProductCard key={vehicle.id} id={vehicle.id} attributes={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCars;
