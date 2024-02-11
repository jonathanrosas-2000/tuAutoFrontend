import React from 'react'
import styles from './styles.module.css'
import SummaryTitle from '../summarytitle/SummaryTitle'
import SummaryContainer from '@/layout/SummaryContainer'
import SimpleDetail from '../detail/SimpleDetail'
import checkIcon from '../../../assets/icons/summary/check.svg'

const Features = ({ features }: { features: string[]}) => {
  return (
    <div>
        <SummaryTitle title='Características principales' />
        <SummaryContainer>
            <div className={styles.grid}>
                {features.map((element: string, index: number) => (
                    <SimpleDetail key={index} icon={checkIcon} text={element} />
                ))}
            </div>
        </SummaryContainer>
    </div>
  )
}

export default Features