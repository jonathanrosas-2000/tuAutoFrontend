import Image from 'next/image';
import { ProductsProps } from '../../types/proptypes';
import styles from './styles.module.css';
import TuAutoSeminiuevoLogo from '../../assets/Logo.svg'
import { formatPrice } from '../../helpers/priceFunction';
import config from '../../common/config'

const ProductCard = ( { id, attributes }: ProductsProps ) => {
    const { name, year, mileage, actualLocation, price, mortage, image } = attributes;

    const getPriceWithoutMortage = (price: number) => {
      return formatPrice(Math.round( (price - mortage) / Number(config.default_months)))
    }

    const handleProductClick = () => {
      window.open(`/tienda/${id}`)
    }
    
  return (
    <div className={styles.card} onClick={handleProductClick}>
        <div className={styles.image}>
          {image.data.length > 0 ? (
            <Image src={`http://localhost:1337${image.data[0].attributes.url}`} alt='TuAutoSeminuevo logo' width={200} height={180} className={styles.image}/>
          ) : (
            <Image src={TuAutoSeminiuevoLogo} alt='TuAutoSeminuevo logo' width={200} height={180} />
          )}
        </div>
        <div className={styles.data}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.info}>
            <span className={styles.text}>{year}</span>
            <div className={styles.separator}></div>
            <span className={styles.text}>{actualLocation}</span>
            <div className={styles.separator}></div>
            <span className={styles.text}>{mileage}</span>
          </div>
          <hr className={styles.hr} />
          <p className={styles.price}>Contado: {formatPrice(price)}</p>
          <p className={styles.total}><span className={styles.span}>Desde</span> {getPriceWithoutMortage(price)} <span className={styles.span}>/mes*</span></p>
        </div>
    </div>
  )
}

export default ProductCard