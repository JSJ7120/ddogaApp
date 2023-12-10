import React from "react";
import style from "./Layout.module.css";

const Layout = ({ children, css, ref }) => {
  return <div className={style[css]}>{children}</div>;
};

export default Layout;
