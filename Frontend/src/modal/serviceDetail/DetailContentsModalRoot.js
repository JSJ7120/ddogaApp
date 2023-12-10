import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import DetailContentsRatingModal from "./DetailContentsRatingModal";
import DetailContentsProfileModal from "./DetailContentsProfileModal";

const DetailContentsModalRoot = ({ ratingModal, setRatingModal, profileModal, setProfileModal }) => {
  useEffect(() => {
    document.body.style.cssText = `overflow:hidden;`;

    return () => {
      document.body.style.cssText = ``;
    };
  }, []);

  return (
    <>
      {ratingModal &&
        ReactDOM.createPortal(
          <DetailContentsRatingModal setRatingModal={setRatingModal} ratingModal={ratingModal} />,
          document.getElementById("modal-content")
        )}
      {profileModal &&
        ReactDOM.createPortal(
          <DetailContentsProfileModal profileModal={profileModal} setProfileModal={setProfileModal} />,
          document.getElementById("modal-content")
        )}
    </>
  );
};

export default DetailContentsModalRoot;
