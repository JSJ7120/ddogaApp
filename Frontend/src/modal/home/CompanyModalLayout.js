import React from "react";
import style from "./styles/CompanyModalLayout.module.css";
import useApplyTransition from "../../hooks/useApplyTransition";

const CompanyModalLayout = ({ children, close }) => {
  const transition = useApplyTransition(style.transition);

  return (
    <div className={style.display}>
      <div className={`${style.wrap} ${transition}`}>
        <div className={style.box}>
          <div className={style.scrollBox}>{children}</div>
          <button className={style.close} onClick={close}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyModalLayout;
