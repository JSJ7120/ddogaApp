import React, { useState } from "react";
import style from "./styles/QAContents.module.css";
import { qaICons } from "../../assets/data/uiImg";
import koLocale from "timeago.js/lib/lang/ko";
import { format, register } from "timeago.js";
import { Helmet } from "react-helmet";

const QAContents = ({ complete, data }) => {
  const [toggle, setToggle] = useState(false);
  register("ko", koLocale);

  const styles = toggle ? style.detailNoneBox : style.detailInfoBox;

  const sliceKey = complete && data && Object.keys(data?.counselDetails[0]).slice(0, 6);

  const arr = complete && data && data?.counselDetails;

  const { title, text } = complete && arr && arr[0].문의내용;

  const { publishedDate, view } = complete && arr && arr[0];

  const newPublishedDate = 20 + `${publishedDate}`;

  const date = format(newPublishedDate, "ko");

  return (
    <>
      <Helmet>
        <title>{complete && `${title} | 또하나의가족, 또가`}</title>
      </Helmet>
      <div className={style.wrap}>
        <p className={style.title}>
          <img src={qaICons.question} alt="question" />
          &nbsp; {title}
        </p>
        <p className={style.text}>{text}</p>

        <div className={style.detailInfo}>
          <p onClick={() => setToggle(!toggle)}>
            상세정보
            <img src={toggle ? qaICons.arrowdown : qaICons.arrowUp} alt="arrowUp" className={style.arrow} />
          </p>
        </div>

        <div className={styles}>
          {complete &&
            sliceKey &&
            sliceKey.map((key) =>
              arr.map((item) => {
                const date = new Date();

                const itmes =
                  key === "출생연도" ? `${item[key]} 년생 (만${date.getFullYear() - item[key]}세)` : item[key];

                return (
                  <div className={style.infoBox} key={item}>
                    <p className={style.infoTitle}>{key}</p>
                    <p className={style.infoText}>{itmes}</p>
                  </div>
                );
              })
            )}
        </div>

        <div className={style.smallInfo}>
          <div>
            <p>조회수 {view}</p>
            <p>·</p>
            <p>{date}</p>
          </div>
          <div>
            <img src={qaICons.share} alt="share" />
            <p>공유하기</p>
          </div>
        </div>
      </div>

      <div className={style.answerBox}>
        <p>
          총 <span>0</span>개의 답변이 있어요.
        </p>
      </div>
    </>
  );
};

export default QAContents;
