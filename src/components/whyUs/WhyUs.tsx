import Image from 'next/image'
import { Title } from '../index';
import discountIcon from '../../assets/icons/benefits/discount.svg';
import treatIcon from '../../assets/icons/benefits/treat.svg';
import priceIcon from '../../assets/icons/benefits/price.svg';
import gradeIcon from '../../assets/icons/benefits/grade.svg';
import { BenefitsProps } from '../../types/proptypes';
import { Benefits } from '../../types/typing';
import styles from './styles.module.css'

const Benefits = ({ title, content, icon, alt }: BenefitsProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                <Image src={icon} alt={alt} width={40} height={40}/>
            </div>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.description}>{content}</p>
        </div>
    )
}

const WhyUs = () => {
    const BenefitsOfTheBrand:Benefits[] = [
        {
            id: '001',
            title: 'Special Financing Offers',
            description: 'Illo rerum et animi provident magni pariatur ex. Ipsam minima quaerat expedita',
            icon: discountIcon,
            alt: 'Grandes descuentos'
        },
        {
            id: '002',
            title: 'Trusted Car Dealership',
            description: 'Illo rerum et animi provident magni pariatur ex. Ipsam minima quaerat expedita',
            icon: treatIcon,
            alt: 'Trato directo con nosotros'
        },
        {
            id: '003',
            title: 'Transparent Pricing',
            description: 'Illo rerum et animi provident magni pariatur ex. Ipsam minima quaerat expedita',
            icon: priceIcon,
            alt: 'Precio real en los coches'
        },
        {
            id: '004',
            title: 'Expert Car Service',
            description: 'Illo rerum et animi provident magni pariatur ex. Ipsam minima quaerat expedita',
            icon: gradeIcon,
            alt: 'Servicio de gran calidad'
        },

    ]
  return (
    <div>
        <Title title={'¿Por qué nosotros?'} />
        <div className={styles.benefitsContainer}>
            {BenefitsOfTheBrand.map((item: Benefits) => (
                <Benefits 
                    key={item.id}
                    title={item.title}
                    content={item.description}
                    icon={item.icon}
                    alt={item.alt}
                />
            ))}
        </div>
    </div>
  )
}

export default WhyUs