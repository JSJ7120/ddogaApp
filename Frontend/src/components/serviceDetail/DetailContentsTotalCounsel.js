import React from "react";
import style from "./styles/DetailContentsTotalCounsel.module.css";
import DetailcontentsNoInfo from "./DetailcontentsNoInfo";
import online_counsel from "../../assets/icon/serviceDetail/page_counsel.svg";
import call_counsel from "../../assets/icon/serviceDetail/page_call.svg";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

const DetailContentsTotalCounsel = ({
  onlineCounselCount,
  phoneCounselCount,
  counselDetails,
  id,
  navId,
  title,
  moveQA,
  isOnline,
}) => {
  const text = "상담 내역이 없어요";
  const subText = "도움이 필요하시다면 상담을 시작해 보세요.";

  register("ko", koLocale);

  return (
    <div className={style.wrap}>
      <div>
        <div className={style.box}>
          <div className={style.section}>
            <img src={online_counsel} alt="onlnie_counsel" />
            <div>
              <p>온라인 상담</p>
              <p>{onlineCounselCount}건</p>
            </div>
          </div>
          <div className={style.section}>
            <img src={call_counsel} alt="onlnie_counsel" />
            <div>
              <p>전화 상담</p>
              <p>{phoneCounselCount}건</p>
            </div>
          </div>
        </div>
      </div>

      {counselDetails?.length >= 1 && (
        <div className={style.counselBox}>
          <p className={style.title}>온라인 상담</p>
          {counselDetails?.map((item) => {
            const { title } = item["문의내용"];
            const { id } = item;

            const publishedDate = item.publishedDate;

            return (
              <div className={style.listBox} key={id} onClick={(e) => moveQA(e, id)}>
                <h3>{title}</h3>
                <div className={style.listInfo}>
                  <p>답변대기</p>
                  <p>·</p>
                  <p>{format(publishedDate, "ko")} 전 상담</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {counselDetails?.length < 1 && (
        <DetailcontentsNoInfo
          text={text}
          subText={subText}
          counsel={true}
          id={id}
          navId={navId}
          title={title}
          isOnline={isOnline}
        />
      )}
    </div>
  );
};

export default DetailContentsTotalCounsel;
