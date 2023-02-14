import React from 'react';
import styles from "./VideoPlayer.module.css";

export interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer(props:VideoPlayerProps) {
    return (
      <div className={styles.videoContainer}>
        <video className={styles.video} src={props.src} controls></video>
      </div>
    );  
}