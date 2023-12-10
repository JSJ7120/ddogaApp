import React, { useState } from "react";
import style from "./styles/HomeCompanyInfo.module.css";
import { Link } from "react-router-dom";
import HomeModalRoot from "../../modal/home/HomeModalRoot";

const HomeCompanyInfo = () => {
  const [companyModal, setCompanyModal] = useState({
    terms: false,
    privacy: false,
  });

  const TermsModalToogle = () => {
    setCompanyModal({ ...companyModal, terms: !companyModal.terms });
  };

  const PrivacyModalToogle = () => {
    setCompanyModal({ ...companyModal, privacy: !companyModal.privacy });
  };

  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <span>
          <Link style={{ color: "#929292" }} to="https://www.hectonproject.com/">
            회사소개
          </Link>
        </span>
        <span className={style.space}>|</span>

        <span className={style.etc} onClick={TermsModalToogle}>
          서비스이용약관
        </span>
        {companyModal.terms && <HomeModalRoot termsModal={companyModal.terms} close={TermsModalToogle} />}

        <span className={style.space}>|</span>
        <span className={style.etc} onClick={PrivacyModalToogle}>
          <b>개인정보처리방침</b>
        </span>
        {companyModal.privacy && <HomeModalRoot privacyModal={companyModal.privacy} close={PrivacyModalToogle} />}
      </div>

      <div>
        <Link className={style.callcenter}>
          <span>고객센터</span>
        </Link>
        <Link to="https://pf.kakao.com/_xefdeK" className={`${style.kakao} ${style.sns}`} target="_blank" />
        <Link to="https://blog.naver.com/ddogasw" className={`${style.blog} ${style.sns}`} target="_blank" />
        <Link to="https://www.youtube.com/@ddohana" className={`${style.youtube} ${style.sns}`} target="_blank" />
        <Link
          to="https://www.instagram.com/ddoga_official/"
          className={`${style.instagram} ${style.sns}`}
          target="_blank"
        />
        <Link
          to="https://www.facebook.com/ddoga.official"
          className={`${style.facebook} ${style.sns}`}
          target="_blank"
        />
      </div>
    </div>
  );
};

export default HomeCompanyInfo;
