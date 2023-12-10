import React, { useState } from "react";
import style from "./styles/ServiceSearchChoice.module.css";
import ServiceModalRoot from "../../modal/serviceList/ServiceModalRoot";

const ServiceSearchChoice = ({ category, area, setArea }) => {
  const [modal, setModal] = useState({
    nurshing: false,
    area: false,
  });

  return (
    <>
      <div className={style.choice}>
        <p onClick={() => setModal({ ...modal, nurshing: !modal.nurshing })}>{category}</p>
        <p onClick={() => setModal({ ...modal, area: !modal.area })}>
          <span>
            {area.area} {">"} {area.district === "" ? "전체" : area.district}
          </span>
        </p>
      </div>

      {modal.nurshing && (
        <ServiceModalRoot nurshingModal={modal.nurshing} setNurshingModal={setModal} area={area} setArea={setArea} />
      )}
      {modal.area && <ServiceModalRoot areaModal={modal.area} setAreaModal={setModal} area={area} setArea={setArea} />}
    </>
  );
};

export default ServiceSearchChoice;
