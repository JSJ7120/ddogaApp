import React from "react";
import style from "./styles/FilterModalListBox.module.css";
import FilterSelectButton from "./FilterModalSelectButton";
import { FilterRankText, FilterProgramText } from "../../assets/data/uiData";

const FilterModalListBox = ({ change, setChange, selectHandle, select }) => {
  const rank = change ? `${style.rank} ${style.selected}` : style.rank;
  const program = change ? style.program : `${style.program} ${style.selected}`;

  return (
    <>
      <div className={style.selectListBox}>
        <div className={style.selectList}>
          <div className={rank} onClick={() => setChange(true)}>
            평가등급
          </div>
          <div className={program} onClick={() => setChange(false)}>
            프로그램
          </div>
        </div>

        <div className={style.selectKeyword}>
          {change ? (
            <FilterSelectButton select={select} selectHandle={selectHandle} uiText={FilterRankText} />
          ) : (
            <FilterSelectButton select={select} selectHandle={selectHandle} uiText={FilterProgramText} />
          )}
        </div>
      </div>
    </>
  );
};

export default FilterModalListBox;
