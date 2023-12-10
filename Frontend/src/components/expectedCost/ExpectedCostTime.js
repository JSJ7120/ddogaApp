import React from "react";
import style from "./styles/ExpectedCostTime.module.css";
import ExpectedCostButtons from "./ExpectedCostButtons";

const ExpectedCostTime = ({ selectTime, value, cost }) => {
  return (
    <div className={style.wrap}>
      <p className={style.text}>서비스 이용시간</p>
      <div className={style.box}>
        {cost.map((item) => {
          return (
            <ExpectedCostButtons
              key={item.id}
              onclick={() => selectTime(item)}
              text={item.text}
              itemValue={item.value}
              value={value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExpectedCostTime;
