import React from "react";
import DetailContentsPartner from "./DetailContentsPartner";
import DetailContentsInfoProvide from "./DetailContentsInfoProvide";
import DetailContentsIntroduce from "./DetailContentsIntroduce";
import DetailContentsStrongPoint from "./DetailContentsStrongPoint";
import DetailContentsEvaluation from "./DetailContentsEvaluation";
import DetailContentsWorkerInfo from "./DetailContentsWorkerInfo";
import DetailContentsProgram from "./DetailContentsProgram";
import DetailContentsFacilityCount from "./DetailContentsFacilityCount";
import DetailContentsLocation from "./DetailContentsLocation";

const DetailContentsFacilities = ({ Data, Markup, rank, naverMap, address }) => {
  return (
    <>
      {Data?.introduce && <DetailContentsIntroduce Data={Data?.introduce} Markup={Markup} />}
      {Data?.strongPoint && <DetailContentsStrongPoint Data={Data?.strongPoint} Markup={Markup} />}
      <DetailContentsEvaluation Data={Data?.evaluation} rank={rank} />
      <DetailContentsWorkerInfo Data={Data} />
      {Data?.program.length > 0 && <DetailContentsProgram Data={Data?.program} />}
      {Data?.facility.length > 0 && <DetailContentsFacilityCount Data={Data?.facility} />}
      <DetailContentsLocation naverMap={naverMap} address={address} />
      <DetailContentsPartner />
      <DetailContentsInfoProvide />
    </>
  );
};

export default DetailContentsFacilities;
