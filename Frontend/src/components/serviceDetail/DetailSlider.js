import React from "react";
import Slider from "../common/Slider";
import style from "./styles/DetailSlider.module.css";
import { sliderIcon } from "../../assets/data/uiImg";
import { Link } from "react-router-dom";

const DetailSlider = ({ Data, backHandle }) => {
  const height = 380;

  return (
    <>
      <Slider height={height} images={Data}>
        <div className={style.boxHeader}>
          <div>
            <img src={sliderIcon.back} alt="back" className={style.back} onClick={backHandle} />
          </div>
          <div>
            <Link to="/">
              <img src={sliderIcon.home} alt="home" className={style.home} />
            </Link>
            <Link>
              <img src={sliderIcon.search} alt="search" className={style.search} />
            </Link>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default DetailSlider;
