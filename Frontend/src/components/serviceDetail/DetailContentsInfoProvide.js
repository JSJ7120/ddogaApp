import React from "react";
import style from "./styles/DetailContentsInfoProvide.module.css";

const DetailContentsInfoProvide = () => {
  return (
    <div className={style.wrap}>
      <p>정보 제공</p>
      <p>
        또하나의가족에서 제공하는 요양시설 정보는&nbsp;
        <span>
          국민건강보험공단 노인장기요양보험(
          <a href="https://longtermcare.or.kr/">https://longtermcare.or.kr</a>)
        </span>
        홈페이지와 해당 요양시설이 <span>'또하나의가족 파트너스'</span>에 직접 등록한 정보 기반입니다.
      </p>
    </div>
  );
};

export default DetailContentsInfoProvide;
