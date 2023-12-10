import React, { useState, useEffect } from "react";
import style from "./styles/DetailHeader.module.css";
import { Link } from "react-router-dom";
import { throttle } from "lodash";

import { headerIcon } from "../../assets/data/uiImg";

const DetailHeader = ({ Data, isImage, backHandle, fail }) => {
  const [scroll, setScroll] = useState(true);

  const ScrollHandle = throttle((e) => {
    window.scrollY > 340 ? setScroll(false) : setScroll(true);
  }, 200);

  useEffect(() => {
    window.addEventListener(isImage && "scroll", ScrollHandle);
    !isImage && setScroll(false);
  }, [isImage]);

  const isScroll = scroll ? `${style.wrap} ${style.up}` : `${style.wrap} ${style.down}`;

  return (
    <header className={style.header}>
      <div className={isScroll}>
        <div className={style.box}>
          <div onClick={backHandle}>
            <img src={headerIcon.back} className={style.back} alt="back" />

            <p className={style.title}>{Data}</p>
          </div>
          <div>
            <Link to="/">
              <img src={headerIcon.home} className={style.home} alt="home" />
            </Link>

            {!fail && <img src={headerIcon.search} className={style.serach} alt="serach" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DetailHeader;
