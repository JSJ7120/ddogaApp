import React, { useState } from "react";
import style from "./styles/HomeFindNurshing.module.css";
import { NurshingData } from "../../assets/data/uiData.js";
import { useNavigate } from "react-router-dom";
import HomeModalRoot from "../../modal/home/HomeModalRoot";

const HomeFindNurshing = () => {
  const [nurshingModal, setNurshingModalModal] = useState(false);
  const navigate = useNavigate();

  const NurshingModalToggle = () => {
    setNurshingModalModal(!nurshingModal);
  };

  return (
    <>
      <div className={style.title}>
        <h1 onClick={NurshingModalToggle}>어떤 요양시설을 찾아야 되나요</h1>
        {nurshingModal && <HomeModalRoot close={NurshingModalToggle} nurshingModal={nurshingModal} />}
      </div>

      <ul className={style.category}>
        {NurshingData.map((item) => {
          return (
            <li className={style.List} key={item.id} onClick={() => navigate(`/service?cateId=${item.cateId}&sort=10`)}>
              <div className={style.listBox}>
                {item.id === 4 && <p className={style.new}>New</p>}
                <img src={item.image} alt={item.type} />
                <p className={style.type}>{item.type}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomeFindNurshing;
