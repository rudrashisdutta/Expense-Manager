import classes from "./Card.module.css";
import React from "react";

export default function Card({ className, children }) {
  const card_style = classes.card + " " + className;
  return <div className={card_style}>{children}</div>;
}
