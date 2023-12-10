import React from "react";
import style from "./styles/SliderContent.module.css";

const SliderContent = ({ swiper, speed, images, DragStart, DragLeave, DragMove, divSize, mainSlider, length }) => {
  const renderComponent = () => {
    switch (length > 1) {
      case true:
        return (
          <div
            className={style.content}
            style={{
              transform: `translate3d(${swiper.px}px,0px,0px)`,
              transition: `all ${speed.current} ease`,
            }}
          >
            {images?.map((item, key) => {
              return (
                <img
                  key={key}
                  src={item}
                  alt="swiper"
                  id={key}
                  onDragStart={DragStart}
                  onDragLeave={DragLeave}
                  onDragOver={DragMove}
                  style={{ width: `${divSize}px` }}
                  className={mainSlider ? style.mainSliderImg : style.sliderImg}
                />
              );
            })}
          </div>
        );

      default:
        return (
          <div className={style.content}>
            <img
              src={images[0]}
              alt="swiper"
              className={mainSlider ? style.mainSliderImg : style.sliderImg}
              style={{ width: `${divSize}px` }}
            />
          </div>
        );
    }
  };

  return renderComponent();
};

export default SliderContent;
