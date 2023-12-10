import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import HomeNurshingModal from "./HomeNurshingModal";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";

const HomeModalRoot = ({ close, nurshingModal, termsModal, privacyModal }) => {
  useEffect(() => {
    document.body.style.cssText = `overflow:hidden; `;

    return () => {
      document.body.style.cssText = ``;
    };
  }, []);

  return (
    <>
      {nurshingModal &&
        ReactDOM.createPortal(
          <HomeNurshingModal close={close} />,
          document.getElementById("modal-content")
        )}

      {termsModal &&
        ReactDOM.createPortal(
          <TermsModal close={close} />,
          document.getElementById("modal-content")
        )}

      {privacyModal &&
        ReactDOM.createPortal(
          <PrivacyModal close={close} />,
          document.getElementById("modal-content")
        )}
    </>
  );
};

export default HomeModalRoot;
