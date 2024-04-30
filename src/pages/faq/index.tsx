import PrincipalLayout from "@/layout/PrincipalLayout"
import '@/styles/globals.css';
import styles from './faq.module.css'
import frequentQuestions from '../../data/questions';

const FAQ = () => {
  return (
    <PrincipalLayout>
        <div>
            <div className={styles.header}>Preguntas Frecuentes</div>
            <div className={styles.content}>
                {
                    frequentQuestions.map((question, index) => (
                        <details key={index}>
                            <summary className={styles.title}>{question.question}</summary>
                            <p className={styles.description}>
                                {question.response}
                            </p>
                        </details>
                    ))
                }
            </div>
        </div>
    </PrincipalLayout>
  )
}

export default FAQ