import React from "react";
import style from "./styles/DetailCenterInfo.module.css";
import DetailCenterBasicInfo from "./DetailCenterBasicInfo";
import DetailCenterScore from "./DetailCenterScore";
import DetailCenterCost from "./DetailCenterCost";
import DetailCenterUtil from "./DetailCenterUtil";

const DetailCenterWrap = ({ children, isImages }) => {
  const subWrap = !isImages && style.subWrap;

  return (
    <div className={`${style.wrap} ${subWrap}`}>
      <div className={style.box}>{children}</div>
    </div>
  );
};

const DetailCenterInfo = ({ Data }) => {
  const { onlineCounselCount, phoneCounselCount } = Data;

  return (
    <DetailCenterWrap isImages={Data?.images?.length > 0 && true}>
      <DetailCenterBasicInfo Data={Data} />
      <DetailCenterScore counselCount={onlineCounselCount + phoneCounselCount} />
      <DetailCenterCost />
      <DetailCenterUtil />
    </DetailCenterWrap>
  );
};

export default DetailCenterInfo;
