import React from 'react';
import styles from './TrainerList.module.css';


export interface TrainerListProps {
    trainers: Array<any>
}

export default function TrainerList(props: TrainerListProps) {
    return (
        <div className={styles.TrainerListComponent}>
        </div>
    );
}