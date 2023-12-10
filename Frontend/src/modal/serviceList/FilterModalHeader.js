import React from "react";
import closeIcon from "../../assets/icon/common/close.svg";
import style from "./styles/FilterModalHeader.module.css";

const FilterModalHeader = ({ close }) => {
  return (
    <div className={style.header}>
      <h4>검색 옵션</h4>
      <img src={closeIcon} alt="close" onClick={close} />
    </div>
  );
};

export default FilterModalHeader;
