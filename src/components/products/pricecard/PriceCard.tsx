'use client'
import { useEffect, useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles.module.css'

const PriceCard = ({product}:any) => {
    const { name, actualLocation, year, mileage, price } = product.attributes;
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
        const tempMortage = price * (selectedPercentage / 100);
        const tempMonthPayment = (price - tempMortage) / selectedMonths;
        setMortage(tempMortage);
        setMonthPayment(tempMonthPayment)
     }, [selectedMonths, selectedPercentage])

  return (
    <div className={styles.card}>
        <div className={styles.header}>
            <h2 className={styles.title}>{name}</h2>
            <ul className={styles.list}>
                <li className={styles.element}>{year}</li>
                <div className={styles.point}></div>
                <li className={styles.element}>{actualLocation}</li>
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
              min={15} 
              max={85} 
              step={10}
              marks={{ 15: '15%', 25: '25%', 35: '35%', 45: '45%', 55: '55%', 65: '65%', 75: '75%', 85: '85%' }} 
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
            <p className={styles.price}>{`$ ${(monthPayment * 1.24).toFixed(1)}`} MXN</p>
          </div>
        </div>
    </div>
  )
}

export default PriceCard