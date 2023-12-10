import React from "react";
import DetailContentsWrap from "./DetailContentsWrap";
import style from "./styles/DetailContentsProgram.module.css";

const DetailContentsProgram = ({ Data }) => {
  return (
    <DetailContentsWrap title={"프로그램 정보"}>
      <div className={style.programWrap}>
        {Data?.map((item, index) => {
          return (
            <div key={index} className={style.programBox}>
              <div className={style.programName}>{item.name}</div>
              <div className={style.programTags}>
                {item.tags.map((tags, index) => {
                  return <p key={index}>{tags}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </DetailContentsWrap>
  );
};

export default DetailContentsProgram;
