import React from "react";
import style from "./styles/OnlineCounselNumberInput.module.css";

const OnlineCounselNumberInput = ({ placeholder, value, keys, birthTextHandle, validate }) => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <input
          id={keys}
          type="text"
          placeholder={placeholder}
          value={value}
          maxLength={"4"}
          onChange={birthTextHandle}
        />
        <p>년 출생</p>
      </div>
      <p className={style.validate}>{validate}</p>
    </div>
  );
};

export default OnlineCounselNumberInput;
