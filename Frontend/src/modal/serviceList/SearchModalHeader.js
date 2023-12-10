import React from "react";
import style from "./styles/SearchModalHeader.module.css";
import closeIcon from "../../assets/icon/common/close.svg";

const SearchModalHeader = ({ close, title }) => {
  return (
    <div className={style.header}>
      <h4>{title}</h4>
      <img src={closeIcon} alt="close" onClick={close} />
    </div>
  );
};

export default SearchModalHeader;
