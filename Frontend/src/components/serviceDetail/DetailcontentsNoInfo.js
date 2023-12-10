import React from "react";
import style from "./styles/DetailcontentsNoInfo.module.css";
import empty from "../../assets/icon/serviceDetail/empty_exclam.svg";
import { Link } from "react-router-dom";

const DetailcontentsNoInfo = ({ text, subText, counsel, id, navId, title, isOnline }) => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <img src={empty} alt="empty_img" />
        <p>{text}</p>
        <p>{subText}</p>
      </div>

      {counsel && isOnline && (
        <Link to={`/counsel/info/${title}?id=${id}&navId=${navId}`} className={style.counsel}>
          <div>온라인 상담하기</div>
        </Link>
      )}
    </div>
  );
};

export default DetailcontentsNoInfo;
