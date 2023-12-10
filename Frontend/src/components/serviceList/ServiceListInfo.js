import React from "react";
import style from "./styles/ServiceListInfo.module.css";

const ServiceListInfo = ({ item, view }) => {
  return (
    <div className={view ? "" : style.box}>
      <p className={style.name}>{item.title}</p>
      <p className={style.address}>{item.address}</p>
      {item.counselCount > 0 && <p className={style.counselCount}>{`상담 ${item.counselCount}`}</p>}
    </div>
  );
};

export default ServiceListInfo;
