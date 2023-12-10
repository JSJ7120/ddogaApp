import React from "react";
import style from "./styles/DetailContentsProfileCard.module.css";
import closeLogo from "../../assets/icon/common/close.svg";

const DetailContentsProfileCard = ({ profileModal, cardId, card, close, minimumLength }) => {
  return (
    <>
      {profileModal?.map((item, key) => {
        return (
          <div
            className={`${style.box}  ${cardId === key + 1 && style.filter}`}
            key={key}
            id={key + 1}
            draggable={minimumLength}
            style={{ width: `${card}px` }}
          >
            <div className={style.section_1}>
              <div className={style.header}>
                <p>프로필</p>
                <img src={closeLogo} alt="close" onClick={close} draggable={false} />
              </div>
              <div className={style.profile}>
                <div className={style.workerInfo}>
                  <img src={item.photo} alt={"person"} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.section_2}>
              <div>
                <p className={style.check}>경력</p>
                {item.career.map((item) => {
                  return (
                    <div className={style.careerBox}>
                      <p>{item.text}</p>
                      <p>{item.experience}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <p className={style.check}>자기소개</p>
                <p className={style.introduce}>{item.introduce}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailContentsProfileCard;
