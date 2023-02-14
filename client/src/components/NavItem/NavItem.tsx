import Link from "next/link";
import React from "react";
import styles from "./NavItem.module.css";

export interface NavItemProps {
  label: string;
  anchor: string;
  icon?: any;
}

export default function NavItem(props: NavItemProps) {
  return (
    <div className={styles.NavItemComponent}>
      <span>{props?.icon}</span>
      <Link href={props.anchor}>{props.label}</Link>
    </div>
  );
}
