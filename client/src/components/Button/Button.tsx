import React from "react";
import { MaybeParentComponentProps } from "../../interfaces/ParentComponentProps";
import styles from "./Button.module.css";

type CallbackFunction = () => void;
type CallbackEventFunction = (e: unknown) => void;

export interface ButtonProps extends MaybeParentComponentProps {
  icon?: string;
  iconPosition?: "right" | "left" | "no-icon" | "icon-only"; // @TODO - add font library.
  backgroundColor?: "primary" | "secondary" | "disabled";
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: CallbackFunction | CallbackEventFunction | undefined;
  url?: string;
  stretch?: boolean;
}

export default function Button(props: ButtonProps) {
  const isUrlAbsolute = (url: string) =>
    url.indexOf("://") > 0 || url.indexOf("//") === 0;

  const goToUrl = () => {
    if (props.url) {
      if (isUrlAbsolute(props.url)) {
        window.open(props.url, "_blank");
      } else {
        //history.push(props.url);
      }
    }
  };

  const getClasses = (): string => {
    const classes = [styles.ButtonComponent];
    if (props.stretch) {
      classes.push("w-full");
    }
    if (props.backgroundColor === "primary") {
      classes.push("bg-green-500");
    }
    if (props.backgroundColor === "secondary") {
      classes.push("bg-green-800");
    }
    if (props.backgroundColor === "disabled") {
      classes.push("bg-green-300");
    }
    return classes.join(" ");
  };

  const hasCallback = () => {
    return (
      (!props.disabled && props.onClick !== null) ||
      (!props.disabled && props.url)
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.blur();
    if (props.type !== "submit") {
      if (props.onClick) {
        // if passed, execute callback.
        props.onClick(e);
      } else if (props.url) {
        // if no callback was passed, go to url.
        goToUrl();
      }
      e.preventDefault();
    }
  };

  return (
    <>
      <button
        className={getClasses()}
        type={props.type}
        onClick={hasCallback() ? (e) => handleClick(e) : undefined}
      >
        {props.children}
      </button>
    </>
  );
}

Button.defaultProps = {
  backgroundColor: "primary",
  type: "button",
};
