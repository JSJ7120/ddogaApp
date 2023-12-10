import React from "react";
import style from "./styles/FilterModalSelectButton.module.css";

const FilterModalSelectOption = ({ select, selectHandle, uiText }) => {
  return (
    <div className={style.wrap}>
      {uiText.map((item) => {
        return (
          <button key={item.id} onClick={selectHandle} className={select.includes(item.text) ? style.active : ""}>
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export default FilterModalSelectOption;
