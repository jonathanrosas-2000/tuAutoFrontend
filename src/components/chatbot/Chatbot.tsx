"use client"
import { useState, useEffect } from "react";

//icons
import { SiWhatsapp } from "react-icons/si";

//css
import styles from "./chatbot.module.css";

const Chatbot = ({ message }: { message: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Función para mostrar el tooltip al pasar el ratón por encima del botón
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  // Función para ocultar el tooltip al quitar el ratón del botón
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  // Efecto para ocultar automáticamente el tooltip después de 10 segundos
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showTooltip) {
      timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000); // 5 segundos (5000 milisegundos)
    }
    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta o el estado cambia
  }, [showTooltip]);

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        {/* tooltip */}
        <div
          className={styles.tooltip}
        >
          <div className={styles.background}>{message}</div>
          {/* triangle */}
          <div className={styles.triangle}></div>
        </div>
      </div>
      <div
        className={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SiWhatsapp className={styles.icon} />
      </div>
    </div>
  );
};

export default Chatbot;
