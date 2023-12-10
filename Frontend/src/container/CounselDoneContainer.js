import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DoneContent from "../components/counselDone/DoneContent";
import DoneFooter from "../components/counselDone/DoneFooter";

const CounselDoneContainer = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const handlePrevPage = (e) => {
      e.preventDefault();
      window.history.forward();
    };

    window.history.pushState(null, null, window.location.pathname);

    window.addEventListener("popstate", handlePrevPage);

    return () => {
      window.removeEventListener("popstate", handlePrevPage);
    };
  }, []);

  return (
    <>
      <DoneContent />
      <DoneFooter id={id} navigate={navigate} />
    </>
  );
};

export default CounselDoneContainer;
