import React from "react";
import style from "./styles/RecommendInfoModal.module.css";
import useApplyTransition from "../../hooks/useApplyTransition";
import ModalBackdrop from "../common/ModalBackdrop";

const RecommendInfoModal = ({ close }) => {
  const transition = useApplyTransition(style.transition);

  return (
    <>
      <ModalBackdrop close={close} css={{ zIndex: "700", backdropFilter: "blur(2px)" }} />
      <div className={style.wrap}>
        <div className={`${style.box} ${transition}`}>
          <div className={style.txt}>
            <p>
              또가추천순은 요양시설의
              <br />
              <span>
                <b>
                  다양한 정보 제공, 상담 활동,
                  <br />
                  파노라마 사진 제공 여부
                </b>
              </span>
              등을
              <br />
              기준으로 점수화하여 정렬합니다.
            </p>
          </div>
          <button className={style.btn} onClick={close}>
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default RecommendInfoModal;
