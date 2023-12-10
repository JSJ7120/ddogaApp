import React from "react";
import style from "./styles/HomeCounsel.module.css";
import { Link } from "react-router-dom";
import main_counsel_1 from "../../assets/icon/home/main_counsel_1.svg";
import main_counsel_2 from "../../assets/icon/home/main_counsel_2.svg";

const HomeCounsel = () => {
  return (
    <>
      <div className={style.counsel_wrap}>
        <Link to={""}>
          <div className={style.counsel_box}>
            <p>맞춤요양상담</p>
            <p>
              어르신 요양관련 고민·질문 <br />
              무엇이든 상담하세요
            </p>
            <img src={main_counsel_1} alt="맞춤요양상담" />
          </div>
        </Link>
        <Link to={""}>
          <div className={style.counsel_box}>
            <p>복지용구상담</p>
            <p>
              최대 160만원 <br />
              지원혜택을 확인하세요
            </p>
            <img src={main_counsel_2} alt="복지용구상담" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeCounsel;
