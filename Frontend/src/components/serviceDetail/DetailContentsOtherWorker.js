import React from "react";
import style from "./styles/DetailContentsOtherWorker.module.css";

const DetailContentsOtherWorker = ({ Data }) => {
  return (
    <>
      <p className={style.otherWorker}>기타 근무 인력</p>
      <ul className={style.otherWorkerBox}>
        {Data?.otherWorker?.map((item, key) => {
          return (
            <li
              key={key}
              className={style.otherWorkerCard}
              style={Data?.otherWorker.length < 3 ? { borderBottom: "none" } : {}}
            >
              <p>{item.job}</p>
              <p>{item.count}명</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DetailContentsOtherWorker;
