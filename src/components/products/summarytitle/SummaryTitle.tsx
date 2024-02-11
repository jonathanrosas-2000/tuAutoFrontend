import styles from './styles.module.css'

const SummaryTitle = ({title}: {title: string;}) => {
  return (
    <div className={styles.title}>
        {title}
        <div className={styles.bar}></div>
    </div>
  )
}

export default SummaryTitle