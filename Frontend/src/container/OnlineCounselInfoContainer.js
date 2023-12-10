import React from "react";
import OnlineCounselInfoHeader from "../components/onlineCounselInfo/OnlineCounselInfoHeader";
import OnlineCounselInfoContents from "../components/onlineCounselInfo/OnlineCounselInfoContents";
import OnlineCounselInfoNotice from "../components/onlineCounselInfo/OnlineCounselInfoNotice";
import OnlineCounselInfoFooter from "../components/onlineCounselInfo/OnlineCounselInfoFooter";
import { useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const OnlineCounselInfoContainer = () => {
  const { title } = useParams();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navId = searchParams.get("navId");

  return (
    <>
      <Helmet>
        <title>{`${title}에 상담하기 | 또하나의가족, 또가`}</title>
      </Helmet>
      <OnlineCounselInfoHeader />
      <OnlineCounselInfoContents title={title} />
      <OnlineCounselInfoNotice />
      <OnlineCounselInfoFooter title={title} id={id} navId={navId} />
    </>
  );
};

export default OnlineCounselInfoContainer;
