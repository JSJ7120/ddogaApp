import React, { useState } from "react";
import useApplyTransition from "../../hooks/useApplyTransition";
import closeIcon from "../../assets/icon/common/close.svg";
import style from "./styles/DetailContentsWrap.module.css";

const DetailContentsWrap = ({ modal, setModal, title, children }) => {
  const transtion = useApplyTransition(style.transtion);
  const [reverseTranstion, setReverseTranstion] = useState("");

  const close = (e) => {
    if (e.target !== e.currentTarget) return;
    setReverseTranstion(style.reverseTranstion);
    setTimeout(() => {
      setModal(!modal);
    }, 300);
  };

  return (
    <div className={`${style.backdrop} ${reverseTranstion}`} onClick={close}>
      <div className={`${style.wrap} ${transtion}`}>
        <div className={style.head}>
          <p>{title}</p>
          <img src={closeIcon} alt="close" onClick={close} />
        </div>
        <div className={style.box}>{children}</div>
      </div>
    </div>
  );
};

export default DetailContentsWrap;
