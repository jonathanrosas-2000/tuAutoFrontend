import Image from 'next/image'
import styles from './styles.module.css'

const SimpleDetail = ({ icon, text}:{icon:any; text: string}) => {
  return (
    <div className={styles.simpleContainer}>
        <div className={styles.content}>
            <Image src={icon} alt="check" width={25} height={25} />
            <p className={styles.text}>{text}</p>
        </div>
    </div>
  )
}

export default SimpleDetail