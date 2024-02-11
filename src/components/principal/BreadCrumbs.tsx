import Link from 'next/link'
import React from 'react'
import { StepProps } from '@/types/proptypes'
import styles from './styles.module.css'

const BreadCrumbs = ({ steps }: { steps: StepProps[]}) => {
  return (
    <div className={styles.breadcrumb}>
        {steps.map((step: StepProps, index: number) => (
          <React.Fragment key={index}>
              <Link href={step.link} className={styles.link}>{step.title}</Link>
              {index < steps.length - 1 && <span className={styles.dot}></span>}
          </React.Fragment>
        ))}
    </div>
  )
}

export default BreadCrumbs