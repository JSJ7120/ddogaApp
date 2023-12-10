import React from "react";
import style from "./styles/DetailFooter.module.css";
import heart from "../../assets/icon/serviceDetail/new_heart_off.svg";
import { Link } from "react-router-dom";

const DetailFooter = ({ id, title, navId, isOnline }) => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <button>
          <img src={heart} alt="heart" />
        </button>

        {isOnline && (
          <Link to={`/counsel/info/${title}?id=${id}&navId=${navId}`} className={`${style.counsel} ${style.online}`}>
            온라인 상담
          </Link>
        )}

        <button className={`${style.counsel} ${style.tel}`}>
          <p>전화 상담</p>
        </button>
      </div>
    </div>
  );
};

export default DetailFooter;
