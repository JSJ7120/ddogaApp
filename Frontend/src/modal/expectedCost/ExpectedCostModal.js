import React from "react";
import style from "./ExpectedCostModal.module.css";
import self from "../../assets/image/expectedCost/self_pay_rate.webp";
import DetailContentsWrap from "../serviceDetail/DetailContentsWrap";

const ExpectedCostModal = ({ modal, setModal }) => {
  return (
    <>
      <DetailContentsWrap modal={modal} setModal={setModal} title={"본인 부담률"}>
        <div className={style.box}>
          <p className={style.text}>
            장기요양급여를 이용하게 되면 급여비용이 발생하며, 이용한 총 급여비용의 일부를 수급자 본인이 부담해야 합니다.
          </p>

          <p className={style.textBlue}>
            * <span>국민기초생활보장법에 따른 의료급여 수급자</span>의 본인 부담금은 <span>면제</span>됩니다.
          </p>
          <table className={style.table}>
            <thead>
              <tr>
                <th />
                <th>
                  일반 <br />
                  대상자
                </th>
                <th>
                  40% <br />
                  감경대상자
                </th>
                <th>
                  60% 감경대상자
                  <br /> 기타의료급여 수급권자
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>시설급여</th>
                <th>20%</th>
                <th>12%</th>
                <th>8%</th>
              </tr>
              <tr>
                <th>
                  재가급여 / <br />
                  복지용구
                </th>
                <th>15%</th>
                <th>9%</th>
                <th>6%</th>
              </tr>
            </tbody>
          </table>
          <p className={style.textGray}>예) 재가급여를 이용하는 일반대상자 : 이용한 총 급여비용의 15%를 본인이 부담</p>

          <p className={style.textBlack}>
            장기요양등급을 신청하셨다면 <span>개인별장기요양이용계획서</span>
            에서 <span>본인 부담률</span>을 확인하실 수 있어요.
          </p>
          <img src={self} alt="self_pay" className={style.self} />
        </div>
      </DetailContentsWrap>
    </>
  );
};

export default ExpectedCostModal;
