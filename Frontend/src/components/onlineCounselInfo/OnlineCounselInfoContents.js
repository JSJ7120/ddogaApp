import React from "react";
import style from "./styles/OnlineCounselInfoContents.module.css";
import { letterIcon } from "../../assets/data/uiImg";

const OnlineCounselInfoContents = ({ title }) => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <p>
          온라인 상담하고
          <br />
          <span>{title}</span>의 <br />
          답변을 받아보세요!
        </p>
        <div className={style.letter_box}>
          <img src={letterIcon.front} alt="front" className={style.letterFront} />
          <img src={letterIcon.letter} alt="letter" className={style.letterBody} />
          <img src={letterIcon.back} alt="back" className={style.letterBack} />
          <img src={letterIcon.effect_1} alt="effect_1" className={style.effect_1} />
          <img src={letterIcon.effect_2} alt="effect_2" className={style.effect_2} />
          <img src={letterIcon.effect_1} alt="effect_1" className={style.effect_3} />
          <img src={letterIcon.effect_1} alt="effect_1" className={style.effect_4} />
          <img src={letterIcon.effect_1} alt="effect_1" className={style.effect_5} />
          <img src={letterIcon.effect_1} alt="effect_1" className={style.effect_6} />
        </div>
      </div>
    </div>
  );
};

export default OnlineCounselInfoContents;
