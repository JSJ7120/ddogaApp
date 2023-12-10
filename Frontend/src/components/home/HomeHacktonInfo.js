import React from "react";
import style from "./styles/HomeHacktonInfo.module.css";
import HacktonLogo from "../../assets/icon/home/hackton_logo.svg";

const show = (toggleHandle) => {
  return (
    <div onClick={toggleHandle} className={style.more}>
      핵톤프로젝트 자세히보기 <span>▲</span>
    </div>
  );
};

const hide = (toggleHandle) => {
  return (
    <div onClick={toggleHandle} className={style.more}>
      핵톤프로젝트 자세히보기 <span>▼</span>
    </div>
  );
};

const HomeHacktonInfo = ({ size, toggle, toggleHandle }) => {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.box}>
          <div className={style.logo}>
            <img src={HacktonLogo} alt="Hactkonlogo" />
          </div>
          {size && toggle && show(toggleHandle)}
          {size && !toggle && hide(toggleHandle)}
          <div className={toggle ? `${style.info} ${style.visible}` : `${style.info} ${style.hidden}`}>
            <div>
              <span>대표 : 이동대 </span>
              <span className={style.space}>|</span>
              <span>사업자등록등록번호 : 105-88-16294</span>
              <span className={style.space}>|</span>
              <span>이메일 : ddoga@hectonproject.com</span>
            </div>
            <div>
              <span>전화 : 02-782-9840</span>
              <span className={style.space}>|</span>
              <span>서울특별시 영등포구 여의대로 108 (여의도동, 파크원) 타워2 31층</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHacktonInfo;
