import React from "react";
import style from "./styles/DetailCenterCost.module.css";
import arrow from "../../assets/icon/serviceDetail/arrow_tail_blue.svg";
import { Link } from "react-router-dom";

const DetailCenterCost = () => {
  return (
    <div className={style.box}>
      <p>예상비용</p>
      <Link to="/service/5/detail/expect">
        <div className={style.cost}>
          <div>
            <p className={style.costInfo}>
              <span>일</span>
              <span className={style.strongBlue}>
                2,428<span className={style.strong}>원</span>
              </span>
              <span className={style.strong}>~</span>
              <span className={style.strongBlue}>
                9,750<span className={style.strong}>원</span>
              </span>
            </p>
            <p className={style.etc}>
              일반 <span>/ </span>기타 비급여 항목 제외
            </p>
          </div>
          <img src={arrow} className={style.arrow} alt="right-arrow" />
        </div>
      </Link>
    </div>
  );
};

export default DetailCenterCost;
