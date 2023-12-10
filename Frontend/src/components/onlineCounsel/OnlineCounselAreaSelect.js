import React from "react";
import style from "./styles/OnlineCounselAreaSelect.module.css";
import areaJSON from "../../assets/data/json/fullArea.json";

const OnlineCounselAreaSelect = ({ area, selectCate, isSejong }) => {
  const contents = (id, onClick, item) => {
    return (
      <p id={id} key={item} onClick={onClick} className={area[id].text === item ? style.selectWord : style.word}>
        {item}
      </p>
    );
  };

  return (
    <div className={style.selectBox}>
      {area.si.click &&
        Object.keys(areaJSON).map((item) => {
          return contents("si", selectCate, item);
        })}
      {area.gu.click &&
        !isSejong &&
        Object.keys(areaJSON[area.si.text]).map((item) => {
          return contents("gu", selectCate, item);
        })}
      {area.dong.click &&
        !isSejong &&
        areaJSON[area.si.text][area.gu.text].map((item) => {
          return contents("dong", selectCate, item);
        })}
      {area.dong.click &&
        isSejong &&
        areaJSON[area.si.text].map((item) => {
          return contents("dong", selectCate, item);
        })}
    </div>
  );
};

export default OnlineCounselAreaSelect;
