import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <div className={styles.InputComponent}>
      <input
        className={`bg-white text-black rounded-2xl w-full border py-3 px-4 relative right-[6px] 
        ${props.className} 
        ${props.error && "border-error-400"}`}
        {...props}
      />
    </div>
  );
}
