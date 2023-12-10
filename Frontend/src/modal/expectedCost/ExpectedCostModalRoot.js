import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ExpectedCostModal from "./ExpectedCostModal";

const ExpectedCostModalRoot = ({ modal, setModal }) => {
  useEffect(() => {
    document.body.style.cssText = `overflow:hidden;`;

    return () => {
      document.body.style.cssText = ``;
    };
  }, []);

  return (
    <>
      {modal &&
        ReactDOM.createPortal(
          <ExpectedCostModal modal={modal} setModal={setModal} />,
          document.getElementById("modal-content")
        )}
    </>
  );
};

export default ExpectedCostModalRoot;
