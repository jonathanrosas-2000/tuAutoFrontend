import React from 'react'
import styles from './styles.module.css'

const FixedDetail = ({ prefix, text, sufix}: { text: string; prefix: string; sufix: string;}) => {
  return (
    <div className={styles.text}>
        {prefix}{' '}{text}{' '}{sufix}
    </div>
  )
}

export default FixedDetail