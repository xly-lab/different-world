import React from "react";
import style from "./index.module.scss";
export default function Loading() {
  return (
    <div className={style.loadingContainer}>
      <div id={style.preloader6}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
