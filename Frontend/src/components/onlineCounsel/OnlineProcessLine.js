import React from "react";
import style from "./styles/OnlineProcessLine.module.css";

const OnlineProcessLine = ({ width, opacity }) => {
  return (
    <div className={style.wrap}>
      <div className={style.line} />
      <div className={style.process} style={{ width: `${width}%`, opacity }} />
    </div>
  );
};

export default OnlineProcessLine;
