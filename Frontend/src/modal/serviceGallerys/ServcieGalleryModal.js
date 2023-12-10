import React from "react";
import ModalBackdrop from "../common/ModalBackdrop";
import style from "./ServcieGalleryModal.module.css";
import closeButton from "../../assets/icon/serviceGallerys/close_w.svg";

const ServcieGalleryModal = ({ modal, setModal }) => {
  console.log(modal);

  const close = (e) => {
    if (e.currentTarget !== e.target) return;
    setModal({ ...modal, onModal: false });
  };

  return (
    <>
      <ModalBackdrop />
      <div className={style.wrap} onClick={close}>
        <img src={modal.selectImg} alt="" />
        <button className={style.closeButton}>
          <img src={closeButton} alt="closebutton" onClick={close} />
        </button>
      </div>
    </>
  );
};

export default ServcieGalleryModal;
