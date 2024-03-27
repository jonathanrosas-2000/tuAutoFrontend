import Image from 'next/image';
import { ProductsProps } from '../../types/proptypes';
import styles from './styles.module.css';
import TuAutoSeminiuevoLogo from '../../assets/Logo.svg'
import { formatPrice } from '../../helpers/priceFunction';
import config from '../../common/config'

const ProductCard = ( { id, attributes }: ProductsProps ) => {
    const { nombre, anio, kilometraje, ubicacionActual, precio, enganche, image } = attributes;

    const getPriceWithoutMortage = (price: number) => {
      return formatPrice(Math.round( (price - enganche) * 1.8 / Number(config.default_months)))
    }

    const handleProductClick = () => {
      window.open(`/tienda/${id}`)
    }
    
  return (
    <div className={styles.card} onClick={handleProductClick}>
        <div className={styles.image}>
          {image.data.length > 0 ? (
            <Image src={`${image.data[0].attributes.url}`} alt='TuAutoSeminuevo logo' width={200} height={180} className={styles.image}/>
          ) : (
            <Image src={TuAutoSeminiuevoLogo} alt='TuAutoSeminuevo logo' width={200} height={180} />
          )}
        </div>
        <div className={styles.data}>
          <h3 className={styles.name}>{nombre}</h3>
          <div className={styles.info}>
            <span className={styles.text}>{anio}</span>
            <div className={styles.separator}></div>
            <span className={styles.text}>{ubicacionActual}</span>
            <div className={styles.separator}></div>
            <span className={styles.text}>{kilometraje}</span>
          </div>
          <hr className={styles.hr} />
          <p className={styles.price}>Contado: {formatPrice(precio)}</p>
          <p className={styles.total}><span className={styles.span}>Desde</span> {getPriceWithoutMortage(precio)} <span className={styles.span}>/mes*</span></p>
        </div>
    </div>
  )
}

export default ProductCard