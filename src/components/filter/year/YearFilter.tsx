'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles.module.css'
import arrowIcon from '@/assets/icons/arrow.svg'

const YearFilter = ({years, yearFilter, setYearFilter, selectedYears, setSelectedYears}: { years: number[]; yearFilter: boolean; setYearFilter: (yearFilter: boolean) => void; selectedYears: any; setSelectedYears: any;}) => {

    const toggleYear = (year: number) => {
        if(selectedYears.includes(year)) {
            setSelectedYears(selectedYears.filter((item: any) => item !== year));
        } else {
            setSelectedYears([...selectedYears, year])
        }
    }

    return (
        <>
            <div onClick={() => setYearFilter(!yearFilter)} className={styles.item}>
                <h5 className={styles.title}>Ańo</h5>
                <Image 
                    src={arrowIcon} 
                    alt='Filtro por marca de coches' 
                    width={25} 
                    height={25} 
                    className={yearFilter ? styles.rotated : ''}
                />
            </div>
            {yearFilter && (
                <div className={styles.itemContainer}>
                    {years.map((year, index) => (
                        <div key={index} className={styles.element}>
                            <input
                                type="checkbox"
                                id={String(year)}
                                name={String(year)}
                                checked={selectedYears.includes(year)}
                                onChange={() => toggleYear(year)}
                                className={styles.checkbox}
                            />
                            <label htmlFor={String(year)}>{year}</label>
                        </div>
                    ))}
                </div>
            )}
               
        </>
    )
}

export default YearFilter