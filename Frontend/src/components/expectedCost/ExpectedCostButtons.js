import React from "react";
import style from "./styles/ExpectedCostButtons.module.css";

const ExpectedCostButtons = ({ onclick, text, itemValue, value }) => {
  return (
    <button onClick={onclick} className={itemValue === value ? style.active : style.normal}>
      {text === "15%" ? `${text} (일반)` : text}
    </button>
  );
};

export default ExpectedCostButtons;
