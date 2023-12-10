import React, { useState, useEffect, useRef } from "react";
import style from "./styles/Slider.module.css";
import SliderContent from "./SliderContent";

const Slider = ({ children, images, height, mainSlider }) => {
  const [divSize, setDivSize] = useState();
  const [swiper, setSwiper] = useState({
    px: -900,
    id: 1,
  });

  const [startClientX, setStartClientX] = useState();
  const saveSwiper = useRef(-900);
  const saveId = useRef(1);
  const speed = useRef();

  const length = images?.length;

  const DragSet = (step, id, ms) => {
    setSwiper({ ...swiper, px: step, id });
    saveId.current = id;
    saveSwiper.current = step;

    speed.current = ms;
  };

  const ViewSet = (px, id, value, ms) => {
    setSwiper({ ...swiper, px, id });
    setDivSize(value);
    speed.current = ms;
  };

  useEffect(() => {
    if (length <= 1) return;

    const timeout = setTimeout(() => {
      DragSet(swiper.px - divSize, saveId.current + 1, "0.5s");
    }, 5000);

    const totalValue = length * -divSize;
    totalValue === swiper.px && DragSet(-divSize, 1, "0ms");

    if (swiper.id === length - 1) {
      setSwiper({ ...swiper, id: 1 });
      saveId.current = 1;
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [swiper]);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const defaultSize = 900;

    windowWidth < defaultSize ? ViewSet(-windowWidth, 1, windowWidth) : ViewSet(-defaultSize, 1, defaultSize);

    window.addEventListener("resize", (e) => {
      const windowWidth = window.innerWidth;

      windowWidth <= defaultSize
        ? ViewSet(-windowWidth * saveId.current, saveId.current, windowWidth, "0ms")
        : ViewSet(-defaultSize * saveId.current, saveId.current, defaultSize, "0ms");
    });
  }, []);

  let img = new Image();
  img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";

  const DragStart = (e) => {
    e.dataTransfer.setDragImage(img, 0, 0);
    const clientX = e.nativeEvent.screenX;

    setStartClientX(clientX);
  };

  const DragMove = (e) => {
    const clientX = e.nativeEvent.screenX;

    const move = saveSwiper.current + clientX - startClientX;

    setSwiper({ ...swiper, px: move });
    speed.current = "0s";
  };

  const DragLeave = (e) => {
    const currentID = Number(e.target.id);
    const nextID = currentID + 1;
    const prevID = currentID - 1;

    const currentImg = currentID * -divSize;
    const nextImg = nextID * -divSize;

    const step = swiper.px < currentImg;

    if (step) {
      DragSet(nextImg, nextID, "0.5s");
    } else {
      DragSet(currentImg + divSize, prevID, "0.5s");
    }

    const lastImg = (length - 1) * -divSize;
    const firstImg = 1 * -divSize;

    const firstImgChange = swiper.px <= lastImg;
    const lastImgChange = swiper.px >= firstImg;

    if (firstImgChange) DragSet(firstImg, 1, "0ms");
    if (lastImgChange) DragSet(lastImg - firstImg, length - 2, "0ms");
  };

  return (
    <div className={style.wrap}>
      <div className={mainSlider ? style.mainBox : style.box} style={{ width: `${divSize}px`, height: `${height}px` }}>
        {children}

        <SliderContent
          swiper={swiper}
          speed={speed}
          images={images}
          DragStart={DragStart}
          DragLeave={DragLeave}
          DragMove={DragMove}
          divSize={divSize}
          mainSlider={mainSlider}
          length={length}
        />

        <div
          className={mainSlider ? `${style.imgCounter} ${style.mainImgCounter}` : style.imgCounter}
          style={{ top: `${height - 70}px` }}
        >
          <span>{swiper.id} </span> / <span> {length === 1 ? 1 : length - 2}</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
