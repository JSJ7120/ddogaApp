import React from "react";
import style from "./styles/QAHeader.module.css";
import back from "../../assets/icon/common/newBack.svg";
import { headerIcon } from "../../assets/data/uiImg";

const QAHeader = ({ navigate }) => {
  return (
    <header className={style.header}>
      <div className={style.box}>
        <button className={style.back}>
          <img src={back} alt="back" onClick={() => navigate(-1)} />
        </button>
        <div className={style.icons}>
          <button onClick={() => navigate("/")}>
            <img src={headerIcon.home} alt="home" />
          </button>
          <button>
            <img src={headerIcon.search} alt="search" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default QAHeader;
