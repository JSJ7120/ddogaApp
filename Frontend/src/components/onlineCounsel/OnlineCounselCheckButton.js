import React from "react";
import style from "./styles/OnlineCounselCheckButton.module.css";

const OnlineCounselCheckButton = ({ item, toggle, answerHandle, keys }) => {
  const checkButton = toggle ? `${style.checkButton} ${style.selectCheckButton}` : style.checkButton;

  return (
    <>
      <button key={item} onClick={(e) => answerHandle(e, keys)} className={checkButton}>
        <div className={style.cycle} />
        {item}
      </button>
    </>
  );
};

export default OnlineCounselCheckButton;
