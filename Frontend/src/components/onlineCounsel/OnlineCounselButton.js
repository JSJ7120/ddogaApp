import React from "react";
import style from "./styles/OnlineCounselButton.module.css";

const OnlineCounselButton = ({ item, answer, setAnswer, name }) => {
  const boxButton = answer[name] === item ? `${style.boxButton} ${style.selectBoxButton}` : style.boxButton;

  return (
    <>
      <button
        key={item}
        onClick={(e) => setAnswer({ ...answer, [name]: e.currentTarget.innerText })}
        className={boxButton}
      >
        <div className={style.cycle} />
        {item}
      </button>
    </>
  );
};

export default OnlineCounselButton;
