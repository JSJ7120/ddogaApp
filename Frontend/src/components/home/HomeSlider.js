import React from "react";
import Slider from "../common/Slider";
import style from "./styles/HomeSlider.module.css";
import { homeSliderImg } from "../../assets/data/uiImg";

const HomeSlider = () => {
  const copyFirstImg = homeSliderImg[0];
  const copyLastImg = homeSliderImg[homeSliderImg.length - 1];

  const newSlideImg = [copyLastImg, ...homeSliderImg, copyFirstImg];

  return (
    <div className={style.wrap}>
      <Slider images={newSlideImg} mainSlider={true} height={333} />
    </div>
  );
};

export default HomeSlider;
