import PrincipalLayout from "@/layout/PrincipalLayout";
import "@/styles/globals.css";
import styles from "./faq.module.css";
import frequentQuestions from "../../data/questions";
import { SeoMeta } from "@/components";

const FAQ = () => {
  return (
    <PrincipalLayout>
      <SeoMeta
        title="Preguntas Frecuentes sobre nuestros coches"
        description="Encuentra respuestas a tus preguntas sobre coches seminuevos, coches de calidad y coches baratos. Obtén toda la información necesaria para comprar el coche perfecto para ti."
        keywords={[
          "coches seminuevos",
          "coches de calidad",
          "coches baratos",
          "FAQ coches seminuevos",
          "preguntas frecuentes coches",
        ]}
        subject="Preguntas Frecuentes sobre Coches Seminuevos y Calidad"
      />

      <div>
        <div className={styles.header}>Preguntas Frecuentes</div>
        <div className={styles.content}>
          {frequentQuestions.map((question, index) => (
            <details key={index}>
              <summary className={styles.title}>{question.question}</summary>
              <p className={styles.description}>{question.response}</p>
            </details>
          ))}
        </div>
      </div>
    </PrincipalLayout>
  );
};

export default FAQ;
