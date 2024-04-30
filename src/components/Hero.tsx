'use client'
import Image from 'next/image'
import arrowIcon from '../assets/icons/rightArrow.svg'
import background from '../assets/background.svg'
import carImage from '../assets/car.png'
import styles from '../styles/principal/hero.module.css'

const Hero = () => {
  const handleRedirection = () => {
    window.open('/tienda');
  }
  return (
    <div className={styles.hero}>
        <div className={styles.content}>
            <div className={styles.principal}>
                <h1 className={styles.header}>Consigue tu automovil seminuevo con grandes precios.</h1>
                <p className={styles.subtitle}>Conoce nuestro catalogo y ven por tu automovil hoy mismo.</p>
            </div>
            <button className={styles.discover} onClick={handleRedirection}>Descubre más <Image src={arrowIcon} alt='Right arrows icons' width={20} height={20}/></button>
        </div>
        <Image src={carImage} alt='Car image' className={styles.image} />
        
    </div>
  )
}

export default Hero