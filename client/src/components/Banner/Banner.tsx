import React from "react";
import styles from "./Banner.module.css";

export interface BannerProps {
  name?: string;
}

export default function Banner(props: BannerProps) {
  return <div className={styles.BannerComponent}>
    <p>{props.name}</p>
  </div>;
}
