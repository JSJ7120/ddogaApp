import React, { useState } from "react";
import style from "./styles/OnlineCousenlCollectInfo.module.css";
import ModalBackdrop from "../common/ModalBackdrop";
import useApplyTransition from "../../hooks/useApplyTransition";
import OnlineCounselButton from "./OnlineCounselButton";

const OnlineCousenlCollectInfo = ({ modal, setModal }) => {
  const transtion = useApplyTransition(style.transtion);
  const [reverseTranstion, setReverseTranstion] = useState();

  const close = () => {
    setReverseTranstion(style.reverseTranstion);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  return (
    <>
      <ModalBackdrop close={close} css={{ zIndex: "700", backdropFilter: "blur(2px)" }} />
      <div className={style.wrap}>
        <div className={`${transtion} ${style.box} ${reverseTranstion}`}>
          <div className={style.spaceBox}>
            <h1 className={style.title}>개인정보 수집 및 이용 동의 (필수)</h1>
            <p className={style.text}>
              ㈜헥톤프로젝트(이하 "회사")는 원활한 서비스 제공을 위해 다음과 같이 개인정보를 수집 및 이용합니다.
            </p>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>수집 항목</th>
                  <th>이용 목적</th>
                  <th>보유-이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>비회원 온라인 상담</td>
                  <td> (필수) 휴대폰번호</td>
                  <td> 온라인 상담 답변 제공</td>
                  <td> 상담 접수 시점부터 6개월 보관 후 지체없이 파기</td>
                </tr>
              </tbody>
            </table>
            <p className={style.text}>
              정보주체는 본 수집 및 이용 동의를 거부하실 권리가 있으나, 동의를 거부하실 경우 본 서비스 이용에 있어
              제한이 발생할 수 있습니다. 더 자세한 내용은 <span>개인정보처리방침</span>을 참고하시기 바랍니다.
            </p>
          </div>
          <OnlineCounselButton text={"닫기"} onClick={close} />
        </div>
      </div>
    </>
  );
};

export default OnlineCousenlCollectInfo;
