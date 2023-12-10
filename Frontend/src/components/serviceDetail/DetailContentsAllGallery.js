import React from "react";
import style from "./styles/DetailContentsAllGallery.module.css";
import { Link } from "react-router-dom";

const DetailContentsAllGallery = ({ preview, Data, id }) => {
  const view = preview ? style.preview : style.viewAll;

  return (
    <div className={`${style.photoBox} ${view}`}>
      {Data?.map((item, key) => {
        return (
          <Link to={`/service/detail/${id}/gallery?noticeId=${item.noticeId}`} key={key} className={style.photoinfo}>
            <div className={style.photo}>
              <img src={item.thumbNail} alt={item.title} />
            </div>
            <p className={style.text}>{item.title}</p>
            {Data?.length >= 2 && (
              <>
                <div className={`${style.mlutiImgs} ${style.multiImgs_1}`} />
                <div className={`${style.mlutiImgs} ${style.multiImgs_2}`} />
              </>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default DetailContentsAllGallery;
