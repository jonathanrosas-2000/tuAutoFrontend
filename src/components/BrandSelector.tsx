'use client';
import { useState } from 'react';
import styles from '../styles/principal/brands.module.css'
import { Title } from '@/components'


const BrandElement = ({ brand }: {brand: string}) => {
    const handleClick = (brand: string) => {
        window.location.replace(`/tienda?brand=${brand}`);
    }
    return <div className={styles.elements} onClick={() => handleClick(brand)}>{brand}</div>
}

const BrandSelector = () => {
    const [ brands, setBrands ] = useState<any[]>([
        'Dodge',
        'Chevrolet',
        'Toyota',
        'Nissan',
        'Volkwswagen',
        'Renault',
        'Ford',
        'Honda'
    ])
    
  return (
    <>
        <Title title={'Nuestras marcas'} />
        <div className={styles.container}>
            {brands.map((element: string, index: number) => (
                <BrandElement key={index} brand={element}/>
                ))}
        </div>
    </>
  )
}

export default BrandSelector