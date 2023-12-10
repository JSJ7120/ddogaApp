import React, { useEffect, useRef, useState } from "react";
import OnlineCounselAreaNav from "./OnlineCounselAreaNav";
import OnlineCounselAreaSelect from "./OnlineCounselAreaSelect";
import { throttle } from "lodash";

let saveId = "si";

const OnlineCounselAreaRoot = ({ answer, setAnswer, name, deleteArr }) => {
  const buttonRef = useRef();

  const [area, setArea] = useState({
    si: { text: "", click: true },
    gu: { text: "", click: false },
    dong: { text: "", click: false },
  });

  const [bgVal, setBgVal] = useState({ width: "", height: "", offsetLeft: "" });
  const [isSejong, setIsSejong] = useState(false);

  const keys = Object.keys(area);

  useEffect(() => {
    const el = buttonRef.current.children;

    const setElSize = () => {
      const { offsetWidth, offsetHeight } = el[0];

      setBgValFunc(offsetWidth, offsetHeight);
    };

    const handleResize = throttle(() => {
      const { offsetWidth, offsetHeight } = el[0];
      const { offsetLeft } = el[saveId];

      setBgValFunc(offsetWidth, offsetHeight, offsetLeft);
    });

    setElSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [area]);

  useEffect(() => {
    if (answer[name]) {
      const arr = answer[name].split(" ");

      setArea((prev) => ({
        ...prev,
        si: { ...prev.si, text: arr[0] },
        gu: { ...prev.gu, text: arr[1] },
        dong: { ...prev.dong, text: arr[2] },
      }));

      if (!arr[1]) {
        setIsSejong(true);

        setTimeout(() => {
          const el = buttonRef.current.children;
          const { offsetWidth, offsetHeight, offsetLeft } = el[0];
          setBgValFunc(offsetWidth, offsetHeight, offsetLeft);
        }, 10);
      }
    }
  }, []);

  const setBgValFunc = (width, height, offsetLeft) => setBgVal({ ...bgVal, width, height, offsetLeft });

  const move = (nextId, currentId, text) => {
    const key = keys.filter((item) => item !== nextId && item !== currentId);

    setArea((prev) => ({
      ...prev,
      [currentId]: { ...prev[currentId], text, click: false },
      [nextId]: { ...prev[nextId], click: true, text: "" },
      [key]: { ...prev[key], click: false },
    }));

    moveBg(nextId);
  };

  const selectCate = (e) => {
    const { id, innerText: text } = e.target;

    const [si, gu, dong] = keys;

    checkAreaText();

    const isSejong = text === "세종시" ? true : false;
    const nextId = isSejong ? dong : gu;

    const moveToNextStep = (isSejong, nextId, currentId, text) => {
      setIsSejong(isSejong);
      move(nextId, currentId, text);
    };

    if (id === si) {
      moveToNextStep(isSejong, nextId, id, text);
    } else if (id === gu) {
      moveToNextStep(isSejong, dong, id, text);
    } else if (id === dong) {
      setArea((prev) => ({ ...prev, dong: { text, click: true } }));
      const item = `${area.si.text} ${area.gu.text} ${text}`;

      setAnswer({ ...answer, [name]: item });
    }
  };

  const moveCate = (e) => {
    const { id } = e.currentTarget;

    moveBg(id);

    setArea((prev) => {
      const updatedArea = {};
      Object.keys(prev).forEach((key) => {
        updatedArea[key] = {
          text: prev[key].text,
          click: id === key,
        };
      });

      return updatedArea;
    });
  };

  const moveBg = (nextId) => {
    const el = buttonRef.current.children;

    setTimeout(() => {
      const { id, offsetLeft } = el[nextId];

      saveId = id;

      if (id === nextId) {
        setBgVal((prev) => ({ ...prev, offsetLeft }));
      }
    }, 10);
  };

  const checkAreaText = () => {
    if (area.si.text && area.si.click === true) {
      setArea((prev) => ({
        ...prev,
        si: { ...prev.si, text: "", click: true },
        gu: { ...prev.gu, text: "", click: false },
        dong: { ...prev.dong, text: "", click: false },
      }));
      deleteArr();
    }
  };

  return (
    <>
      <OnlineCounselAreaNav buttonRef={buttonRef} area={area} moveCate={moveCate} bgVal={bgVal} isSejong={isSejong} />
      <OnlineCounselAreaSelect area={area} selectCate={selectCate} isSejong={isSejong} />
    </>
  );
};

export default OnlineCounselAreaRoot;
