import React, { useState } from "react";
import SearchModalLayout from "./SearchModalLayout";
import useApplyTransition from "../../hooks/useApplyTransition";
import style from "./styles/SearchModalLayout.module.css";
import SearchModalHeader from "./SearchModalHeader";
import AreaContent from "./AreaContent";

const AreaListModal = ({ areaModal, setAreaModal, area, setArea }) => {
  const transtion = useApplyTransition(style.transtion);
  const [reverseTranstion, setReverseTranstion] = useState();

  const modalClose = () => {
    setReverseTranstion(style.reverseTranstion);

    setTimeout(() => {
      setAreaModal({ ...areaModal, areaModal: !areaModal });
    }, [300]);
  };

  return (
    <SearchModalLayout transtion={transtion} reverseTranstion={reverseTranstion} close={modalClose}>
      <SearchModalHeader title={"지역 선택"} close={modalClose} />
      <AreaContent selectedArea={area} close={modalClose} setArea={setArea} areaModal={areaModal} />
    </SearchModalLayout>
  );
};

export default AreaListModal;
