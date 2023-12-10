import React, { useState } from "react";
import style from "./styles/DetailContentsLocation.module.css";
import useApplyTransition from "../../hooks/useApplyTransition";
import copyIcon from "../../assets/icon/serviceDetail/copy_address.svg";
import DetailContentsWrap from "./DetailContentsWrap";

const DetailContentsLocation = ({ naverMap, address }) => {
  const [copy, setCopy] = useState();
  const [copyAddress, setCopyAddress] = useState();
  const [reverseTranstion, setReverseTranstion] = useState();

  const transition = useApplyTransition(style.transition);

  const deleteClipBoard = (e) => {
    setReverseTranstion(style.reverseTranstion);

    setTimeout(() => {
      setCopy(false);
      setCopyAddress("");
      setReverseTranstion("");
    }, 100);
  };

  const copyClipBoard = async (e) => {
    const text = e.currentTarget.firstChild.textContent;
    const message = "주소가 복사되었어요.";

    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);
      setCopyAddress(message);
    } catch (e) {
      setCopy(false);
    }
    copyTimer();
  };

  const copyTimer = (e) => {
    const interval = setInterval(() => {
      setCopy(false);
      setCopyAddress("");
      setReverseTranstion("");

      clearInterval(interval);
    }, 3000);
  };

  return (
    <DetailContentsWrap title={"위치 보기"} css={{ borderBottom: "none" }}>
      <div className={style.locationWrap}>
        <p className={style.address} onClick={copyClipBoard}>
          {address}
          <button>
            <img src={copyIcon} alt="copyButton" />
            복사
          </button>
        </p>
        <div className={style.naverMap} ref={naverMap} />
      </div>
      {copy && (
        <div className={`${style.copySuccess} ${transition} ${reverseTranstion}`}>
          <p onClick={deleteClipBoard}>{copyAddress}</p>
        </div>
      )}
    </DetailContentsWrap>
  );
};

export default DetailContentsLocation;
