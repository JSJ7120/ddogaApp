import React from "react";
import style from "./styles/DoneFooter.module.css";

const DoneFooter = ({ id, navigate }) => {
  return (
    <footer className={style.wrap}>
      <div className={style.box}>
        <button className={style.buttons} onClick={() => navigate(`/service/detail/${id}?navId=4`)}>
          시설 페이지로 이동
        </button>
      </div>
    </footer>
  );
};

export default DoneFooter;
