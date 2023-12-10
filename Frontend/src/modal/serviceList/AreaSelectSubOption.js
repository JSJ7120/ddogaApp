import React from "react";
import style from "./styles/AreaSelectSubOption.module.css";

const AreaSelectSubOption = ({ click, sectionHandle, district }) => {
  return (
    <div className={style.wrap}>
      <div className={style.section}>
        {click.map((item) =>
          Object.values(item).map((items, key) => (
            <div className={style.box} onClick={sectionHandle} key={key}>
              <p className={items === district ? `${style.select} ${style.text}` : style.text}>{items}</p>
              <span className={style.arrow}>{">"}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AreaSelectSubOption;
