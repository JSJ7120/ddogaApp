import React, { useEffect } from "react";
import style from "./styles/OnlineCounselQuestion.module.css";
import { QuestionUI } from "../../assets/data/uiData";

const OnlineCounselQuestion = ({ step, transition, setTranstion }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTranstion(style.transition);
    }, 100);

    return () => clearTimeout(timeOut);
  }, [step]);

  return (
    <div className={style.wrap}>
      <div className={`${style.box} ${transition}`}>
        <p className={style.text}>{QuestionUI[step]?.title}</p>
        {QuestionUI[step]?.title === "문의 내용을 입력해 주세요" && (
          <p className={style.subText}>
            어르신 신체 및 인지상태를 구체적으로
            <br />
            작성해주시면 더욱 자세한 상담이 가능해요
          </p>
        )}
        <img src={QuestionUI[step].icon} alt="icons" className={style.icon} />
      </div>
    </div>
  );
};

export default OnlineCounselQuestion;
