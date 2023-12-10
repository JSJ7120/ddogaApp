import React from "react";
import style from "./styles/HomeHacktonFamily.module.css";
import { hackton } from "../../assets/data/uiImg";

import { Link } from "react-router-dom";

const HomeHacktonFamily = ({ toggle }) => {
  return (
    <>
      <div className={toggle ? `${style.family} ${style.visible}` : `${style.family} ${style.hidden}`}>
        <p className={style.familyText}>헥톤프로젝트 가족사</p>
        <div className={style.familyLogos}>
          <Link to="https://www.gccare.net/" target="_blank">
            <img src={hackton.care} alt="care" />
          </Link>
          <Link to="https://www.greencrosswb.com/" target="_blank">
            <img src={hackton.wellbing} alt="wellbing" />
          </Link>
          <Link to="https://www.ubcare.co.kr/" target="_blank">
            <img src={hackton.ubcare} alt="ubcare" />
          </Link>
          <Link to="https://bbros.co.kr/" target="_blank">
            <img src={hackton.bbros} alt="bbros" />
          </Link>
          <p className={style.copyright}>Copyright © HectonProject Co.,ltd All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default HomeHacktonFamily;
