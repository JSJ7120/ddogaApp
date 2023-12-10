import React, { useState } from "react";
import style from "./styles/ExpectedCostPercent.module.css";
import info from "../../assets/icon/common/info.svg";
import ExpectedCostButtons from "./ExpectedCostButtons";
import ExpectedCostModalRoot from "../../modal/expectedCost/ExpectedCostModalRoot";

const ExpectedCostPercent = ({ cost, selectPercent, value }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={style.wrap}>
        <p className={style.text}>
          본인 부담률
          <img
            src={info}
            alt="info"
            onClick={() => {
              setModal(true);
            }}
          />
        </p>
        <div className={style.box}>
          {cost.map((item) => {
            return (
              <ExpectedCostButtons
                key={item.id}
                onclick={() => selectPercent(item)}
                text={item.text}
                itemValue={item.value}
                value={value}
              />
            );
          })}
        </div>
      </div>
      {modal && <ExpectedCostModalRoot setModal={setModal} modal={modal} />}
    </>
  );
};

export default ExpectedCostPercent;
