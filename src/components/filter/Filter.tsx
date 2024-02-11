'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import filterIcon from '@/assets/icons/filter.svg'
import arrowIcon from '@/assets/icons/arrow.svg'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import BrandFilter from './brand/BrandFilter'
import YearFilter from './year/YearFilter'
import MileageFilter from './mileage/Mileage'
import PriceFilter from './price/PriceFilter'

// const YearFilter = ({years, yearFilter, setYearFilter}: { years: number[]; yearFilter: boolean; setYearFilter: (yearFilter: boolean) => void;}) => {
//     const [selectedYears, setSelectedYears] = useState<number[]>([]);

//     const toggleYear = (year: number) => {
//         if(selectedYears.includes(year)) {
//             setSelectedYears(selectedYears.filter(item => item !== year));
//         } else {
//             setSelectedYears([...selectedYears, year])
//         }
//     }

//     return (
//         <>
//             <div onClick={() => setYearFilter(!yearFilter)} className={styles.item}>
//                 <h5 className={styles.title}>Ańo</h5>
//                 <Image 
//                     src={arrowIcon} 
//                     alt='Filtro por marca de coches' 
//                     width={25} 
//                     height={25} 
//                     className={yearFilter ? styles.rotated : ''}
//                 />
//             </div>
//             {yearFilter && (
//                 <div className={styles.itemContainer}>
//                     {years.map((year, index) => (
//                         <div key={index} className={styles.element}>
//                             <input
//                                 type="checkbox"
//                                 id={String(year)}
//                                 name={String(year)}
//                                 checked={selectedYears.includes(year)}
//                                 onChange={() => toggleYear(year)}
//                                 className={styles.checkbox}
//                             />
//                             <label htmlFor={String(year)}>{year}</label>
//                         </div>
//                     ))}
//                 </div>
//             )}
               
//         </>
//     )
// }

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