import React from 'react'
import SummaryTitle from '../summarytitle/SummaryTitle';
import SummaryContainer from '@/layout/SummaryContainer';
import Detail from '../detail/Detail';
import styles from './styles.module.css'

import calendarIcon from '@/assets/icons/summary/calendar.svg';
import versionIcon from '@/assets/icons/summary/version.svg';
import locationIcon from '@/assets/icons/summary/location.svg';
import kmIcon from '@/assets/icons/summary/km.svg';

const Summary = ({ year, version, milage, location}: { year: number; version: string; milage: string; location: string;}) => {
  return (
    <div className={styles.container}>
        <SummaryTitle title='Resumen' />
        <SummaryContainer>
            <div className={styles.grid}>
                <Detail icon={calendarIcon} title='Año' content={year}/>
                <Detail icon={versionIcon} title='Versión' content={version}/>
                <Detail icon={kmIcon} title='Kilometraje' content={milage}/>
                <Detail icon={locationIcon} title='Ubicación' content={location}/>
            </div>
      </SummaryContainer>
    </div>
  )
}

export default Summary