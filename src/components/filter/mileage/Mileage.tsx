"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "../styles.module.css";
import arrowIcon from "@/assets/icons/arrow.svg";

const MileageFilter = ({
  showMileageFilter,
  setShowMileageFilter,
  selectedMileage,
  setSelectedMileage,
}: {
  showMileageFilter: boolean;
  setShowMileageFilter: (showMileageFilter: boolean) => void;
  selectedMileage: [number, number];
  setSelectedMileage: (value: [number, number]) => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const [minMileage, setMinMileage] = useState<number>(0);
  const [maxMileage, setMaxMileage] = useState<number>(125000);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMileageChange = (value: any) => {
    setMinMileage(value[0]);
    setMaxMileage(value[1]);
    setSelectedMileage([value[0], value[1]]);
  };

  return (
    <div>
      <div
        onClick={() => setShowMileageFilter(!showMileageFilter)}
        className={styles.item}
      >
        <h5 className={styles.title}>Kilometraje</h5>
        <Image
          src={arrowIcon}
          alt="Filtro por marca de coches"
          width={25}
          height={25}
          className={showMileageFilter ? styles.rotated : ""}
        />
      </div>
      {showMileageFilter && (
        <div className={styles.container}>
          <div className={styles.inputFilter}>
            <input
              type="string"
              disabled={true}
              value={`${minMileage} KM`}
              className={styles.input}
            />
            <input
              type="string"
              disabled={true}
              value={`${maxMileage} KM`}
              className={styles.input}
            />
          </div>
          {mounted && (
            <Slider
              range
              step={5000}
              min={0}
              max={125000}
              value={[minMileage, maxMileage]}
              onChange={handleMileageChange}
              className="filterClass"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MileageFilter;
