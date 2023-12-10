import React from "react";
import style from "./styles/AreaSelectMainOption.module.css";
import Data from "../../assets/data/json/area.json";

const AreaSelectMainOption = ({ areaHandle, area }) => {
  return (
    <div className={style.area}>
      {Object.keys(Data).map((item, key) => {
        return (
          <p
            onClick={(e) => areaHandle(e, item)}
            className={item === area ? `${style.text} ${style.select}` : style.text}
            key={key}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default AreaSelectMainOption;
