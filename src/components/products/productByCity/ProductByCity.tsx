import React from 'react'
import styles from './styles.module.css'
import SummaryTitle from '../summarytitle/SummaryTitle'
import SummaryContainer from '@/layout/SummaryContainer'
import FixedDetail from '../detail/FixedDetail'

const Features = ({ name }: { name: string}) => {
    const municipalities = [
        'en Álvaro Obregón',
        'en Azcapotzalco',
        'en Benito Juárez',
        'en Coyoacán',
        'en Cuajimalpa de Morelos',
        'en Cuauhtémoc',
        'en Gustavo A. Madero',
        'en Iztacalco',
        'en Iztapalapa',
        'en La Magdalena Contreras',
        'en Miguel Hidalgo',
        'en Milpa Alta',
        'en Tláhuac',
        'en Tlalpan',
        'en Venustiano Carranza',
        'en Xochimilco'
    ]
  return (
    <div>
        <SummaryTitle title={`Municipios cercanos con busqueda de ${name} en CDMX`} />
        <SummaryContainer>
            <div className={styles.grid}>
                {municipalities.map((municipality: string, index: number) => (
                    <FixedDetail key={index} prefix='' text={name} sufix={municipality} />
                ))}
            </div>
        </SummaryContainer>
    </div>
  )
}

export default Features