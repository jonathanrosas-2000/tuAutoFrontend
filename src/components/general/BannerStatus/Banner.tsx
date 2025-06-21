import React from "react";
import styles from "./styles.module.css";
import { BsFillMegaphoneFill } from "react-icons/bs";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

type BannerType = "alert" | "info" | "success" | "warning";

const IconMap: Record<BannerType, React.ElementType> = {
  alert: BsFillMegaphoneFill,
  info: FaInfoCircle,
  success: FaCheckCircle,
  warning: FaExclamationTriangle,
};

interface BannerProps {
  children: React.ReactNode;
  type: BannerType;
}

export default function Banner({ children, type }: BannerProps) {
  const IconComponent = IconMap[type] || BsFillMegaphoneFill;

  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerAlert}>
          <IconComponent
            style={{ marginRight: "8px", verticalAlign: "middle" }}
          />
          <span>Para tu mayor seguridad</span>
        </div>
        <p>{children}</p>
      </div>
    </>
  );
}
