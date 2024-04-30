import React from 'react';
import styles from './styles.module.css';
import ProductCard from '../pricecard/PriceCard';
import Summary from '../summary/Summary';
import Features from '../features/Features';
import DescriptonSummary from '../description/DescriptonSummary';
import ProductByYear from '../productByYear/ProductByYear';
import ProductByCity from '../productByCity/ProductByCity';
import Image from 'next/image';
import { carType } from '@/types/typing';

const ProductContainer = ({product}: {product: carType}) => {
  const { name, year, description, images, mileage, extra} = product;

  return (
    <div className={styles.container}>
      <div className={styles.car}>
        <div className={styles.imageContainer}>
          {images.length > 0 ? (
            <Image src={`${images[0]}`} alt={`Carro seminuevo ${name}`} width={500} height={400} className={styles.image}/>
          ): (
            <h2>No image</h2>
          )}
        </div>
        <Summary year={year} version={'1'} milage={String(mileage)} location={'CDMX'}  />
        {extra.length > 0 && <Features features={extra} />}
        {!!description && <DescriptonSummary description={description} />}
        <ProductByYear name={name} />
        <ProductByCity name={name} />
      </div>
      <ProductCard product={product} />
    </div>
  )
}

export default ProductContainer