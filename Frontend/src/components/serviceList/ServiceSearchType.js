import React, { useState } from "react";
import style from "./styles/ServiceSearchType.module.css";
import ServiceModalRoot from "../../modal/serviceList/ServiceModalRoot";
import { recommendText } from "../../assets/data/uiData";

const ServiceSearchType = ({ viewToggle, view, sort, area, setArea }) => {
  const [serachModal, setSearchModal] = useState({
    recommend: false,
    filter: false,
  });

  const recommendModalToggle = () => {
    setSearchModal({ ...serachModal, recommend: !serachModal.recommend });
  };

  const filterModalToggle = () => {
    setSearchModal({
      ...serachModal,
      filter: !serachModal.filter,
    });
  };

  const sortName = recommendText.filter((item) => item.id === Number(sort));

  const isFilter = localStorage.getItem("filter")?.length > 0;

  return (
    <>
      <div className={style.wrap}>
        <div className={style.box}>
          <p onClick={recommendModalToggle}>
            {sortName[0]?.text} <span className={style.dropdown} />
          </p>

          <p onClick={filterModalToggle} className={isFilter && style.selectFilter}>
            <span className={isFilter ? style.filterBlue : style.filter} />
            필터
            <span className={isFilter ? style.dropdownBlue : style.dropdown} />
          </p>
        </div>
        <div className={style.imageType}>
          <button className={view ? style.defaultView : style.flexView} onClick={viewToggle} />
        </div>
      </div>
      {serachModal.recommend && (
        <ServiceModalRoot close={recommendModalToggle} recommendModal={serachModal.recommend} />
      )}
      {serachModal.filter && (
        <ServiceModalRoot
          setFilterModal={setSearchModal}
          filterModal={serachModal.filter}
          area={area}
          setArea={setArea}
        />
      )}
    </>
  );
};

export default ServiceSearchType;
