import React from "react";
import style from "./styles/ExpectedCostCalc.module.css";

const ExpectedCostCalc = ({ result, price, percent }) => {
  return (
    <div className={style.wrap}>
      <div className={style.firstLine}>
        <div>
          <p>급여 요양비</p>
          <p>
            {price}/{percent}부담
          </p>
        </div>
        <p>{result}원</p>
      </div>
      <div className={style.lastLine}>
        <div>
          <p>예상 이용비용</p>
          <p>(1일 기준)</p>
        </div>
        <p>
          <span>일</span> {result}
          <span>원</span>
        </p>
      </div>
    </div>
  );
};

export default ExpectedCostCalc;
