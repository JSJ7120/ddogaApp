import React from "react";
import style from "./styles/FilterModalFooter.module.css";

const FilterModalFooter = ({ setSelect, search }) => {
  return (
    <div className={style.footer}>
      <button className={style.init} onClick={() => setSelect([])}>
        초기화
      </button>
      <button className={style.search} onClick={search}>
        검색하기
      </button>
    </div>
  );
};

export default FilterModalFooter;
