import React from "react";
import style from "./styles/HomeApp.module.css";
import { app } from "../../assets/data/uiImg";
import { Link } from "react-router-dom";

const HomeApp = () => {
  return (
    <div className={style.App_wrap}>
      <div>
        <img src={app.DDoga} alt="또하나의 가족 로고" className={style.DDogaLogo} />
        <p>또하나의 가족을 앱에서도 만나보세요</p>
      </div>
      <div>
        <Link to="https://play.google.com/store/apps/details?id=com.hecton.ddoga&pli=1">
          <div>
            <img src={app.Android} alt="안드로이드" className={style.AppIcon} />
            <span>안드로이드</span>
          </div>
        </Link>
        <Link to="https://apps.apple.com/kr/app/%EB%98%90%ED%95%98%EB%82%98%EC%9D%98%EA%B0%80%EC%A1%B1/id1591335130">
          <div>
            <img src={app.Ios} alt="아이폰" className={style.AppIcon} />
            <span>아이폰</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeApp;
