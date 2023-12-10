import React from "react";
import DetailContentsWrap from "./DetailContentsWrap";
import style from "./styles/DetailContentsIntroduce.module.css";

const DetailContentsIntroduce = ({ Data, Markup }) => {
  return (
    <DetailContentsWrap title={"소개글"}>
      <div className={style.box}>
        <p className={style.text} dangerouslySetInnerHTML={Markup(Data)}></p>
      </div>
    </DetailContentsWrap>
  );
};

export default DetailContentsIntroduce;
