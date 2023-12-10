import React from "react";
import style from "./styles/DetailContentsReview.module.css";
import write from "../../assets/icon/serviceDetail/write.svg";
import DetailcontentsNoInfo from "./DetailcontentsNoInfo";

const DetailContentsReview = () => {
  const text = "작성된 후기가 없어요";

  return (
    <div className={style.wrap}>
      <div className={style.wrapLine}>
        <div className={style.box}>
          <p>
            이 시설을 직접 이용해 보셨다면
            <br /> 소중한 후기를 남겨주세요!
          </p>
          <button>
            <img src={write} alt="review" />
            <p>후기 남기기</p>
          </button>
        </div>
      </div>
      <DetailcontentsNoInfo text={text} />
    </div>
  );
};

export default DetailContentsReview;
