import React, { useCallback, useEffect, useMemo, useState } from "react";
import style from "./styles/OnlineCounselAnswerBox.module.css";
import { AnswerUI } from "../../assets/data/uiData";
import OnlineCounselButton from "./OnlineCounselButton";
import OnlineCounselNumberInput from "./OnlineCounselNumberInput";
import OnlineCounselAreaRoot from "./OnlineCounselAreaRoot";
import OnlineCounselDisease from "./OnlineCounselDisease";
import OnlineCounselInquiry from "./OnlineCounselInquiry";

const OnlineCounselAnswerBox = ({ step, answer, setAnswer, setIsSelected, transition, setTranstion }) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState({
    disease: "",
    birth: "",
    inquiry: "",
  });
  const [textAreaValue, setTextAreaValue] = useState();

  const [validate, setValidate] = useState();
  const name = AnswerUI[step]?.id;

  const keys = Object.keys(value);

  setIsSelected(Object.keys(answer).includes(name));

  const deleteArr = () => {
    const copyArr = { ...answer };
    delete copyArr[name];
    setAnswer(copyArr);
  };

  useEffect(() => {
    setTimeout(() => {
      setTranstion(style.transition);
    }, 100);
  }, [step]);

  const answerHandle = (e, keys) => {
    if (toggle) {
      deleteArr();
      setToggle(false);
    } else {
      setAnswer({ ...answer, [name]: e.currentTarget.innerText });
      setToggle(true);
      setValue((prev) => ({ ...prev, [keys]: "" }));
    }
  };

  useEffect(() => {
    const valueCheck = value.inquiry?.length === 0 || textAreaValue?.length === 0;
    if (valueCheck) {
      deleteArr();
    }
  }, [value.inquiry, textAreaValue]);

  const inputTextHandle = useCallback(
    (e) => {
      const { value: textValue, id } = e.target;

      setValue({ ...value, [id]: textValue });
      setAnswer({ ...answer, [name]: textValue });

      if (textValue === "") deleteArr();
    },
    [setValue, setAnswer, deleteArr]
  );

  const inquriyTextHandle = useCallback(
    (e) => {
      const { value: title, id } = e.target;

      setValue({ ...value, [id]: title });

      setAnswer((prev) => ({ ...prev, [name]: { title, text: textAreaValue } }));
    },
    [setValue, setAnswer, name]
  );

  const textAreaHandle = (e) => {
    const { value: text } = e.target;
    const maxLength = 1000;

    if (text.length < maxLength) {
      setTextAreaValue(text);

      setAnswer((prev) => ({ ...prev, [name]: { title: value.inquiry, text } }));
    }
  };

  const birthTextHandle = useCallback(
    (e) => {
      const { value: textValue, id } = e.target;
      const val = textValue.replace(/\D/g, "");

      const date = new Date();
      const max = date.getFullYear() - 1;
      const min = max - 123;

      setValue({ ...value, [id]: val });
      setAnswer({ ...answer, [name]: val });

      if (Number(val) <= min || Number(val) > max || val === "") {
        val.length === 4 && setValidate("입력한 출생연도를 다시 확인해 주세요");
        deleteArr();
      } else setValidate("");
    },
    [setValue, setAnswer, deleteArr]
  );

  const initValue = (keys) => {
    setValue({ ...value, [keys]: "" });
    deleteArr();
  };

  const memoizedValue = useMemo(
    () =>
      AnswerUI[step]?.select?.map((item) => {
        return <OnlineCounselButton answer={answer} item={item} setAnswer={setAnswer} name={name} />;
      }),
    [step, answer, setAnswer]
  );

  console.log(answer);

  const renderComponent = () => {
    switch (name) {
      case "질병명":
        return (
          <OnlineCounselDisease
            value={value.disease}
            initValue={initValue}
            onChange={inputTextHandle}
            toggle={toggle}
            answer={answer}
            answerHandle={answerHandle}
            keys={keys[0]}
            item={AnswerUI[step].select}
          />
        );

      case "출생연도":
        return (
          <OnlineCounselNumberInput
            placeholder={"예) 1945"}
            value={value.birth}
            keys={keys[1]}
            birthTextHandle={birthTextHandle}
            validate={validate}
          />
        );

      case "거주지역":
        return <OnlineCounselAreaRoot setAnswer={setAnswer} answer={answer} name={name} deleteArr={deleteArr} />;

      case "문의내용":
        return (
          <OnlineCounselInquiry
            value={value.inquiry}
            textAreaValue={textAreaValue}
            keys={keys[2]}
            initValue={initValue}
            toggle={toggle}
            onChange={inquriyTextHandle}
            textAreaHandle={textAreaHandle}
            setIsSelected={setIsSelected}
          />
        );

      default:
        return memoizedValue;
    }
  };

  return (
    <div className={style.wrap}>
      <div className={`${style.box} ${transition}`}>{renderComponent()}</div>
    </div>
  );
};

export default OnlineCounselAnswerBox;
