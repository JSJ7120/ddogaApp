import React from "react";
import DetailContentsWrap from "./DetailContentsWrap";
import style from "./styles/DetailContentsEvaluation.module.css";

const DetailContentsEvaluation = ({ rank, Data }) => {
  const notRank = rank === "new" || rank === "none";

  const newRank = (rank === "new" && "신설기관") || (rank === "none" && "평가비대상");

  return (
    <DetailContentsWrap title={"평가등급"} icon={true}>
      <div className={style.ratingBox}>
        <div className={style.rating}>
          <p className={style.rank}>{newRank ? newRank : `${rank}등급`}</p>
          {!notRank && <p className={style.evaluation}>2019년 건강보험공단 평가</p>}
        </div>

        {!notRank && (
          <div className={style.evaluation}>
            <p>분야별 평가 점수</p>
            <div className={style.detailEvaluation}>
              {Data?.map((item, key) => {
                return (
                  <div key={key}>
                    <p className={style.name}>{item.text}</p>
                    <p className={style.score}>{item.score}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </DetailContentsWrap>
  );
};

export default DetailContentsEvaluation;
