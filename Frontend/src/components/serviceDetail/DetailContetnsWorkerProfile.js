import React, { useState } from "react";
import style from "./styles/DetailContetnsWorkerProfile.module.css";
import DetailContentsModalRoot from "../../modal/serviceDetail/DetailContentsModalRoot";

const DetailContetnsWorkerProfile = ({ Data }) => {
  const [modal, setModal] = useState({
    id: 0,
    clicked: false,
    data: "",
  });

  const modalHandle = (e, data) => {
    setModal({ ...modal, id: e.currentTarget.id, data, clicked: true });
  };

  return (
    <div className={style.profileBox}>
      <p>
        인력 프로필 <span>{Data?.length}</span>
      </p>
      <div className={style.profile}>
        {Data?.map((item, key) => {
          return (
            <div key={key} id={key + 1} className={style.workerInfo} onClick={(e) => modalHandle(e, Data)}>
              <img src={item.photo} alt={"person"} />
              <div>
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
      {modal.clicked && <DetailContentsModalRoot profileModal={modal} setProfileModal={setModal} />}
    </div>
  );
};

export default DetailContetnsWorkerProfile;
