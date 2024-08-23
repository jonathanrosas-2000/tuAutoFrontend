"use client";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "../assets/icons/rightArrow.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import carImage from "@car.png";
import styles from "../styles/principal/hero.module.css";

const Hero = () => {
  const handleRedirection = () => {
    window.open("/tienda");
  };
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.principal}>
          <h1 className={styles.header}>
            Consigue tu automovil seminuevo con grandes precios.
          </h1>
        </div>
        <button className={styles.discover} onClick={handleRedirection}>
          Ir a la tienda
          <Image
            src={arrowIcon}
            alt="Right arrows icons"
            width={20}
            height={20}
          />
        </button>
        <Link href={'https://compro.tuautoseminuevo.com/'} className={styles.subtitle}>
          o vende tu auto con nosotros {' '}
          <MdOutlineKeyboardArrowRight className={styles.icon}/>
        </Link>
      </div>
      <Image src={carImage} alt="Car image" className={styles.image} />
    </div>
  );
};

export default Hero;
