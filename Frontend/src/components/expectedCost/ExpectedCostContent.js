import React, { useEffect, useState } from "react";
import style from "./styles/ExpectedCostContent.module.css";
import cost from "../../assets/data/json/cost.json";
import ExpectedCostTime from "./ExpectedCostTime";
import ExpectedCostPercent from "./ExpectedCostPercent";
import ExpectedCostNotice from "./ExpectedCostNotice";
import ExpectedCostCalc from "./ExpectedCostCalc";

const ExpectedCostContent = () => {
  const [result, setResult] = useState();
  const [price, setPrice] = useState({
    text: cost.time[0].text,
    value: cost.time[0].value,
  });
  const [percent, setPercent] = useState({
    text: cost.percent[0].text,
    value: cost.percent[0].value,
  });

  const selectTime = (item) => {
    setPrice({ ...price, value: item.value, text: item.text });
  };

  const selectPercent = (item) => {
    setPercent({ ...price, value: item.value, text: item.text });
  };

  useEffect(() => {
    const calc = Math.round(price.value * (percent.value / 100));
    setResult(calc.toLocaleString());
  }, [price, percent]);

  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <p>급여 요양비</p>
        <ExpectedCostTime selectTime={selectTime} cost={cost.time} value={price.value} />
        <ExpectedCostPercent selectPercent={selectPercent} cost={cost.percent} value={percent.value} />
        <ExpectedCostNotice />
        <ExpectedCostCalc result={result} price={price.text} percent={percent.text} />
      </div>
    </div>
  );
};

export default ExpectedCostContent;
