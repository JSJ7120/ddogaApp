import React, { useState, useEffect } from "react";
import HomeHacktonFamily from "./HomeHacktonFamily";
import HomeHacktonInfo from "./HomeHacktonInfo";

const HomeFooter = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth <= 960);
  const [toggle, setToggle] = useState(true);

  const toggleHandle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 960) {
        setWindowSize(true);
      } else {
        setWindowSize(false);
      }
    });
  }, []);

  return (
    <footer style={{ height: "30rem" }}>
      <HomeHacktonInfo size={windowSize} toggle={toggle} toggleHandle={toggleHandle} />
      <HomeHacktonFamily toggle={toggle} />
    </footer>
  );
};

export default HomeFooter;
