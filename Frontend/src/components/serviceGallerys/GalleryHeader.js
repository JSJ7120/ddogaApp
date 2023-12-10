import React from "react";
import style from "./styles/GalleryHeader.module.css";
import close from "../../assets/icon/serviceGallerys/new_close.svg";

const GalleryHeader = ({ title, back }) => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <p>{title}</p>
        <button>
          <img src={close} alt="closeButton" onClick={back} />
        </button>
      </div>
    </div>
  );
};

export default GalleryHeader;
