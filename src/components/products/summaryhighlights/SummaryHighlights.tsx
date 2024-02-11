import React from 'react'
import styles from './styles.module.css'
import SummaryTitle from '../summarytitle/SummaryTitle'
import SummaryContainer from '@/layout/SummaryContainer'
import Detail from '../detail/Detail'

const SummaryHighlights = ( { highlights } : { highlights: any}) => {
    
  return (
    <div className={styles.container}>
        <SummaryTitle title='Resumen' />
        <SummaryContainer>
            <div className={styles.grid}>
                
            </div>
      </SummaryContainer>
    </div>
  )
}

export default SummaryHighlights