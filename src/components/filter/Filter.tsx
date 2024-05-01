'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import filterIcon from '@/assets/icons/filter.svg'
import BrandFilter from './brand/BrandFilter'
import YearFilter from './year/YearFilter'
import MileageFilter from './mileage/Mileage'
import PriceFilter from './price/PriceFilter'
import 'rc-slider/assets/index.css';


const Filter = ( {brands, years, selectedYears, setSelectedYears}: {brands: string[]; years: number[]; selectedYears: any; setSelectedYears: any; }) => {
    const [openFilters, setOpenFilters] = useState<boolean>(true);
    const [showBrandFilter, setShowBrandFilter] = useState<boolean>(true);
    const [showYearFilter, setShowYearFilter] = useState<boolean>(true);
    const [showMileageFilter, setShowMileageFilter] = useState<boolean>(true);
    const [showPriceFilter, setShowPriceFilter] = useState<boolean>(true);

  return (
    <div className={styles.searchbar}>
        <div className={styles.header} onClick={() => setOpenFilters(!openFilters)}>
            <h3 className={styles.title}>Filtros</h3>
            <Image src={filterIcon} alt='Filtrar automoviles' width={25} height={25} />
        </div>
        {openFilters && (
            <div className={styles.filters}>
                <BrandFilter brands={brands} showBrandFilter={showBrandFilter} setShowBrandFilter={setShowBrandFilter} />
                <hr className={styles.separator}/>
                <YearFilter years={years.sort((a, b) => b - a)} yearFilter={showYearFilter} setYearFilter={setShowYearFilter} selectedYears={selectedYears} setSelectedYears={setSelectedYears}/>
                <hr className={styles.separator}/>
                <MileageFilter showMileageFilter={showMileageFilter} setShowMileageFilter={setShowMileageFilter} />
                <hr className={styles.separator}/>
                <PriceFilter showPriceFilter={showPriceFilter} setShowPriceFilter={setShowPriceFilter} />
                <hr className={styles.separator}/>
            </div>
        )}
    </div>
  )
}

export default Filter