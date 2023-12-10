import React from "react";
import style from "./styles/ExpectedCostNotice.module.css";
import { Link } from "react-router-dom";

const ExpectedCostNotice = () => {
  return (
    <div className={style.notice}>
      <p>안내사항</p>
      <p>예상비용은 실제 금액과 차이가 있을 수 있으니</p>
      <p>
        반드시 해당 시설과 상담해 보세요. <Link>전화 상담하기</Link>
      </p>
    </div>
  );
};

export default ExpectedCostNotice;
