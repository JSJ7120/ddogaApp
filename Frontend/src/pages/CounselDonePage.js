import React from "react";
import CounselLayout from "../components/layout/Layout";
import { Helmet } from "react-helmet";

import CounselDoneContainer from "../container/CounselDoneContainer";

const CounselDonePage = () => {
  const css = "detail_layout";
  return (
    <>
      <Helmet>
        <title>상담완료 | 또하나의가족, 또가</title>
      </Helmet>
      <CounselLayout css={css}>
        <CounselDoneContainer />
      </CounselLayout>
    </>
  );
};

export default CounselDonePage;
