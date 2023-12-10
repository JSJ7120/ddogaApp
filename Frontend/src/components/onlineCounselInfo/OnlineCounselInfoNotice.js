import React from "react";
import style from "./styles/OnlineCounselInfoNotice.module.css";

const OnlineCounselInfoNotice = () => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <p className={style.notice}>안내사항 (꼭 확인하세요!)</p>
        <div className={style.text}>
          <p>
            장기요양등급 여부와 기초생활수급자, 본인감경 대상 여부, 질병명을 미리 확인하시면 빠르게 상담을 남기실 수
            있어요. (모르셔도 괜찮아요)
          </p>
          <p>접수하신 상담은 또하나의가족 상담사례로 활용될 수 있어요. (개인정보는 공개되지 않아요)</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineCounselInfoNotice;
