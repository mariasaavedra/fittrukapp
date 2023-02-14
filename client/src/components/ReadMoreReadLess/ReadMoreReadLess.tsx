import React, { useState } from 'react';
import styles from './ReadMoreReadLess.module.css';

export interface ReadMoreReadLessProps {
    description: string;
    textLimit: number;
}

export default function ReadMoreReadLess(props: ReadMoreReadLessProps) {

    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }

    return (
        <div className={styles.ReadMoreReadLessComponent}>
             <p className={styles.mobile}>
            {isReadMoreShown ? 
                props.description : 
                props.description.substring(0, props.textLimit)}
                <button 
                    className={styles.readMoreButton}
                    onClick={toggleBtn}>
                        {isReadMoreShown ? 'Read Less' : '...Read More'}
                </button>
            </p>
            <p className={styles.desktop}>
                {props.description}
            </p>

        </div>
    );
}