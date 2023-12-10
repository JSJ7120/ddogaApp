import React from "react";
import style from "./styles/DetailCenterUtil.module.css";
import { utilIcon } from "../../assets/data/uiImg";

const DetailCenterUtil = () => {
  return (
    <div className={style.box}>
      <div>
        <div className={style.menu}>
          <img src={utilIcon.heart} alt="heart" />
          <p>찜하기</p>
        </div>
        <div className={style.menu}>
          <img src={utilIcon.location} alt="location" />
          <p>위치보기</p>
        </div>
        <div className={style.menu}>
          <img src={utilIcon.home} alt="home" />
          <p>홈페이지</p>
        </div>
        <div className={style.menu}>
          <img src={utilIcon.share} alt="share" />
          <p>공유하기</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCenterUtil;
