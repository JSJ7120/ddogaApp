import React from "react";
import style from "./styles/OnlineCounselInfoFooter.module.css";
import { Link } from "react-router-dom";

const OnlineCounselInfoFooter = ({ title, id, navId }) => {
  return (
    <footer className={style.wrap}>
      <div className={style.box}>
        <Link to={`/counsel/${title}?id=${id}&navId=${navId}`}>{title}에 상담하기</Link>
      </div>
    </footer>
  );
};

export default OnlineCounselInfoFooter;
