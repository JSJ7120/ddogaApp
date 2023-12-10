import React, { useState } from "react";
import style from "./styles/OnlineCounselHeader.module.css";
import close from "../../assets/icon/common/new_close.svg";
import OnlineCounselRoot from "../../modal/onlineCounselInfo/OnlineCounselRoot";

const OnlineCounselHeader = () => {
  const [modal, setModal] = useState();

  return (
    <header className={style.wrap}>
      <div className={style.box}>
        <button onClick={() => setModal(!modal)}>
          <img src={close} alt="close" />
        </button>
        {modal && <OnlineCounselRoot modal={modal} setModal={setModal} next={false} />}
      </div>
    </header>
  );
};

export default OnlineCounselHeader;
