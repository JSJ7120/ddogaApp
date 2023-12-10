import React from "react";
import CounselLayout from "../components/layout/Layout";
import OnlineCounselInfoContainer from "../container/OnlineCounselInfoContainer";

const OnlineCounselPage = () => {
  const css = "detail_layout";

  return (
    <>
      <CounselLayout css={css}>
        <OnlineCounselInfoContainer />
      </CounselLayout>
    </>
  );
};

export default OnlineCounselPage;
