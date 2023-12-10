import React from "react";
import style from "./styles/DetailContentsProflieArrow.module.css";
import left from "../../assets/icon/serviceDetail/left_bk.svg";
import right from "../../assets/icon/serviceDetail/right_bk.svg";

const DetailContentsProflieArrow = ({ arrow, cardId, firstID, marginRight, slideButton, lastID }) => {
  return (
    <>
      {arrow.top > 0 && (
        <div>
          {cardId !== firstID && (
            <button
              className={style.arrow}
              style={{ left: `${arrow.side - marginRight * 2}px`, top: `${arrow.top}px` }}
              onClick={() => slideButton(false)}
            >
              <img src={left} alt="arrow" />
            </button>
          )}

          {cardId !== lastID && (
            <button
              className={style.arrow}
              style={{ right: `${arrow.side - marginRight * 2}px`, top: `${arrow.top}px` }}
              onClick={() => slideButton(true)}
            >
              <img src={right} alt="arrow" />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default DetailContentsProflieArrow;
