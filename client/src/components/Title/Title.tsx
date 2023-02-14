import React from "react";
import { ParentComponentProps } from "../../interfaces/ParentComponentProps";
import styles from "./Title.module.css";

export default function Title(props: ParentComponentProps) {
  return <div className={styles.TitleComponent}>{props.children}</div>;
}
