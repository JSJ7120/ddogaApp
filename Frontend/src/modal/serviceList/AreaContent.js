import React, { useEffect, useState } from "react";
import style from "./styles/AreaContent.module.css";
import areaData from "../../assets/data/json/area.json";
import AreaSelectMainOption from "./AreaSelectMainOption";
import AreaSelectSubOption from "./AreaSelectSubOption";

const AreaContent = ({ selectedArea, setArea, close }) => {
  const [click, setClick] = useState([]);
  const [select, setSelect] = useState({
    area: selectedArea.area,
    district: selectedArea.district,
  });

  const areaHandle = (e) => {
    const text = e.target.innerText;

    setSelect({ ...select, area: text });

    const selectGu = Object.values(areaData[text]);

    setClick(selectGu);
  };

  const sectionHandle = (e) => {
    const text = e.currentTarget.children[0].innerText;

    setArea({ ...selectedArea, area: select.area, district: text });

    const area = {
      area: select.area,
      district: text,
    };

    localStorage.setItem("area", JSON.stringify(area));

    close();
  };

  useEffect(() => {
    setClick(Object.values(areaData[selectedArea.area]));
  }, []);

  return (
    <>
      <div className={style.wrap}>
        <AreaSelectMainOption areaHandle={areaHandle} area={select.area} />
        <AreaSelectSubOption click={click} sectionHandle={sectionHandle} district={select.district} />
      </div>
    </>
  );
};

export default AreaContent;
