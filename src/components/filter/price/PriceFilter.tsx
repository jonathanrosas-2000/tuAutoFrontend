'use client'
import { useState } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from '../styles.module.css'
import arrowIcon from '@/assets/icons/arrow.svg'

const PriceFilter = ({ showPriceFilter, setShowPriceFilter}: {  showPriceFilter: boolean; setShowPriceFilter: (showPriceFilter: boolean) => void;}) => {
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(999999);

    const handlePriceChange = (value: any) => {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
    }

    const formatPrice = (price: number) => {
        return price.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 0,
        });
    };

  return (
    <div>
        <div onClick={() => setShowPriceFilter(!showPriceFilter)} className={styles.item}>
                <h5 className={styles.title}>Precio</h5>
                <Image 
                    src={arrowIcon} 
                    alt='Filtro por marca de coches' 
                    width={25} 
                    height={25} 
                    className={showPriceFilter ? styles.rotated : ''}
                />
            </div>
            {showPriceFilter && (
                <div className={styles.container}>
                    <div className={styles.inputFilter}>
                        <input type='string' disabled={true} value={`${formatPrice(minPrice)} MXN`} className={styles.input}/>
                        <input type='string' disabled={true} value={`${formatPrice(maxPrice)} MXN`} className={styles.input}/>
                    </div>
                    <Slider
                    range
                    min={0}
                    max={999999}
                    value={[minPrice, maxPrice]}
                    onChange={handlePriceChange}
                    className='filterClass'
                    />
                </div>
            )}
    </div>
  )
}

export default PriceFilter