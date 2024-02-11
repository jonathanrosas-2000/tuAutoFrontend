'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import principalIcon from '@/assets/Logo.svg'
import hamburguerIcon from '@/assets/icons/hamburguer.svg'
import closeIcon from '@/assets/icons/close.svg'
import homeIcon from '@/assets/icons/home.svg'
import contactIcon from '@/assets/icons/contact.svg'
import cartIcon from '@/assets/icons/cart.svg'
import faqIcon from '@/assets/icons/faq.svg'
import aboutUsIcon from '@/assets/icons/aboutUs.svg'

const Header = () => {
  const [collapsedMenu, setCollapsedMenu] = useState<boolean>(false);
  const handleActivateMenuMobile = () => {
    setCollapsedMenu(!collapsedMenu);
  }

  return (
    <>
      <div className={styles.mobileMenu}>
        <Link href={'/'}><Image src={principalIcon} alt='Tu auto seminuevo logo' className={styles.icon}/></Link>
        <Image src={hamburguerIcon} alt='Hamburger menu' width={30} height={30} onClick={handleActivateMenuMobile} />
      </div>
      <div className={styles.desktopMenu}>
        <Link href={'/'}><Image src={principalIcon} alt='Tu auto seminuevo logo' className={styles.icon}/></Link>
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
      </div>
      {collapsedMenu && (
        <div className={styles.hiddenMenu}>
          <div className={styles.title}>
            <Image src={principalIcon} alt='Tu auto seminuevo logo' className={styles.icon}/>
            <Image src={closeIcon} alt='Close menu items' width={30} height={30} onClick={handleActivateMenuMobile} />
          </div>
          <ul className={styles.menu}>
            <li className={styles.items}>
              <Link href='/'className={styles.link}>
                <Image src={homeIcon} alt='Hamburger menu' width={25} height={25} />
                <span>Home</span>
              </Link>
            </li>
            <li className={styles.items}>
              <Link href='/tienda'className={styles.link}>
                <Image src={cartIcon} alt='Hamburger menu' width={25} height={25} />
                <span>Tienda</span>
              </Link>
            </li>
            <li className={styles.items}>
              <Link href='/nosotros'className={styles.link}>
                <Image src={aboutUsIcon} alt='Hamburger menu' width={25} height={25} />
                <span>Nosotros</span>
              </Link>
            </li>
            <li className={styles.items}>
              <Link href='/faqs'className={styles.link}>
                <Image src={faqIcon} alt='Hamburger menu' width={25} height={25} />
                <span>FAQs</span>
              </Link>
            </li>
            <li className={styles.items}>
              <Link href='/contacto'className={styles.link}>
                <Image src={contactIcon} alt='Hamburger menu' width={25} height={25} />
                <span>Contacto</span>
              </Link>
            </li>
          </ul>
          <div className={styles.legal}>
            <Link href='/aviso'>Avios de privacidad</Link>
            <Link href='/politica'>Politica de uso</Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Header