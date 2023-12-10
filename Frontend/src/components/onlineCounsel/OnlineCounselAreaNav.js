import React from "react";
import style from "./styles/OnlineCounselAreaNav.module.css";
import { areaNav } from "../../assets/data/uiData";
import arrow_right from "../../assets/icon/onlineCounsel/arrow_right_blue.svg";

const OnlineCounselAreaNav = ({ buttonRef, area, moveCate, bgVal, isSejong }) => {
  const styles = {
    transform: `translateX(${bgVal.offsetLeft}px)`,
    width: `${bgVal.width}px`,
    height: `${bgVal.height}px`,
  };

  return (
    <div className={isSejong ? style.evenlyNav : style.nav} ref={buttonRef}>
      {areaNav.map((item) => {
        const key = Object.keys(area).filter((id) => item.id === id);
        const condition = area[key[0]]?.text ? true : false;

        const ButtonElement = (
          <>
            <button id={item.id} key={item.id} onClick={moveCate} disabled={!condition}>
              <p className={condition ? style.selectText : style.basicText}>
                {condition ? area[key[0]]?.text : item.text}
              </p>
            </button>
            {item.id !== "dong" && <img src={arrow_right} alt="arrow" className={style.arrow} />}
          </>
        );

        return (
          <>
            {isSejong && item.id !== "gu" && ButtonElement}
            {!isSejong && ButtonElement}
          </>
        );
      })}
      <div className={style.background} style={styles} />
    </div>
  );
};

export default OnlineCounselAreaNav;
