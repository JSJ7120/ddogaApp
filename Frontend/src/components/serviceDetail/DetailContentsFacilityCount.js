import React from "react";
import style from "./styles/DetailContentsFacilityCount.module.css";
import { facilityIcon } from "../../assets/data/uiImg";
import DetailContentsWrap from "./DetailContentsWrap";

const DetailContentsFacilityCount = ({ Data }) => {
  return (
    <DetailContentsWrap title={"시설 상세"}>
      <div className={style.facility}>
        <ul>
          {Data?.map((item, index) => {
            const name = item.name;
            return (
              item.count > 0 && (
                <li key={index}>
                  <div className={style.facilityInfo}>
                    <img src={facilityIcon[name]} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.count}개</p>
                  </div>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </DetailContentsWrap>
  );
};

export default DetailContentsFacilityCount;
