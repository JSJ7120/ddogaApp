import React from "react";
import style from "./styles/DetailContentsRatingModal.module.css";
import DetailContentsWrap from "./DetailContentsWrap";
import { DetailContentsRatingData } from "../../assets/data/uiData";

const DetailContentsRatingModal = ({ ratingModal, setRatingModal }) => {
  return (
    <>
      <DetailContentsWrap modal={ratingModal} setModal={setRatingModal} title={"평가등급"}>
        <div className={style.box}>
          <div>
            <p className={style.text}>
              국민건강보험공단에서는 장기요양기관이 제공하는 장기요양급여 내용을 지속적으로 관리, 평가하여 평가결과를
              공개하고 있어요. 평가등급은 아래 5개 기준을 종합하여{" "}
              <span>A(최우수), B(우수), C(양호), D(보통), E(미흡)</span>으로 결정돼요.
            </p>
          </div>
          <div className={style.textBox}>
            {DetailContentsRatingData[0].map((item) => {
              return (
                <div>
                  <p className={`${style.strongText} ${style.text}`}>{item.title}</p>
                  <p className={style.smallText}>{item.text}</p>
                </div>
              );
            })}
          </div>

          <div>
            <div className={style.ratingBox}>
              <div>
                <p className={`${style.textBlue} ${style.text}`}>
                  A-E등급 외에 다음과 같이 표기된 의미를 함께 살펴보세요.
                </p>
              </div>

              {DetailContentsRatingData[1].map((item) => {
                return (
                  <div key={item.id}>
                    <p className={`${style.strongText} ${style.text}`}>{item.title}</p>
                    <p className={style.smallText}>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DetailContentsWrap>
    </>
  );
};

export default DetailContentsRatingModal;
