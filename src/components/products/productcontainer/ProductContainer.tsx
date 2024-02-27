import React from 'react';
import styles from './styles.module.css';
import ProductCard from '../pricecard/PriceCard';
import Summary from '../summary/Summary';
import Features from '../features/Features';
import DescriptonSummary from '../description/DescriptonSummary';
import ProductByYear from '../productByYear/ProductByYear';
import ProductByCity from '../productByCity/ProductByCity';
import Image from 'next/image';

const ProductContainer = ({product}: any) => {
  console.log(product.attributes)
  const { name, actualLocation, year, mileage, features, Description, image } = product.attributes;

  return (
    <div className={styles.container}>
      <div className={styles.car}>
        <div className={styles.imageContainer}>
          {image ? (
            <Image src={`${image.data[0].attributes.url}`} alt={`Carro seminuevo ${name}`} width={500} height={400} className={styles.image}/>
          ): (
            <h2>No image</h2>
          )}
        </div>
        <Summary year={year} version={'1'} milage={mileage} location={actualLocation}  />
        {features && <Features features={features} />}
        {Description && <DescriptonSummary description={Description} />}
        <ProductByYear name={name} />
        <ProductByCity name={name} />
      </div>
      <ProductCard product={product} />
    </div>
  )
}

export default ProductContainer