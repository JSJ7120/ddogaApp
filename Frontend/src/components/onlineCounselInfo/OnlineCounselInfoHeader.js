import React, { useState } from "react";
import style from "./styles/OnlineCounselInfoHeader.module.css";
import newBack from "../../assets/icon/common/newBack.svg";
import OnlineCounselRoot from "../../modal/onlineCounselInfo/OnlineCounselRoot";

const OnlineCounselInfoHeader = () => {
  const [modal, setModal] = useState(false);

  return (
    <header className={style.header}>
      <img src={newBack} alt="back" className={style.backIcon} onClick={() => setModal(!modal)} />
      {modal && <OnlineCounselRoot modal={modal} setModal={setModal} next={true} />}
    </header>
  );
};

export default OnlineCounselInfoHeader;
