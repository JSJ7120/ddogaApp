import React from "react";
import style from "./styles/ServiceListRank.module.css";
import ddogasmall from "../../assets/icon/serviceList/ddoga_sm.svg";

const ServiceListRank = ({ item, view }) => {
  const rank = item.rank;

  const otherRank = (rank === "none" && "평가비대상") || (rank === "new" && "신설기관");

  return (
    <div className={view ? `${style.rank}` : `${style.rank} ${style.changeRank}`}>
      {!otherRank ? <p className={style[rank]}>{rank}등급</p> : <p className={style[rank]}>{otherRank}</p>}
      <p className={style.establish}>{`설립 ${item.establish}년`}</p>

      {item.onlineCounsel && (
        <p className={style.online}>
          <img src={ddogasmall} alt="smallIcon" />
          온라인 상담
        </p>
      )}
    </div>
  );
};

export default ServiceListRank;
