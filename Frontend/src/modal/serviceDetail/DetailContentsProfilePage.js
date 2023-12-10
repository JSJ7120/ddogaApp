import React from "react";
import style from "./styles/DetailContentsProfilePage.module.css";
const DetailContentsProfilePage = ({ cardId, lastID }) => {
  return (
    <div className={style.pagination}>
      <div>
        <span>{cardId}</span>
        <span>/</span>
        <span>{lastID}</span>
      </div>
    </div>
  );
};

export default DetailContentsProfilePage;
