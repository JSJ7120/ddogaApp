import React, { useCallback, useEffect, useState } from "react";
import style from "./styles/FilterModal.module.css";
import useApplyTransition from "../../hooks/useApplyTransition";
import FilterModalHeader from "./FilterModalHeader";
import FilterModalKeyword from "./FilterModalKeyword";
import FilterModalListBox from "./FilterModalListBox";
import FilterModalFooter from "./FilterModalFooter";
import ModalBackdrop from "../common/ModalBackdrop";

const FilterModal = ({ setFilterModal, filterModal, area, setArea }) => {
  const transtion = useApplyTransition(style.transtion);
  const [reverseTranstion, setReverseTranstion] = useState();
  const [select, setSelect] = useState([]);
  const [change, setChange] = useState(true);

  useEffect(() => {
    const selects = localStorage.getItem("filter");
    selects?.length > 1 && setSelect(selects.split(","));
  }, []);

  const selectHandle = useCallback(
    (e) => {
      const { innerText } = e.target;

      setSelect((prev) => {
        const update = prev.includes(innerText) ? prev.filter((item) => item !== innerText) : prev.concat(innerText);

        return update;
      });
    },
    [select]
  );

  const deleteSelected = (e) => {
    const { innerText } = e.currentTarget;
    setSelect(select.filter((item) => item !== innerText));
  };

  const modalsClose = () => {
    setReverseTranstion(style.reverseTranstion);

    setTimeout(() => {
      setFilterModal({ ...filterModal, filter: !filterModal });
    }, 300);
  };

  const search = () => {
    const rankKeyWord = select.filter(
      (value) => value === "A등급" || value === "B등급" || value === "C등급" || value === "D등급" || value === "E등급"
    );

    const rank = !rankKeyWord.length ? ["all"] : rankKeyWord.join(",").replace(/등급/gi, "").split(",");

    const programKeyWord = select.filter(
      (value) => value === "인지기능 향상" || value === "운동 보조" || value === "기타 프로그램"
    );

    const program = !programKeyWord.length ? ["all"] : programKeyWord;

    localStorage.setItem("program", program);
    localStorage.setItem("filter", select);
    localStorage.setItem("rank", rank);

    setArea((prev) => ({ ...area, rank, program, page: 10 }));

    modalsClose();
  };

  return (
    <>
      <ModalBackdrop close={modalsClose} css={{ backdropFilter: "blur(0.5px)" }} />
      <div className={style.wrap}>
        <div className={`${style.box} ${transtion} ${reverseTranstion}`}>
          <FilterModalHeader close={modalsClose} select={select} />
          <FilterModalKeyword select={select} deleteSelected={deleteSelected} />
          <FilterModalListBox change={change} setChange={setChange} selectHandle={selectHandle} select={select} />
          <FilterModalFooter setSelect={setSelect} search={search} />
        </div>
      </div>
    </>
  );
};

export default FilterModal;
