import React from "react";
import CounselLayout from "../components/layout/Layout";
import OnlineCounselQAContainer from "../container/OnlineCounselQAContainer";

const OnlineCounselQA = () => {
  const css = "detail_layout";

  return (
    <CounselLayout css={css}>
      <OnlineCounselQAContainer />
    </CounselLayout>
  );
};

export default OnlineCounselQA;
