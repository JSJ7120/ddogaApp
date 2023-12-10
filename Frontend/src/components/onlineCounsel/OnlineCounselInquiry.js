import React from "react";
import style from "./styles/OnlineCounselInquiry.module.css";
import OnlineCounselInput from "./OnlineCounselInput";

const OnlineCounselInquiry = ({ value, keys, initValue, onChange, textAreaValue, textAreaHandle }) => {
  return (
    <div className={style.inquiryBox}>
      <OnlineCounselInput
        value={value}
        keys={keys}
        initValue={initValue}
        onChange={onChange}
        placeholder={"제목 입력 (최대 50자)"}
      />
      <div>
        <textarea
          className={style.textarea}
          placeholder={"내용 입력 (최대 1,000자)"}
          value={textAreaValue}
          onChange={textAreaHandle}
        />
        <div className={style.lengthNav}>
          <p>{textAreaValue?.length ? textAreaValue.length : 0} / 1,000자</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineCounselInquiry;
