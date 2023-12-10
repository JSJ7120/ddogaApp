import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import OnlineCounselModal from "./OnlineCounselModal";
import OnlineCounselDoInquiry from "./OnlineCounselDoInquiry";
import OnlineCousenlCollectInfo from "./OnlineCousenlCollectInfo";

const OnlineCounselRoot = ({
  modal,
  setModal,
  next,
  inquiryModal,
  inquirySetModal,
  collectInfoModal,
  setCollectInfoModal,
  answer,
}) => {
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
          <OnlineCounselModal modal={modal} setModal={setModal} next={next} />,
          document.getElementById("modal-content")
        )}
      {inquiryModal &&
        ReactDOM.createPortal(
          <OnlineCounselDoInquiry modal={inquiryModal} setModal={inquirySetModal} answer={answer} />,
          document.getElementById("modal-content")
        )}
      {collectInfoModal &&
        ReactDOM.createPortal(
          <OnlineCousenlCollectInfo modal={collectInfoModal} setModal={setCollectInfoModal} />,
          document.getElementById("modal-more-content")
        )}
    </>
  );
};

export default OnlineCounselRoot;
