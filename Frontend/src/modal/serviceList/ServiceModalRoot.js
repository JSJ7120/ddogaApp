import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import RecommendModal from "./RecommendModal";
import RecommendInfoModal from "./RecommendInfoModal";
import FilterModal from "./FilterModal";
import ChoiceNurshigModal from "./ChoiceNurshigModal";
import AreaListModal from "./AreaListModal";
import SearchModal from "./SearchModal";

const ServiceModalRoot = ({
  close,
  recommendInfoModal,
  setFilterModal,
  recommendModal,
  filterModal,
  nurshingModal,
  setNurshingModal,
  areaModal,
  setAreaModal,
  searchModal,
  setSearchModal,
  area,
  setArea,
}) => {
  useEffect(() => {
    if (filterModal) {
      document.body.style.cssText = ``;
    } else {
      document.body.style.cssText = `overflow:hidden;`;
    }

    return () => {
      document.body.style.cssText = ``;
    };
  }, []);

  return (
    <>
      {recommendModal &&
        ReactDOM.createPortal(<RecommendModal close={close} />, document.getElementById("modal-content"))}
      {recommendInfoModal &&
        ReactDOM.createPortal(<RecommendInfoModal close={close} />, document.getElementById("modal-more-content"))}
      {filterModal &&
        ReactDOM.createPortal(
          <FilterModal filterModal={filterModal} setFilterModal={setFilterModal} area={area} setArea={setArea} />,
          document.getElementById("modal-content")
        )}
      {nurshingModal &&
        ReactDOM.createPortal(
          <ChoiceNurshigModal
            nurshigModal={nurshingModal}
            setNurshingModal={setNurshingModal}
            area={area}
            setArea={setArea}
          />,
          document.getElementById("modal-content")
        )}
      {areaModal &&
        ReactDOM.createPortal(
          <AreaListModal areaModal={areaModal} setAreaModal={setAreaModal} area={area} setArea={setArea} />,
          document.getElementById("modal-content")
        )}
      {searchModal &&
        ReactDOM.createPortal(
          <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />,
          document.getElementById("modal-content")
        )}
    </>
  );
};

export default ServiceModalRoot;
