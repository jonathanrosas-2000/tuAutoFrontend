'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles.module.css'
import arrowIcon from '@/assets/icons/arrow.svg'

const BrandFilter = ({brands, showBrandFilter, setShowBrandFilter} : {brands: string[]; showBrandFilter: boolean; setShowBrandFilter: (brandFilter: boolean) => void;}) => {
        const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

        const toggleBrand = (brand: string) => {
            if (selectedBrands.includes(brand)) {
                setSelectedBrands(selectedBrands.filter(item => item !== brand));
            } else {
                setSelectedBrands([...selectedBrands, brand]);
            }
        };

       return (
        <>
            <div onClick={() => setShowBrandFilter(!showBrandFilter)} className={styles.item}>
                <h5 className={styles.title}>Marca</h5>
                    <Image 
                        src={arrowIcon} 
                        alt='Filtro por marca de coches' 
                        height={25} 
                        width={25} 
                        className={showBrandFilter ? styles.rotated : ''}
                    />
            </div>
            {showBrandFilter && (
                <div className={styles.itemContainer}>
                    {brands.map((brand, index) => (
                        <div key={index} className={styles.element}>
                            <input
                                type="checkbox"
                                id={brand}
                                name={brand}
                                checked={selectedBrands.includes(brand)}
                                onChange={() => toggleBrand(brand)}
                                className={styles.checkbox}
                            />
                            <label htmlFor={brand}>{brand}</label>
                        </div>
                    ))}
                </div>
            )}
        </>
       )
}

export default BrandFilter;
