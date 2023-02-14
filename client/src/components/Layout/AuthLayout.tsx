import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import Image from "next/image";
import { ParentComponentProps } from "../../interfaces/ParentComponentProps";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

export interface LayoutProps extends ParentComponentProps {}

export default function Layout(props: LayoutProps) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  
  useEffect(() => {
    if (!user && !isLoading) {
      router.replace("member/classes");
    }
  }, [router, user]);


  return (
    <div
      className={
        styles.LayoutComponent + " md:grid-cols-[220px_1fr] container-fluid"
      }
    >
      {props.children}
    </div>
  );
}
