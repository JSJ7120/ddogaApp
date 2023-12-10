import React, { useMemo } from "react";
import style from "./styles/ServiceList.module.css";

import ServiceListInfo from "./ServiceListInfo";
import ServiceListRank from "./ServiceListRank";

const ServiceList = ({ view, Data, moveDetailPage, complete }) => {
  const renderComponent = useMemo(() => {
    if (!complete) return null;
    const Lists = Data?.map((item) => {
      return (
        <div to={`detail/${item.id}?navId=1`} key={item.id} onClick={() => moveDetailPage(item.id)}>
          <div className={view ? style.box : style.changeBox}>
            <div className={view ? style.flexbox : ""}>
              <div className={view ? style.centerImg : style.changeCenterImg}>
                <img src={item.thumbNail} alt="logo" className={view ? style.thumbNail : style.changeThumbNail} />
              </div>
              <div className={view ? style.infobox : style.changeInfoBox}>
                <ServiceListInfo item={item} view={view} />
                <ServiceListRank item={item} view={view} />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return Lists;
  }, [Data, complete, view]);

  return (
    <>
      <div className={view ? style.wrap : style.changeWrap}>{renderComponent}</div>
    </>
  );
};

export default React.memo(ServiceList);
