'use client'
import React, { useEffect, useState } from 'react'
import { Filter, ProductCard } from '@/components'
import styles from './styles.module.css'
import {ProductsProps} from '@/types/proptypes'


const Results = ({ products, years, brands, selectedYears, setSelectedYears }: any ) => {

  return (
    <div className={styles.container}>
      <Filter brands={brands} years={years} selectedYears={selectedYears} setSelectedYears={setSelectedYears}/>
      {products.length < 1 ? (
        <div className={styles.noResults}>
          <h3 className={styles.title}>
            No contamos con nigún vehiculo con esos parametros
          </h3>
        </div>
      ) : (
        <div className={styles.results}>
        { products.map((product: ProductsProps) => (
          <ProductCard key={product.id} id={product.id} attributes={product.attributes} />
        ))}
      </div>
      )}
    </div>
  )
}

export default Results