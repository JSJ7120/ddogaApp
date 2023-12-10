import React from "react";
import style from "./styles/DetailContentsProfileBackdrop.module.css";

const DetailContentsProfileBackdrop = ({ children }) => {
  return <div className={style.backdrop}>{children}</div>;
};

export default DetailContentsProfileBackdrop;
