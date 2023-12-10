import React from "react";
import style from "./styles/GalleryListHeader.module.css";
import back from "../../assets/icon/common/newBack.svg";

const GalleryListHeader = ({ navigate }) => {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.box}>
          <img src={back} alt="back" onClick={() => navigate(-1)} />
          <p>갤러리</p>
        </div>
      </div>
    </>
  );
};

export default GalleryListHeader;
