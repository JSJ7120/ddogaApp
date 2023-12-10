import React from "react";
import style from "./styles/HomeNavBar.module.css";
import { Link, useLocation } from "react-router-dom";

const HomeNavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={style.Nav_wrap}>
      <div className={style.Nav_box}>
        <ul>
          <li>
            <Link to="/">
              <span className={`${style.Nav_home} ${style.logos}`} />
              <p className={pathname === "/" && style.Nav_visit}>홈</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className={`${style.Nav_counsel} ${style.logos}`} />
              <p>상담사례</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className={`${style.Nav_info} ${style.logos}`} />
              <p>요양정보</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className={`${style.Nav_account} ${style.logos}`} />
              <p>마이또가</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavBar;
