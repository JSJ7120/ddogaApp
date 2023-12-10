import React, { useState } from "react";
import style from "./styles/OnlineCounselPhoneNum.module.css";
import back from "../../assets/icon/onlineCounsel/arrow_left.svg";
import right from "../../assets/icon/onlineCounsel/arrow_right.svg";
import OnlineCounselRoot from "./OnlineCounselRoot";
import OnlineCounselButton from "./OnlineCounselButton";

const OnlineCounselPhoneNum = ({ nextPage, setNextPage, phoneNumHandle, phoneNum, sendData }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={style.phoneWrap}>
      <button onClick={() => setNextPage(!nextPage)} className={style.back}>
        <img src={back} alt="back" />
      </button>
      <p className={style.title}>
        연락받을 휴대폰번호를
        <br />
        정확히 입력해 주세요
      </p>

      <input
        type="text"
        onChange={phoneNumHandle}
        value={phoneNum}
        className={style.phoneNum}
        placeholder="예) 01012345678"
        maxLength={11}
      />

      <div className={style.modalBox} onClick={() => setModal(!modal)}>
        <p className={style.text}>
          <span>[필수]</span>
          &nbsp;개인정보 수집 및 이용 동의
        </p>
        <img src={right} alt="right_arrow" />
      </div>
      <OnlineCounselButton text={"동의하고 상담 접수하기"} onClick={sendData} disabled={phoneNum?.length < 11} />

      {modal && <OnlineCounselRoot collectInfoModal={modal} setCollectInfoModal={setModal} />}
    </div>
  );
};

export default OnlineCounselPhoneNum;
