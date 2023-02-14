import React from "react";
import styles from "./Logo.module.css";
import Image from "next/image";
import Link from "next/link";

export interface LogoProps { }

export default function Logo(props: LogoProps) {
  return (
    <div className={styles.LogoComponent}>
      <Link href="/">
        <Image
          src={"/images/logo.png"}
          layout="fill"
          width='500px'
          height="500px"
          objectFit='contain'
          alt="Logo"
        />

      </Link>

    </div>
  );
}
