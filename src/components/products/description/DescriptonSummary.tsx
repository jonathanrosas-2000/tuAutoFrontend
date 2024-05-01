import SummaryContainer from "@/layout/SummaryContainer";
import SummaryTitle from "../summarytitle/SummaryTitle";
import styles from './styles.module.css'

const DescriptionSummary = ({ description }: { description: string }) => {
  const htmlObject = { __html: description.replace(/\n/g, '<br>') };

  return (
    <div>
      <SummaryTitle title='Descripción' />
      <SummaryContainer>
        <div dangerouslySetInnerHTML={htmlObject} className={styles.text}></div>
      </SummaryContainer>
    </div>
  );
};



export default DescriptionSummary