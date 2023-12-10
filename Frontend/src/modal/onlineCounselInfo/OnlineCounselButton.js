import React from "react";
import style from "./styles/OnlineCounselButton.module.css";

const OnlineCounselButton = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} className={style.button} disabled={disabled}>
      {text}
    </button>
  );
};

export default OnlineCounselButton;
