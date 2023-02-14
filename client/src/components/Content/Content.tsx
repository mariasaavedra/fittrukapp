import React from 'react';
import { ParentComponentProps } from '../../interfaces/ParentComponentProps';
import styles from './Content.module.css';

export default function Content(props: ParentComponentProps) {
    return (
        <div className={styles.ContentComponent + ' max-w-100 md:max-w-[calc(100vw-220px)]'}>
            {props.children}
        </div>
    );
}