import React, { useEffect, useState } from "react";
import style from "./styles/ServiceSearch.module.css";
import { throttle } from "lodash";
import ServiceSearchChoice from "./ServiceSearchChoice";
import ServiceSearchType from "./ServiceSearchType";

const ServiceSearch = ({ viewToggle, view, category, area, setArea, sort, setScroll }) => {
  const [isScroll, setIsScroll] = useState(false);

  let prev = 0;

  const scollHandle = throttle(() => {
    if (prev < window.scrollY) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

    prev = window.scrollY;
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", scollHandle);

    return () => window.removeEventListener("scroll", scollHandle);
  }, []);

  const wrap = isScroll ? `${style.wrap} ${style.scrollDown}` : `${style.wrap} ${style.scrollUp}`;

  const box = isScroll ? `${style.box} ${style.hidden}` : `${style.box} ${style.visible}`;

  return (
    <div className={wrap}>
      <div className={box}>
        <ServiceSearchChoice category={category} area={area} setArea={setArea} />
        <ServiceSearchType viewToggle={viewToggle} view={view} sort={sort} setArea={setArea} area={area} />
      </div>
    </div>
  );
};

export default ServiceSearch;
