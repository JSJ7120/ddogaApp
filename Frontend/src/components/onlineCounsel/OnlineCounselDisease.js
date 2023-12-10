import React from "react";
import OnlineCounselInput from "./OnlineCounselInput";
import OnlineCounselCheckButton from "./OnlineCounselCheckButton";

const OnlineCounselDisease = ({ value, initValue, onChange, toggle, answerHandle, keys, item }) => {
  return (
    <>
      <OnlineCounselInput
        value={value}
        keys={keys}
        initValue={initValue}
        onChange={onChange}
        toggle={toggle}
        placeholder={"예) 치매, 암, 고혈압, 당뇨 등"}
      />

      <OnlineCounselCheckButton item={item} toggle={toggle} answerHandle={answerHandle} keys={keys} />
    </>
  );
};

export default React.memo(OnlineCounselDisease);
