import React from "react";
import style from "./styles/ExpectedCostHeader.module.css";
import back from "../../assets/icon/common/newBack.svg";
import { useNavigate, useParams } from "react-router-dom";

const ExpectedCostHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={style.wrap}>
      <div className={style.box}>
        <button>
          <img src={back} alt="back" className={style.back} onClick={() => navigate(-1)} />
        </button>
        <p className={style.text}>예상비용 상세보기</p>
      </div>
    </header>
  );
};

export default ExpectedCostHeader;
