import { Grid3x3, TableRows } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import InputSearch from "../InputSearch/InputSearch";
import Title from "../Title/Title";
import ViewToggle from "../ViewToggle/ViewToggle";
import styles from "./Header.module.css";

export interface HeaderProps {
  title: string;
  toggleView?: boolean;
  search?: boolean;
  toggleFn: Function;
}

export default function Header(props: HeaderProps) {
  return (
    <div className={styles.HeaderComponent + ' mt-0 mb-8'}>
      <Title> {props.title || "Example Title"}</Title>
      {/* <InputSearch></InputSearch>
      <ViewToggle displayTableIcon={false} toggleFn={() => {}}></ViewToggle> */}
    </div>
  );
}

Header.defaultProps = {
  toggleFn: () => {},
};
