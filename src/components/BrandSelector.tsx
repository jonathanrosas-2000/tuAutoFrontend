'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/principal/brands.module.css'
import axios from 'axios';
import config from '../common/config';


const BrandElement = ({ brand }: {brand: string}) => {
    const handleClick = (brand: string) => {
        window.location.replace(`/tienda?brand=${brand}`);
    }
    return <div className={styles.elements} onClick={() => handleClick(brand)}>{brand}</div>
}

const BrandSelector = () => {
    const [ brands, setBrands ] = useState<any[]>([])
    const getProducts = async () => {
        axios.get(`${config.api}/brands`)
        .then(res => {
            const tempArr: any[] = [];

            res.data.data.map((brand: any) => {
                tempArr.push(brand.attributes.name)
            })
            setBrands(tempArr);
        })
        .catch(error => console.error(error));
      }
      
      useEffect(() => {
        getProducts();
      }, []);
    
  return (
    <div className={styles.container}>
        {brands.map((element: string, index: number) => (
            <BrandElement key={index} brand={element}/>
        ))}
    </div>
  )
}

export default BrandSelector