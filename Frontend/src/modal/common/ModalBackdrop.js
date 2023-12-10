import React from "react";
import style from "./ModalBackdrop.module.css";

const ModalBackdrop = ({ close, css }) => {
  return <div className={style.backdrop} onClick={close} style={{ ...css }} />;
};

export default ModalBackdrop;
