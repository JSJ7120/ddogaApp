import React from "react";
import style from "./styles/GalleryListContents.module.css";
import DetailContentsGallery from "../serviceDetail/DetailContentsAllGallery";

const GalleryListContents = ({ Data, id, complete }) => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <div className={style.contents}>
          <p>
            총 <span className={style.blue}>{Data.length}</span>개의 갤러리가 있어요
          </p>
        </div>
      </div>
      {complete && <DetailContentsGallery preview={false} Data={Data} id={id} />}
    </div>
  );
};

export default GalleryListContents;
