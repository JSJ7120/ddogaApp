import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./styles/HomeHeader.module.css";
import { throttle } from "lodash";

const Header = () => {
  const [isScroll, setIsScroll] = useState("");

  let prevScrollValue = 0;

  const ScrollHandle = throttle((e) => {
    if (prevScrollValue <= window.scrollY) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

    prevScrollValue = window.scrollY;
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", ScrollHandle);
  }, []);

  return (
    <header className={style.header}>
      <div className={isScroll ? `${style.header_box} ${style.header_up}` : `${style.header_box} ${style.header_down}`}>
        <Link to="/" className={style.header_logo} />
        <Link to="https://biz.ddoga.co.kr/" className={style.header_Link}>
          파트너스 바로가기
        </Link>
      </div>
    </header>
  );
};

export default Header;
