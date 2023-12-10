import React, { useState } from "react";
import style from "./styles/HomeFindNurshing.module.css";
import { NurshingData } from "../../assets/data/uiData.js";
import { Link } from "react-router-dom";
import HomeModalRoot from "../../modal/home/HomeModalRoot";

const Data = NurshingData.map((item) => {
  return (
    <li className={style.List} key={item.id}>
      <Link to={`/service?cateId=${item.cateId}&sort=10`}>
        {item.id === 4 && <p className={style.new}>New</p>}
        <img src={item.image} alt={item.type} />
        <p className={style.type}>{item.type}</p>
      </Link>
    </li>
  );
});

const HomeFindNurshing = () => {
  const [nurshingModal, setNurshingModalModal] = useState(false);

  const NurshingModalToggle = () => {
    setNurshingModalModal(!nurshingModal);
  };

  return (
    <>
      <div className={style.title}>
        <h1 onClick={NurshingModalToggle}>어떤 요양시설을 찾아야 되나요</h1>
        {nurshingModal && <HomeModalRoot close={NurshingModalToggle} nurshingModal={nurshingModal} />}
      </div>

      <ul className={style.category}>{Data}</ul>
    </>
  );
};

export default HomeFindNurshing;
