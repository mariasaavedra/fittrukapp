import React from "react";
import styles from "./UserCard.module.css";
import Image from "next/image";
import router from "next/router";
import Swal from "sweetalert2";

export interface UserCardProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  dob: string;
  zip: string;
  state: string;
  onEdit: void | Function;
}

export default function UserCard(props: UserCardProps) {
  const isAdmin = true;

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
        fetch(`http://localhost:3333/users/${props.id}`, { method: "DELETE" }).then(
          () => (console.log("deleted"))
        );
        Swal.fire("Deleted!", "", "success");
        router.reload();
      }
    });
  };

  return (
    <div className={styles.UserCardComponent}>
      <Image
        className={"overflow-hidden absolute top-0 left-0 z-[-1]"}
        src={"/images/user-pattern.svg"}
        layout="fill"
        width="400px"
        height="400px"
        objectPosition={200}
        objectFit="contain"
        alt="background pattern"
      />
      <div className={styles.details}>
        <span className={styles.name}>
          {props.first_name} {props.last_name}
        </span>
        <span className={styles.label}>{props.dob}</span>
        <span className={styles.label}> {props.email}</span>
        <span className={styles.label}>
          {props.city}, {props.city}, {props.zip}
        </span>
        {isAdmin && (
          <>
            <div className="absolute bottom-2 right-2">
              <button onClick={() => remove()} className="bg-red-500 p-1 rounded-full mx-1  inline-block">
                <img src="/images/icons/trash_icon.png" />
              </button>
              <button onClick={() => props.onEdit(props)} className="bg-green-500 p-1 rounded-full mx-1  inline-block">
                <img src="/images/icons/edit_icon.png" />
              </button>
            </div>
          </>
        )}
      </div>
      <div className={styles.photo}>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        ></img>
      </div>
    </div>
  );
}
