import React from "react";
import style from "./styles/DetailContentsProfileWrap.module.css";

const DetailContentsProfileWrap = ({ drag, cardId, marginRight, speed, dragStart, dragOver, dragEnd, children }) => {
  return (
    <div
      className={style.wrap}
      style={{
        transform: `translate3d(${drag - cardId * marginRight}px,0px,0px)`,
        transition: `all ${speed}ms ease`,
      }}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {children}
    </div>
  );
};

export default DetailContentsProfileWrap;
