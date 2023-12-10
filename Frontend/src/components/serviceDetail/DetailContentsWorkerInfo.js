import React from "react";
import DetailContentsWrap from "./DetailContentsWrap";
import style from "./styles/DetailContentsWorkerInfo.module.css";
import careWorker from "../../assets/icon/serviceDetail/care_worker.svg";
import DetailContentsOtherWorker from "./DetailContentsOtherWorker";
import DetailContetnsWorkerProfile from "./DetailContetnsWorkerProfile";

const DetailContentsWorkerInfo = ({ Data }) => {
  return (
    <DetailContentsWrap title={"인력 정보"}>
      <div className={style.totalPerson}>
        <div>
          <img src={careWorker} alt="person" />
          <p>
            요양보호사
            <span className={style.blue}>
              {Data?.workerInfo?.nursingCareWorker}
              <span>명</span>
            </span>
          </p>
        </div>
      </div>
      <DetailContentsOtherWorker Data={Data.workerInfo} />
      {Data.workerProfile.length > 0 && <DetailContetnsWorkerProfile Data={Data.workerProfile} />}
    </DetailContentsWrap>
  );
};

export default DetailContentsWorkerInfo;
