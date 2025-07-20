import React from 'react'
import styles from "./styles.module.css";

interface Benefits {
    title: string;
    description: string;
}

interface Props { title: string; benefits: Benefits[] }

function Benefits(props: Props) {
    const { title, benefits } = props

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.gridLayout}>
                {benefits.map((item: Benefits, index: number) => (
                    <div className={styles.square} key={index}>
                        <span className={styles.circle}>{index + 1}</span>
                        <h3>{item.title}</h3>
                        <p className={styles.paragraph}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefits
