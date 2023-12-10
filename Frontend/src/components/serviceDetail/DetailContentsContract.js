import React from "react";
import style from "./styles/DetailContentsContract.module.css";
import DetailcontentsNoInfo from "./DetailcontentsNoInfo";
import DetailContentsWrap from "./DetailContentsWrap";

const DetailContentsContract = ({ Data, Markup }) => {
  const text = "등록된 정보가 없어요";
  const subText = "필요한 정보를 확인할 수 있도록 아직 준비 중이에요.";

  return (
    <div style={{ minHeight: "87vh" }}>
      <div className={style.wrap}>
        {Data.contract?.length >= 1 ? (
          Data.contract?.map((item, key) => {
            return (
              <DetailContentsWrap title={item.title} key={key}>
                <p className={style.text}>
                  {item.content.img && <img src={item.content.img} alt={item.title} />}
                  <p dangerouslySetInnerHTML={Markup(item.content.text)} />
                </p>
              </DetailContentsWrap>
            );
          })
        ) : (
          <DetailcontentsNoInfo text={text} subText={subText} />
        )}
      </div>
    </div>
  );
};

export default DetailContentsContract;
