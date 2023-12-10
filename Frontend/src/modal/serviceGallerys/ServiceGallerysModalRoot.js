import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ServcieGalleryModal from "./ServcieGalleryModal";

const ServiceGallerysModalRoot = ({ modal, setModal }) => {
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
          <ServcieGalleryModal modal={modal} setModal={setModal} />,
          document.getElementById("modal-content")
        )}
    </>
  );
};

export default ServiceGallerysModalRoot;
