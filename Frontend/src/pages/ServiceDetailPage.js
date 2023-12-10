import React from "react";
import DetailLayout from "../components/layout/Layout";
import DetailCenterFloatCost from "../components/serviceDetail/DetailCenterFloatCost";
import DetailContainer from "../container/ServiceDetailContainer";

const ServiceDetailPage = () => {
  const css = "detail_layout";

  return (
    <>
      <DetailLayout css={css}>
        <DetailContainer />
        <DetailCenterFloatCost />
      </DetailLayout>
    </>
  );
};

export default ServiceDetailPage;
