import React, { useState } from "react";
import style from "./styles/GalleryContents.module.css";
import ServiceGallerysModalRoot from "../../modal/serviceGallerys/ServiceGallerysModalRoot";

const GalleryContents = ({ content, complete }) => {
  const [modal, setModal] = useState({
    onModal: false,
    selectImg: "",
  });

  const galleryHandle = (e) => {
    const selectImg = e.target.currentSrc;

    setModal({ ...modal, onModal: true, selectImg });
  };

  return (
    <>
      <div className={style.images}>
        <p className={style.text}>{content?.text}</p>

        {complete &&
          content?.img.map((item, key) => {
            return <img key={key} src={item} alt="" onClick={galleryHandle} />;
          })}
      </div>
      {modal.onModal && <ServiceGallerysModalRoot modal={modal} setModal={setModal} />}
    </>
  );
};

export default GalleryContents;
