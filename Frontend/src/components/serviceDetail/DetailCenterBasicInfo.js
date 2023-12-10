import React from "react";
import style from "./styles/DetailCenterBasicInfo.module.css";
import { NurshingData } from "../../assets/data/uiData";

const DetailCenterBasicInfo = ({ Data }) => {
  const { title, address, onlineCounsel, rank, establish, cateId } = Data;

  const otherRank = (rank === "none" && "평가비대상") || (rank === "new" && "신설기관");

  const cate = NurshingData.filter((item) => item.cateId === cateId);

  return (
    <div className={style.box}>
      <p className={style.type}>{cate[0]?.type}</p>
      <h1 className={style.title}>{title}</h1>
      <p className={style.address}>{address}</p>
      <div className={style.info}>
        {!otherRank ? <p className={style.rank}>{rank}등급</p> : <p className={style.rank}>{otherRank}</p>}

        <span className={style.establish}>설립 {establish}년</span>
        {onlineCounsel && <span className={style.online}>온라인 상담</span>}
      </div>
    </div>
  );
};

export default DetailCenterBasicInfo;
