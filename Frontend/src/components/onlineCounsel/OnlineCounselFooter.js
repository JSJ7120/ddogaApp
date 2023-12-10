import React, { useState } from "react";
import style from "./styles/OnlineCounselFooter.module.css";
import OnlineCounselRoot from "../../modal/onlineCounselInfo/OnlineCounselRoot";

const OnlineCounselFooter = ({ step, nextPage, prevPage, lastPage, isSelected, answer }) => {
  const [modal, setModal] = useState(false);

  const active = isSelected ? false : true;

  const renderComponent = () => {
    switch (step) {
      case 0:
        return (
          <button type="button" onClick={nextPage} className={style.nextButton} disabled={active}>
            다음으로
          </button>
        );

      case lastPage:
        return (
          <>
            <button type="button" onClick={prevPage} className={style.prevButton}>
              이전
            </button>
            <button type="button" onClick={() => setModal(!modal)} className={style.nextButton} disabled={active}>
              상담 접수하기
            </button>
          </>
        );

      default:
        return (
          <>
            <button type="button" onClick={prevPage} className={style.prevButton}>
              이전
            </button>
            <button type="button" onClick={nextPage} className={style.nextButton} disabled={active}>
              다음으로
            </button>
          </>
        );
    }
  };

  return (
    <footer className={style.wrap}>
      <div className={style.box}>{renderComponent()}</div>
      {modal && <OnlineCounselRoot inquiryModal={modal} inquirySetModal={setModal} answer={answer} />}
    </footer>
  );
};

export default OnlineCounselFooter;
