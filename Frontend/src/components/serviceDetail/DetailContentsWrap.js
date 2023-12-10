import React, { useState } from "react";
import style from "./styles/DetailContentsWrap.module.css";
import info from "../../assets/icon/common/info.svg";
import DetailContentsModalRoot from "../../modal/serviceDetail/DetailContentsModalRoot";

const DetailContentsWrap = ({ children, title, icon, css }) => {
  const [ratingModal, setRatingModal] = useState(false);

  return (
    <>
      <div className={style.wrap} style={{ ...css }}>
        <p className={style.title}>
          {title}
          {icon && (
            <img
              src={info}
              alt="info"
              onClick={() => {
                setRatingModal(!ratingModal);
              }}
            />
          )}
        </p>
        {children}
      </div>
      {ratingModal && <DetailContentsModalRoot ratingModal={ratingModal} setRatingModal={setRatingModal} />}
    </>
  );
};

export default DetailContentsWrap;
