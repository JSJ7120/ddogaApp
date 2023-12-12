import React, { useState } from "react";
import style from "./styles/RecommendModal.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import info from "../../assets/images/information.svg";
import check from "../../assets/images/check.svg";
import ServiceModalRoot from "./ServiceModalRoot";
import useApplyTransition from "../../hooks/useApplyTransition";
import ModalBackdrop from "../common/ModalBackdrop";
import { recommendText } from "../../assets/data/uiData";

const RecommendModal = ({ close }) => {
  const [modal, setModal] = useState(false);
  const transition = useApplyTransition(style.transition);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const cateId = searchParams.get("cateId");

  const modalToggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const selectRecommend = (e) => {
    const text = e.target.innerText;
    const sortId = recommendText.filter((item) => item.text === text);

    localStorage.setItem("sortId", sortId[0].id);

    navigate(`/service?cateId=${cateId}&sort=${sortId[0].id}`);
    close();
  };

  return (
    <>
      {modal && <ServiceModalRoot close={modalToggle} recommendInfoModal={modal} />}
      <ModalBackdrop close={close} />
      <div className={style.wrap}>
        <div className={`${style.box} ${transition}`}>
          <div className={style.standard}>
            <p className={style.text}>정렬 기준</p>
            <button className={style.close} onClick={close} />
          </div>
          <div className={style.sort}>
            {recommendText.map((item) => {
              return (
                <div className={style.sortText} key={item.id}>
                  <p onClick={selectRecommend} className={item.id === Number(sort) && style.selectText}>
                    {item.text}
                  </p>
                  {item.id === 10 && (
                    <>
                      <button onClick={modalToggle}>
                        <img src={info} className={style.info} alt="info" />
                      </button>
                    </>
                  )}
                  {item.id === Number(sort) && (
                    <img src={check} className={item.id !== 10 ? style.checkV2 : style.check} alt="check" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendModal;
