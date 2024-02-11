import Image from 'next/image'
import TitleIcon from '../../assets/title.svg';
import styles from '../../styles/principal/header.module.css'

const Title = ({ title }:{title: string}) => {
  return (
    <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <Image src={TitleIcon} alt='Icono debajo para titulo' width={200} height={20} />
    </div>
  )
}

export default Title