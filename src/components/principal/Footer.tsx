import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/LogoWhite.svg'
import styles from './styles.module.css'
import facebookIcon from '../../assets/icons/social/facebook.svg'
import twitterIcon from '../../assets/icons/social/twitter.svg'
import instagramIcon from '../../assets/icons/social/instagram.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
       <Image src={Logo} alt='Tu auto seminuevo logo' className={styles.icon}/>
        <ul className={styles.menu}>
            <li className={styles.items}>
              <Link href='/'className={styles.link}>Home</Link>
            </li>
            <li className={styles.items}>
              <Link href='/tienda'className={styles.link}>Tienda</Link>
            </li>
            <li className={styles.items}>
              <Link href='/nosotros'className={styles.link}>Nosotros</Link>
            </li>
            <li className={styles.items}>
              <Link href='/faq'className={styles.link}>FAQs</Link>
            </li>
            <li className={styles.items}>
              <Link href='/contacto'className={styles.link}>Contacto</Link>
            </li>
          </ul>
      <div className={styles.social}>
        <Image src={facebookIcon} alt='Facebook TuAutoSeminuevo.com' width={25} height={25} className={styles.icon} />
        <Image src={twitterIcon} alt='Tiwtter TuAutoSeminuevo.com' width={25} height={25} className={styles.icon}/>
        <Image src={instagramIcon} alt='Instagram TuAutoSeminuevo.com' width={25} height={25} className={styles.icon}/>
      </div>
      </div>
    </div>
  )
}

export default Footer