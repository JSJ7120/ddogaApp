import React from "react";
import style from "./styles/DoneContent.module.css";
import complete from "../../assets/icon/onlineCounsel/complete.svg";
import { doneIcons } from "../../assets/data/uiImg";
import { Link } from "react-router-dom";

const DoneContent = () => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <img src={complete} alt="complete" className={style.completeIcon} />
        <p className={style.blueText}>상담이 접수되었습니다!</p>
        <div className={style.textBox}>
          <p>
            상담 내용 확인 후 24시간 이내에 답변을 드려요. <br />
            (평일 10:00 ~ 17:00 | 주말, 공휴일 제외)
          </p>
          <p>답변 알림은 카카오톡으로 제공돼요.</p>
          <p>
            마이또가 {">"} 나의 상담에서 상담 내역을 확인하실 수<br />
            있어요. (비회원 제외)
          </p>
        </div>
        <div className={style.customerBox}>
          <p className={style.blackText}>궁금하신 사항은 고객센터로 문의주세요</p>
          <p className={style.text}>상담 가능 시간 평일 10:00 ~ 17:00</p>

          <div className={style.linkBox}>
            <Link to={""}>
              <img src={doneIcons.kakao} alt="kakao" className={style.icons} />
              <p className={style.linkText}>카카오톡 문의</p>
            </Link>
            <Link to={""}>
              <img src={doneIcons.mail} alt="mail" className={style.icons} />
              <p className={style.linkText}>ddoga@hectonproject.com</p>
            </Link>
            <Link to={""}>
              <img src={doneIcons.call} alt="call" className={style.icons} />
              <p className={style.linkText}>02-782-9840</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoneContent;
