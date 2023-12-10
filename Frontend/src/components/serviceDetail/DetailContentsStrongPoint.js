import React from "react";
import DetailContentsWrap from "./DetailContentsWrap";
import style from "./styles/DetailContentsIntroduce.module.css";

const DetailContentsStrongPoint = ({ Markup, Data }) => {
  return (
    <DetailContentsWrap title={"특장점"}>
      <div className={style.box}>
        <p className={style.text} dangerouslySetInnerHTML={Markup(Data)} />
      </div>
    </DetailContentsWrap>
  );
};

export default DetailContentsStrongPoint;
