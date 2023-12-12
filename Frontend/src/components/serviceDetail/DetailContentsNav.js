import React from "react";
import style from "./styles/DetailContentsNav.module.css";
import { navUI } from "../../assets/data/uiData";

const DetailContentsNav = ({ navHandle, active }) => {
  return (
    <div className={style.nav}>
      <ul>
        {navUI.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => navHandle(item.id)}
              className={active === item.id ? style.active : style.noActive}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailContentsNav;
