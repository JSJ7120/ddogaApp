import React from "react";
import style from "./styles/NotFound.module.css";
import empty_error from "../../assets/icon/common/empty_error.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <img src={empty_error} alt="error" className={style.error} />
        <p className={style.pinkText}>요청하신 페이지를 찾을 수 없어요</p>
        <p className={style.text}>
          페이지의 주소가 잘못 입력되었거나,
          <br />
          변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없어요.
          <br />
          페이지의 주소와 경로가 정확한지 한 번 더 확인해 주세요.
          <br />
        </p>
        <div className={style.buttons}>
          <button onClick={() => navigate(-1)}>뒤로가기</button>
          <button onClick={() => navigate("/")}>메인으로</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
