"use client";
import React, { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import styles from "./chatbot.module.css";
import { encodeText } from "@/helpers/textFunctions";

const Chatbot = ({
  message,
  whatsAppMessage,
}: {
  message: string;
  whatsAppMessage: string;
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleButtonClick = () => {
    window.open(
      `https://wa.me/5215635373026?text=${encodeText(whatsAppMessage)}`,
      "_blank"
    );
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleCloseMessage = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showTooltip) {
      timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [showTooltip]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setShowTooltip(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className={styles.container} onClick={handleButtonClick}>
      <div className={`${styles.message} ${!showTooltip ? styles.hidden : ''}`}>
        {showTooltip && (
          <div className={styles.tooltip}>
            <div className={styles.background}>{message}</div>
          </div>
        )}
      </div>
      <div className={styles.whatsbutton} onMouseEnter={handleMouseEnter}>
        <SiWhatsapp className={styles.icon} />
      </div>
    </div>
  );
};

export default Chatbot;
