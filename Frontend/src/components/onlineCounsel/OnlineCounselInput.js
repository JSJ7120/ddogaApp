import React from "react";
import style from "./styles/OnlineCounselInput.module.css";
import remove from "../../assets/icon/onlineCounsel/remove.svg";

const OnlineCounselInput = ({ value, keys, onChange, toggle, placeholder, initValue }) => {
  return (
    <>
      <div className={style.box}>
        <input
          id={keys}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={"50"}
          disabled={toggle && true}
        />
        {value && <img src={remove} alt="removebutton" onClick={() => initValue(keys)} />}
      </div>
    </>
  );
};

export default OnlineCounselInput;
