import React from "react";
import style from "./styles/DetailContentsNotification.module.css";
import DetailcontentsNoInfo from "./DetailcontentsNoInfo";
import DetailContentsGallery from "./DetailContentsAllGallery";
import arrowRight from "../../assets/icon/serviceDetail/arrow_right.svg";
import { Link } from "react-router-dom";

const DetailContentsNotification = ({ Data, id }) => {
  const text = "등록된 정보가 없어요";
  const subText = "필요한 정보를 확인할 수 있도록 아직 준비 중이에요.";

  return (
    <>
      <div className={style.wrap}>
        {Data.notice?.length >= 1 ? (
          <>
            <div className={style.title}>
              <Link to={`/service/detail/${id}/gallery/list`}>
                <p>갤러리</p>
                <img src={arrowRight} alt="arrow" />
              </Link>
            </div>
            <DetailContentsGallery preview={true} Data={Data?.notice} id={id} />
          </>
        ) : (
          <DetailcontentsNoInfo text={text} subText={subText} />
        )}
      </div>
    </>
  );
};

export default DetailContentsNotification;
