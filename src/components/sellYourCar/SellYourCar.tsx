'use client'
import React from 'react'
import { Title } from '../index';
import Image from 'next/image'
import principalCar from '../../assets/chevrolet.webp';
import checkIcon from '../../assets/icons/check.svg'
import styles from './styles.module.css'

const ContactInfo = () => {
    return (
        <div className={styles.container}>
            <Image src={principalCar} alt='Nuestro coche mas imporante' width={500} height={500} className={styles.image}/>
            <div className={styles.info}>
              <h2 className={styles.title}><span className={styles.span}>Consigue una valuación </span> justa por tu coche.</h2>
              <h3 className={styles.title}>Vendelo hoy mismo</h3>
              <p>En nuestro servicio, garantizamos una valuación justa por tu vehículo, para que puedas obtener el mejor precio posible. Olvídate de largos procesos de espera, ¡vende tu coche hoy mismo y obtén efectivo en tu mano de inmediato!</p>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Image src={checkIcon} alt='Seguridad en tus compras' width={20} height={20} />
                  <span className={styles.text}>Valuación justa por tu coche</span>
                </li>
                <li className={styles.item}>
                <Image src={checkIcon} alt='Seguridad en tus compras' width={20} height={20} />
                  <span className={styles.text}>Venta rápida</span>
                </li>
                <li className={styles.item}>
                <Image src={checkIcon} alt='Seguridad en tus compras' width={20} height={20} />
                  <span className={styles.text}>Seguridad en tus compras</span>
                </li>
              </ul>
              <button className={styles.button} onClick={() => window.open('https://compro.tuautoseminuevo.com', '_blank')}>Contactanos</button>
            </div>
        </div>
    )
}

const SellYourCar = () => {
  return (
    <div>
        <Title title={'Vende con nosotros tu automovil'} />
        <ContactInfo />
    </div>
  )
}

export default SellYourCar