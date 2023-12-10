import React, { useState } from "react";
import style from "./styles/SearchModal.module.css";
import useApplyTransition from "../../hooks/useApplyTransition";
import back from "../../assets/icon/serviceList/back.svg";

const SearchModal = ({ searchModal, setSearchModal }) => {
  const transtion = useApplyTransition(style.transtion);
  const [reverseTranstion, setReverseTranstion] = useState();

  const close = (e) => {
    if (e.target !== e.currentTarget) return;
    setReverseTranstion(style.reverseTranstion);
    setTimeout(() => {
      setSearchModal(!searchModal);
    }, 300);
  };

  return (
    <div className={`${style.backdrop} ${transtion} ${reverseTranstion}`} onClick={close} style={{ height: "90%" }}>
      <div className={style.wrap}>
        <div className={style.head}>
          <img src={back} alt="back" className={style.back} onClick={(e) => close(e)} />
          <input type="serach" placeholder="시설명을 입력하세요 (2자 이상)" />
        </div>
        <div className={style.result}>
          <p className={style.text}>검색된 시설이 없습니다</p>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
