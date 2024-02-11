import React from 'react'
import styles from './styles.module.css'
import SummaryTitle from '../summarytitle/SummaryTitle'
import SummaryContainer from '@/layout/SummaryContainer'
import FixedDetail from '../detail/FixedDetail'

const Features = ({ name }: { name: string}) => {
    const years = [
        2024,
        2023,
        2022,
        2021,
        2020,
        2019,
        2018,
        2017,
        2016,
        2015,
        2014
    ]
  return (
    <div>
        <SummaryTitle title={`Autos usados y seminuevos ${name} por año`} />
        <SummaryContainer>
            <div className={styles.grid}>
                {years.map((year: number, index: number) => (
                    <FixedDetail key={index} prefix='' text={name} sufix={`${year}`} />
                ))}
            </div>
        </SummaryContainer>
    </div>
  )
}

export default Features