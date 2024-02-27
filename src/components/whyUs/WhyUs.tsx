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
            title: 'Opciones de Financiamiento',
            description: 'Contamos con diferentes opciones para pagos que se ajustan a tu cartera',
            icon: discountIcon,
            alt: 'Grandes descuentos'
        },
        {
            id: '002',
            title: 'Servicio de Atención Personalizado',
            description: 'Nuestro equipo de atención al cliente está comprometido a brindarte un servicio personalizado',
            icon: treatIcon,
            alt: 'Trato directo con nosotros'
        },
        {
            id: '003',
            title: 'Opciones con Rangos Precios',
            description: 'Contamos con vehiculos de muchas gamas perfectos para todos los clientes',
            icon: priceIcon,
            alt: 'Precio real en los coches'
        },
        {
            id: '004',
            title: 'Alto Nivel de Confianza',
            description: 'Nuestra amplia base de clientes satisfechos es un testimonio de nuestro compromiso',
            icon: gradeIcon,
            alt: 'Servicio de gran calidad'
        },
        // {
        //     id: '003',
        //     title: 'Programa de Pruebas de Manejo',
        //     description: 'Experimenta la emoción de conducir nuestros vehículos con nuestro programa de pruebas de manejo gratuito.',
        //     icon: testDriveIcon,
        //     alt: 'Volante de coche'
        // },
        // {
        //     id: '004',
        //     title: 'Servicio de Mantenimiento Programado',
        //     description: 'Ofrecemos un programa de mantenimiento periódico para garantizar el rendimiento óptimo y la durabilidad de tu vehículo.',
        //     icon: maintenanceIcon,
        //     alt: 'Llave inglesa'
        // },
        // {
        //     id: '005',
        //     title: 'Accesorios Personalizados',
        //     description: 'Personaliza tu vehículo con una amplia gama de accesorios que reflejen tu estilo y necesidades.',
        //     icon: accessoriesIcon,
        //     alt: 'Accesorios para coches'
        // },
        // {
        //     id: '006',
        //     title: 'Asistencia en Carretera 24/7',
        //     description: 'Nuestro servicio de asistencia en carretera está disponible las 24 horas del día para ayudarte en cualquier situación de emergencia.',
        //     icon: roadsideAssistanceIcon,
        //     alt: 'Camión de remolque'
        // },
        // {
        //     id: '007',
        //     title: 'Seguro de Vehículos',
        //     description: 'Te ayudamos a encontrar el seguro de vehículos adecuado para proteger tu inversión y tu seguridad en la carretera.',
        //     icon: insuranceIcon,
        //     alt: 'Icono de seguro'
        // },
        // {
        //     id: '008',
        //     title: 'Entrega a Domicilio',
        //     description: 'Hacemos que la compra de tu vehículo sea aún más conveniente con nuestro servicio de entrega a domicilio.',
        //     icon: deliveryIcon,
        //     alt: 'Casa y coche'
        // },
        // {
        //     id: '009',
        //     title: 'Programas de Leasing',
        //     description: 'Ofrecemos programas de leasing flexibles que te permiten conducir un vehículo nuevo sin la preocupación de la propiedad.',
        //     icon: leasingIcon,
        //     alt: 'Icono de leasing'
        // },
        // {
        //     id: '010',
        //     title: 'Centro de Financiamiento en Sitio',
        //     description: 'Nuestro centro de financiamiento en sitio te ofrece opciones de financiamiento rápidas y convenientes para simplificar tu experiencia de compra.',
        //     icon: financeCenterIcon,
        //     alt: 'Calculadora y dinero'
        // },
        // {
        //     id: '011',
        //     title: 'Programa de Reciclaje de Vehículos',
        //     description: 'Contribuye al medio ambiente y recibe beneficios al participar en nuestro programa de reciclaje de vehículos.',
        //     icon: recyclingIcon,
        //     alt: 'Icono de reciclaje'
        // },
        // {
        //     id: '012',
        //     title: 'Acceso a Concesiones Exclusivas',
        //     description: 'Obtén acceso privilegiado a concesiones exclusivas y ofertas especiales como parte de nuestra comunidad de clientes.',
        //     icon: exclusiveAccessIcon,
        //     alt: 'Icono de acceso exclusivo'
        // },
        // {
        //     id: '013',
        //     title: 'Programa de Reembolso por Referidos',
        //     description: 'Gana recompensas por recomendar nuestros servicios a amigos y familiares a través de nuestro programa de reembolso por referidos.',
        //     icon: referralProgramIcon,
        //     alt: 'Icono de referidos'
        // },
        // {
        //     id: '014',
        //     title: 'Servicio de Atención al Cliente Personalizado',
        //     description: 'Nuestro equipo de atención al cliente está comprometido a brindarte un servicio personalizado y atención excepcional en cada paso del camino.',
        //     icon: customerServiceIcon,
        //     alt: 'Icono de atención al cliente'
        // }
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