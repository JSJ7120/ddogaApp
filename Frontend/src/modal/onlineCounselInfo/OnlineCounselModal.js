import React, { useState } from "react";
import style from "./styles/OnlineCounselModal.module.css";
import useApplyTransition from "../../hooks/useApplyTransition";
import ModalBackdrop from "../common/ModalBackdrop";
import hold from "../../assets/icon/onlineCounselInfo/hold.svg";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const OnlineCounselModal = ({ modal, setModal, next }) => {
  const transtion = useApplyTransition(style.transtion);
  const [reverseTranstion, setReverseTranstion] = useState();
  const [searchParams] = useSearchParams();
  const { title } = useParams();

  const id = searchParams.get("id");
  const navId = searchParams.get("navId");
  const navigate = useNavigate();

  const back = (e) => {
    if (e.target !== e.currentTarget) return;
    setReverseTranstion(style.reverseTranstion);
    setTimeout(() => {
      setModal(false);
      navigate(`/service/detail/${id}?navId=${navId}`);
    }, 300);
  };

  const modalClose = () => {
    setReverseTranstion(style.reverseTranstion);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const HandleNext = () => {
    next ? navigate(`/counsel/${title}?id=${id}&navId=${navId}`) : modalClose();
  };

  return (
    <>
      <ModalBackdrop />
      <div className={`${transtion} ${style.wrap} ${reverseTranstion}`}>
        <div className={style.box}>
          <div className={style.innerBox}>
            <div className={style.contents}>
              <p className={style.text_1}>
                지금 상담을 시작하시면
                <br />
                <span>해당 시설에서</span>
                <br />
                직접 답변해드려요
              </p>
              <p className={style.text_2}>그래도 나가시겠어요?</p>
              <button onClick={HandleNext}>상담 계속하기</button>
              <button onClick={back}>나가기</button>
            </div>
          </div>
        </div>
        <img src={hold} alt="hold_icon" />
      </div>
    </>
  );
};

export default OnlineCounselModal;
