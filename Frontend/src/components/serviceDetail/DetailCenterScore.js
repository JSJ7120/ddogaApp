import React from "react";
import style from "./styles/DetailCenterScore.module.css";
import counselList from "../../assets/icon/serviceDetail/counsel_list.svg";
import reviewList from "../../assets/icon/serviceDetail/review_list.svg";

const DetailCenterScore = ({ counselCount }) => {
  return (
    <div className={style.box}>
      <div>
        <div className={style.counsel}>
          <p>상담사례</p>
          <span className={style.count}>
            <img src={counselList} alt="counselList" /> {counselCount}
          </span>
        </div>
        <div className={style.review}>
          <p>후기</p>
          <span className={style.count}>
            <img src={reviewList} alt="counselList" />
            0.0<span> (0)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailCenterScore;
