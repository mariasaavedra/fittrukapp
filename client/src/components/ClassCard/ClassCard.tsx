/* eslint-disable */ 
import React, { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import Button from "../Button/Button";
import styles from "./ClassCard.module.css";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
// ES6 Modules or TypeScript
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'

export interface ClassCardProps {
  id: string | number;
  startTime: Date;
  title: string;
  level: string;
  location: string;
  capacity: string;
  seats: number;
  price: string | number;
  coverUrl?: string;
  isAdmin?: boolean;
  onEdit: void | Function;
}

export default function ClassCard(props: ClassCardProps) {
  const router = useRouter();
  const [days, hours, minutes, seconds] = useCountdown(props.startTime);
  const remove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You're about to permantly delete this event.",
      icon: "error",
      confirmButtonText: "Delete",
      confirmButtonColor: "#333",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:3333/events/${props.id}`, { method: "DELETE" }).then(
          () => (console.log("deleted"))
        );
        Swal.fire("Deleted!", "", "success");
        router.reload();
      }
    });
  };



  return (
    <div className={styles.ClassCardComponent}>
      <Image
        className={"overflow-hidden absolute top-0 left-0 z-[-1]"}
        src={props?.coverUrl || "/images/squares.svg"}
        layout="fill"
        width="500px"
        height="500px"
        objectPosition={-100}
        objectFit="contain"
        alt="background pattern"
      />
      <div className={styles.countdown}>
        <span>{days}d</span>:<span>{hours}h</span>:<span>{minutes}m</span>
      </div>
      <div className="general-details">
        <div className="details">
          <p className={styles.header}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.price}>{props.price}</span>
          </p>
          <p className={styles.level}>{props.level}</p>
          <p className={styles.dateTime + " mt-4"}>
            <span className={styles.date}>13/06/2022</span>
            <span className={styles.duration}>2 Hours</span>
          </p>
          <p className={styles.location + " mt-4"}>{props.location}</p>
          <p className={styles.attendance + " mt-4"}>0/{props.capacity}</p>
        </div>

      </div>

      <div className="w-full cursor-pointer z-[100]">
        {props.isAdmin && (
          <>
            <div className="absolute bottom-2 right-2">
              <Link href={`/member/classes/${props.id}`}><span className="bg-gray-400 shadow-md p-2 rounded-full mx-1  text-white">View</span></Link>
              
              <button
                onClick={() => remove()}
                className="bg-red-500 shadow-md p-3 rounded-full mx-1  inline-block"
              >
                <img src="/images/icons/trash_icon.png" />
              </button>
              <button onClick={() => props.onEdit(props)} className="bg-green-500 shadow-md p-3 rounded-full mx-1  inline-block">
                <img src="/images/icons/edit_icon.png" />
              </button>
            </div>
          </>
        )}
        {!props.isAdmin && (
          <>
            <Button stretch={true} backgroundColor="primary">
              <Link href={`/member/classes/${props.id}`}>Register</Link>
            </Button>
          </>
        )}
      </div>

      {/* <button className={styles.button}>Register</button> */}

    </div >
  );
}
