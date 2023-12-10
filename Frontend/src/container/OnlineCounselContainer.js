import React, { useCallback, useState } from "react";
import OnlineCounselHeader from "../components/onlineCounsel/OnlineCounselHeader";
import OnlineCounselQuestion from "../components/onlineCounsel/OnlineCounselQuestion";
import CounselLayout from "../components/layout/Layout";
import OnlineProcessLine from "../components/onlineCounsel/OnlineProcessLine";
import OnlineCounselAnswerBox from "../components/onlineCounsel/OnlineCounselAnswerBox";
import OnlineCounselFooter from "../components/onlineCounsel/OnlineCounselFooter";
import { QuestionUI } from "../assets/data/uiData";
import { Helmet } from "react-helmet";

const OnlineCounselContainer = () => {
  const [step, setStep] = useState(0);
  const [transition, setTranstion] = useState();
  const [answer, setAnswer] = useState({});
  const [isSelected, setIsSelected] = useState();
  const lastPage = QuestionUI.length - 1;

  const processBar = (100 / lastPage) * step;
  const opacity = processBar / 100;

  const nextPage = useCallback(() => {
    if (step >= lastPage) return;
    setStep((current) => current + 1);
    setTranstion("");
  }, [step, lastPage]);

  const prevPage = () => {
    setStep((current) => current - 1);
    setTranstion("");
  };

  return (
    <>
      <Helmet>
        <title>상담하기 | 또하나의가족, 또가</title>
      </Helmet>
      <CounselLayout css={"detail_layout"}>
        <OnlineCounselHeader />
        <OnlineCounselQuestion step={step} transition={transition} setTranstion={setTranstion} />
        <OnlineCounselAnswerBox
          step={step}
          answer={answer}
          setAnswer={setAnswer}
          setIsSelected={setIsSelected}
          transition={transition}
          setTranstion={setTranstion}
        />
        <OnlineCounselFooter
          step={step}
          nextPage={nextPage}
          prevPage={prevPage}
          lastPage={lastPage}
          isSelected={isSelected}
          answer={answer}
        />
      </CounselLayout>

      <OnlineProcessLine width={processBar} opacity={opacity} />
    </>
  );
};

export default OnlineCounselContainer;
