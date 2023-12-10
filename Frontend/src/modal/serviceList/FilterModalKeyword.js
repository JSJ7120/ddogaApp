import React from "react";
import style from "./styles/FilterModalKeyword.module.css";

const FilterModalKeyword = ({ select, deleteSelected }) => {
  return (
    <div className={style.box}>
      {select.map((item, key) => (
        <button className={style.button} key={key} onClick={deleteSelected}>
          {item}
          <span className={style.close} />
        </button>
      ))}
    </div>
  );
};

export default FilterModalKeyword;
