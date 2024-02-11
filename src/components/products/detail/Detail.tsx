import Image from 'next/image';
import styles from './styles.module.css'

const Detail = ({ icon, title, content}: { icon: any; title: string; content: string | number; }) => {
  return (
    <div className={styles.element}>
        {icon && (
          <Image src={icon} alt={`Icono de ${title} con ${content}`} width={35} height={35} className={styles.image} />
        )}
        <div className={styles.content}>
            <p className={styles.title}>{title}</p>
            <p className={styles.content}>{content}</p>
        </div>
    </div>
  )
}

export default Detail