//css
import '@/styles/globals.css';
import styles from './nostros.module.css'

//layout
import PrincipalLayout from "@/layout/PrincipalLayout"

//compontents
import Image from 'next/image';

const Nosotros = () => {
  return (
    <PrincipalLayout>
        <div className={styles.container}>
            <div>
                <h2 className={styles.us}>Nostros</h2>
                <h1 className={styles.title}>Facilitando la Compra Segura de <span className={styles.span}>Autos Seminuevos en México</span></h1>
                <p className={styles.content}>
                    La compra de autos seminuevos conlleva desafíos significativos, desde estafas hasta la complejidad del papeleo. En TuAutoSeminuevo.com, hemos surgido como la solución que los compradores necesitan para garantizar transacciones seguras y sin complicaciones.
                    <br />
                    Nuestra Misión:
                    <br />
                    Nuestra misión es poner fin a las estafas y simplificar el proceso de compra de autos seminuevos en México. Para ello nos comprometemos a proporcionar a nuestros clientes la confianza y la seguridad que merecen al adquirir un vehículo usado.
                </p>
            </div>
            <Image src={'/aboutUs.webp'} width={400} height={400} alt='Nuestra historia' />
        </div>
    </PrincipalLayout>
  )
}

export default Nosotros