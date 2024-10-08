"use client";
import React, { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import styles from "./chatbot.module.css";
import { encodeText } from '@/helpers/textFunctions';

const Chatbot = ({ message, whatsAppMessage}: { message: string, whatsAppMessage: string }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleButtonClick = () => {
    window.open(`https://wa.me/5215635373026?text=${encodeText(whatsAppMessage)}`, '_blank');

  };

  // Función para mostrar el tooltip al pasar el ratón por encima del botón
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  // Efecto para ocultar automáticamente el tooltip después de 10 segundos
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showTooltip) {
      timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000); // 3 segundos (3000 milisegundos)
    }

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta o el estado cambia
  }, [showTooltip]);

  return (
    <div
      className={styles.container}
      onClick={handleButtonClick}
    >
      <div className={styles.message}>
        {/* Mostrar el tooltip si showTooltip es verdadero */}
        {showTooltip && (
          <div className={styles.tooltip}>
            <div className={styles.background}>{message}</div>
            <div className={styles.triangle}></div>
          </div>
        )}
      </div>
      <div className={styles.button} onMouseEnter={handleMouseEnter}>
        <SiWhatsapp className={styles.icon} />
      </div>
    </div>
  );
};

export default Chatbot;
