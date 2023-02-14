import React from "react";
import ClassCard from "../ClassCard/ClassCard";
import styles from "./ClassCardList.module.css";

export interface ClassCard {
  id: string | number;
  start_time: Date;
  title: string;
  level: string;
  location: string;
  capacity: string;
  seats: number;
  price: string | number;
  onEdit: void | Function;
}

export interface ClassCardListProps {
  onEdit: void | Function;
  classes: Array<ClassCard>;
  isAdmin?: boolean;
}

export default function ClassCardList(props: ClassCardListProps) {
  const displayClasses = () => {
    return props.classes && props.classes.length > 0;
  };
  return (
    <div className={styles.ClassCardListComponent}>
      {displayClasses() &&
        props.classes?.map((classObj: ClassCard, i: number) => {
          return (
            <ClassCard
              key={i}
              id={classObj.id}
              startTime={classObj.start_time}
              title={classObj.title}
              level={classObj.level}
              location={classObj.location}
              capacity={classObj.capacity}
              seats={classObj.seats}
              price={classObj.price}
              isAdmin={props.isAdmin}
              onEdit={props.onEdit}
            ></ClassCard>
          );
        })}
    </div>
  );
      }
