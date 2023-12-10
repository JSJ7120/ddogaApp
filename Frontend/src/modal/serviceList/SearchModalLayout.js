import React from "react";
import style from "./styles/SearchModalLayout.module.css";
import ModalBackdrop from "../common/ModalBackdrop";

const SearchModalLayout = ({ children, transtion, reverseTranstion, close }) => {
  return (
    <>
      <ModalBackdrop close={close} />
      <div className={style.wrap}>
        <div className={`${style.box} ${transtion} ${reverseTranstion}`}>{children}</div>
      </div>
    </>
  );
};

export default SearchModalLayout;
