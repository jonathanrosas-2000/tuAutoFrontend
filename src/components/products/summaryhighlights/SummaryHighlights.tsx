import React from 'react'
import styles from './styles.module.css'
import SummaryTitle from '../summarytitle/SummaryTitle'
import SummaryContainer from '@/layout/SummaryContainer'
import Detail from '../detail/Detail'
import { HighlightsType } from '@/types/typing';

//Icons
import bodyStyleIcon from '@/assets/icons/highlights/bodyStyle.svg';
import engineIcon from '@/assets/icons/highlights/engine.svg';
import fuelIcon from '@/assets/icons/highlights/fuel.svg';
import roadIcon from '@/assets/icons/highlights/road.svg';
import wheelIcon from '@/assets/icons/highlights/wheel.svg';
import speedIcon from '@/assets/icons/highlights/speed.svg';
import interiorColorIcon from '@/assets/icons/highlights/interiorColor.svg';
import exteriorColorIcon from '@/assets/icons/highlights/exteriorColor.svg';

const SummaryHighlights = ({ highlights } : { highlights: HighlightsType }) => {
  const { bodyStyle, engine, mpgCityHwy, fuel, driveType, transmission , interiorColor, exteriorColor } = highlights;
    
  return (
    <div className={styles.container}>
        <SummaryTitle title='Datos Destacados' />
        <SummaryContainer>
            <div className={styles.grid}>
                {bodyStyle && <Detail icon={bodyStyleIcon} title='Tipo de Coche' content={bodyStyle}/>}
                {engine && <Detail icon={engineIcon} title='Motor' content={engine}/>}
                {mpgCityHwy && <Detail icon={roadIcon} title='Gasto en Ciudad' content={mpgCityHwy}/>}
                {fuel && <Detail icon={fuelIcon} title='Combustible' content={fuel}/>}
                {driveType && <Detail icon={wheelIcon} title='Tracción' content={driveType}/>}
                {transmission && <Detail icon={speedIcon} title='Trasmisión' content={transmission}/>}
                {interiorColor && <Detail icon={interiorColorIcon} title='Interior(es)' content={interiorColor}/>}
                {exteriorColor && <Detail icon={exteriorColorIcon} title='Exterior(es)' content={exteriorColor}/>}
            </div>
      </SummaryContainer>
    </div>
  )
}

export default SummaryHighlights