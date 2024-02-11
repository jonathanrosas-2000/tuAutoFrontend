import SummaryContainer from "@/layout/SummaryContainer";
import SummaryTitle from "../summarytitle/SummaryTitle";
import styles from './styles.module.css'

const DescriptonSummary = ({ description } : { description: string;}) => {
  return (
    <div>
      <SummaryTitle title='Descripción' />
      <SummaryContainer>
        <p className={styles.text}>
          {description}
        </p>
      </SummaryContainer>
    </div>
  )
}

export default DescriptonSummary