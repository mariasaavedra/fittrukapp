import React, { useEffect, useState } from "react";
import NavItem from "../NavItem/NavItem";
import styles from "./Sidebar.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export interface SidebarProps { }

export default function Sidebar(props: SidebarProps) {
  const { user, isLoading } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3333/users/${user.id}`).then(async (response) => {
        if (response.status !== 200) {
          throw Error("Unable to load user");
        } else {
          const user = await response.json();
          if (user.role_id === 1 || user.role_id === 2) {
            setIsAdmin(true);
          }
        }
      });
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles.SidebarComponent}>
      {/* <Logo></Logo> */}
      <Link href="/">
        <img src={"/images/logo.png"} height="auto" className="p-8" alt="Logo" />
      </Link>

      {user && (
        <>
          {isAdmin && (
            <>
              <NavItem
                label={"Users"}
                icon={<img src="/images/icons/user_icon.png"></img>}
                anchor={"/admin/users"}
              ></NavItem>
              <NavItem
                label={"Trainers"}
                icon={<img src="/images/icons/trainers_icon.png"></img>}
                anchor={"/admin/trainers"}
              ></NavItem>
              <NavItem
                label={"Classes"}
                icon={<img src="/images/icons/class_list_icon.png"></img>}
                anchor={"/member/classes"}
              ></NavItem>
              <NavItem
                label={"History"}
                icon={<img src="/images/icons/history_icon.png"></img>}
                anchor={"/member/history"}
              ></NavItem>
            </>
          )}
          {!isAdmin && (
            <>
              <NavItem
                label={"Classes"}
                icon={<img src="/images/icons/class_list_icon.png"></img>}
                anchor={"/member/classes"}
              ></NavItem>
              <NavItem
                label={"History"}
                icon={<img src="/images/icons/history_icon.png"></img>}
                anchor={"/member/history"}
              ></NavItem>
            </>
          )}

          {/* Bottom Anchored Items */}
          <div className="absolute bottom-0">
            <NavItem
              label={"Profile"}
              icon={<img src="/images/icons/history_icon.png"></img>}
              anchor={"/auth/profile"}
            ></NavItem>

            <NavItem
              label={"Log Out"}
              icon={<img src="/images/icons/history_icon.png"></img>}
              anchor={"/api/auth/logout"}
            ></NavItem>
          </div>
        </>
      )}
    </div>
  );
}
