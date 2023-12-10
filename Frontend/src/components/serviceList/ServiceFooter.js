import React from "react";
import style from "./styles/ServiceFooter.module.css";

const ServiceFooter = ({ area, length }) => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <span>{area.area}</span>
        <span className={style.space}>{">"}</span>
        <span>{area.district}</span>
        <span className={style.space}>{">"}</span>
        <span>{length}</span>
        <span className={style.noColor}>개의 검색결과</span>
      </div>
    </div>
  );
};

export default ServiceFooter;
