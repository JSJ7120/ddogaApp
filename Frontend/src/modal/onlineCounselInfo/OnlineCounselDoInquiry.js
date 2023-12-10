import React, { useEffect, useState } from "react";
import style from "./styles/OnlineCounselDoInquiry.module.css";
import useApplyTransition from "../../hooks/useApplyTransition";
import OnlineCounselPhoneNum from "./OnlineCounselPhoneNum";
import { useDispatch } from "react-redux";
import { sendCousenlData } from "../../store/OnlineCounselSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const OnlineCounselDoInquiry = ({ setModal, answer }) => {
  const dispatch = useDispatch();
  const transtion = useApplyTransition(style.transtion);
  const [reverseTranstion, setReverseTranstion] = useState();
  const [nextPage, setNextPage] = useState(false);
  const [phoneNum, setPhoneNum] = useState();

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    setPhoneNum("");
  }, []);

  const modalClose = (e) => {
    if (e.target !== e.currentTarget) return;
    setReverseTranstion(style.reverseTranstion);
    setPhoneNum("");
    setTimeout(() => {
      setModal(false);
    }, 300);
  };
  const phoneNumHandle = (e) => {
    const { value } = e.target;

    const numVal = value.replace(/\D/g, "");

    setPhoneNum(numVal);
  };

  const sendData = (e) => {
    dispatch(sendCousenlData({ answer, phoneNum, id }));
    navigate(`/counselDone/${id}`);
  };

  const IsMemberComponent = () => {
    return (
      <div className={style.flexWrap}>
        <div className={style.flexBox}>
          <div className={style.textBox}>
            <p>아직 또가 회원이 아니신가요?</p>
            <p>이미 또하나의가족이시라면 로그인 해 주세요</p>
          </div>
          <div className={style.buttonBox}>
            <button>로그인 / 회원가입 후 접수하기</button>
            <button onClick={() => setNextPage(!nextPage)}>비회원 접수하기</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`${style.wrap} ${reverseTranstion}`} onClick={modalClose}>
        <div className={`${transtion} ${style.box}`}>
          {!nextPage && <IsMemberComponent />}
          {nextPage && (
            <OnlineCounselPhoneNum
              nextPage={nextPage}
              setNextPage={setNextPage}
              phoneNumHandle={phoneNumHandle}
              phoneNum={phoneNum}
              sendData={sendData}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OnlineCounselDoInquiry;
