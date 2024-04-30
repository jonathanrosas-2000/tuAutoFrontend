'use client'
import { useEffect, useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles.module.css'
import { carType } from '@/types/typing';

const PriceCard = ({product}: {product: carType}) => {
  const { name, year, mileage, price } = product;
    
    const [selectedMonths, setSelectedMonths] = useState(36);
    const [selectedPercentage, setSelectedPercentage] = useState(35);
    const [totalPrice, setTotalPrice] = useState<number>(price);
    const [mortage, setMortage] = useState<number>(price * (0.35));
    const [monthPayment, setMonthPayment] = useState<number>((price * 0.65) / 36 );

    const handleMonthChange = (value: any) => {
      setSelectedMonths(value);
    };
    const handlePercentageChange = (value: any) => {
      setSelectedPercentage(value); 
    };
    
    const formatPrice = (price: number) => {
      return price.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
      });
    };
     useEffect(() => {
        const enganche = price * (selectedPercentage / 100);
        const restante = price - enganche;
        const interesTotal = 1.8*selectedMonths
        const total = restante * ((interesTotal / 100) + 1)
        const pagoMensual = total / selectedMonths;

        setMortage(enganche);
        setMonthPayment(pagoMensual)
     }, [selectedMonths, selectedPercentage]);

  return (
    <div className={styles.card}>
        <div className={styles.header}>
            <h2 className={styles.title}>{name}</h2>
            <ul className={styles.list}>
                <li className={styles.element}>{year}</li>
                <div className={styles.point}></div>
                <li className={styles.element}>CDMX</li>
                <div className={styles.point}></div>
                <li className={styles.element}>{mileage} km</li>
            </ul>
        </div>
        <div className={styles.filters}>
          <h2 className={styles.text}>Plazo <span className={styles.span}>(Meses)</span></h2>
          <Slider
            min={12} 
            max={48} 
            step={12} 
            marks={{ 12: '12', 24: '24', 36: '36', 48: '48' }} // Etiquetas para los valores del slider
            onChange={handleMonthChange} 
            value={selectedMonths}
            className='filterClass'
          />
          <h2 className={styles.text}>Enganche <span className={styles.span}>(%)</span></h2>
            <Slider
              min={10} 
              max={90} 
              step={10}
              marks={{ 10: '10%', 20: '20%', 30: '30%', 40: '40%', 50: '50%', 60: '60%', 70: '70%', 80: '80%', 90: '90%' }} 
              onChange={handlePercentageChange} 
              value={selectedPercentage} 
              className='filterClass'
          />
        </div>
        <div className={styles.firstPriceContainer}>
          <div className={styles.texts}>
            <h4 className={styles.text}>Precio de contado</h4>
            <p className={styles.price}>{formatPrice(totalPrice)} MXN</p>
          </div>
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.texts}>
            <h4 className={styles.text}>Enganche</h4>
            <p className={styles.price}>{formatPrice(mortage)} MXN</p>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.texts}>
            <h4 className={styles.text}>Mensualidad</h4>
            <p className={styles.price}>{`$ ${(monthPayment).toFixed(1)}`} MXN</p>

          </div>
        </div>
    </div>
  )
}

export default PriceCard