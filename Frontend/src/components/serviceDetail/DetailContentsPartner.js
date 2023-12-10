import React from "react";
import style from "./styles/DetailContentsPartner.module.css";
import partner from "../../assets/icon/serviceDetail/Partner.svg";

const DetailContentsPartner = () => {
  return (
    <div className={style.wrap}>
      <a href="https://biz.ddoga.co.kr/" target="_blank" rel="noopener noreferrer">
        <div className={style.box}>
          <div>
            <p>시설 관계자이신가요?</p>
            <p>
              또하나의 가족 파트너스에서
              <br />
              무료로 시설 정보를 관리해 보세요
            </p>
          </div>
          <img src={partner} alt="logo" />
        </div>
      </a>
    </div>
  );
};

export default DetailContentsPartner;
