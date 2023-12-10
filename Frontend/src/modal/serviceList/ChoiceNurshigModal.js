import React, { useState } from "react";
import ChoiceNurshingContent from "./ChoiceNurshingContent";
import SearchModalLayout from "./SearchModalLayout";
import useApplyTransition from "../../hooks/useApplyTransition";
import style from "./styles/SearchModalLayout.module.css";
import SearchModalHeader from "./SearchModalHeader";

const ChoiceNurshigModal = ({ nurshigModal, setNurshingModal, area, setArea }) => {
  const transtion = useApplyTransition(style.transtion);
  const [reverseTranstion, setReverseTranstion] = useState();

  const modalClose = () => {
    setReverseTranstion(style.reverseTranstion);

    setTimeout(() => {
      setNurshingModal({ ...nurshigModal, areaModal: !nurshigModal });
    }, [300]);
  };

  return (
    <>
      <SearchModalLayout transtion={transtion} reverseTranstion={reverseTranstion} close={modalClose}>
        <SearchModalHeader close={modalClose} title={"시설유형 선택"} />
        <ChoiceNurshingContent close={modalClose} area={area} setArea={setArea} />
      </SearchModalLayout>
    </>
  );
};

export default ChoiceNurshigModal;
