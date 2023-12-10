import React from "react";
import ExpectedCostLayout from "../components/layout/Layout";
import ExpectedCostHeader from "../components/expectedCost/ExpectedCostHeader";
import ExpectedCostContent from "../components/expectedCost/ExpectedCostContent";
import { Helmet } from "react-helmet";

const ServiceExpectedCost = () => {
  const css = "ExpectedCost";

  return (
    <>
      <Helmet>
        <title>예상비용 상세보기 | 또하나의가족, 또가</title>
      </Helmet>
      <ExpectedCostLayout css={css}>
        <ExpectedCostHeader />
        <ExpectedCostContent />
      </ExpectedCostLayout>
    </>
  );
};

export default ServiceExpectedCost;
