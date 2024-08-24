import SummaryTitle from '../summarytitle/SummaryTitle';
import SummaryContainer from '@/layout/SummaryContainer';
import Detail from '../detail/Detail';
import styles from './styles.module.css'

import calendarIcon from '@/assets/icons/summary/calendar.svg';
import versionIcon from '@/assets/icons/summary/version.svg';
import locationIcon from '@/assets/icons/summary/location.svg';
import buildingIcon from '@/assets/icons/summary/building.svg';
import priceIcon from '@/assets/icons/summary/price.svg';
import kmIcon from '@/assets/icons/summary/km.svg';

import { formatPrice, formateMielage } from '@/helpers/priceFunction';

const Summary = ({ year, price, version, milage, location}: { year: number; price: number; version: string; milage: string; location: string;}) => {
  return (
    <div className={styles.container}>
        <SummaryTitle title='Resumen' />
        <SummaryContainer>
            <div className={styles.grid}>
                <Detail icon={calendarIcon} title='Año' content={year}/>
                <Detail icon={versionIcon} title='Versión' content={version}/>
                <Detail icon={kmIcon} title='Kilometraje' content={formateMielage(milage)}/>
                <Detail icon={locationIcon} title='Ubicación' content={location}/>
                <Detail icon={buildingIcon} title='Oficina' content={'Aquiles Serdán'}/>
                <Detail icon={priceIcon} title='Precio' content={`${formatPrice(price)}`}/>
            </div>
      </SummaryContainer>
    </div>
  )
}

export default Summary