import React from "react";
import CompanyModalLayout from "./CompanyModalLayout";
import style from "./styles/PrivacyModal.module.css";
import ModalBackdrop from "../common/ModalBackdrop";

const privacyModal = ({ close }) => {
  return (
    <>
      <ModalBackdrop close={close} />
      <CompanyModalLayout close={close}>
        <div className={style.content}>
          <h2>개인정보처리방침</h2>
          <div className={style.intro}>
            <p>
              주식회사 헥톤프로젝트 (이하 "회사")는 개인정보보호법 제30조에 따라 이용자의 개인정보를 보호하고 이와
              관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립하여
              공개합니다
            </p>
            <p>본 개인정보 처리방침은 아래와 같은 내용을 담고 있습니다.</p>
            <p>1. 개인정보의 수집 및 이용처리목적 </p>
            <p>2. 개인정보의 처리 및 보유 기간</p>
            <p>3. 개인정보의 제3자 제공</p>
            <p>4. 개인정보처리의 위탁</p>
            <p>5. 정보주체와 법정대리인의 권리.의무 및 행사방법</p>
            <p>6. 개인정보의 파기</p>
            <p>7. 개인정보의 안전성 확보조치</p>
            <p>8. 개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항</p>
            <p>9. 개인정보 보호책임자</p>
            <p>10. 권익침해 구제방법</p>
            <p>11. 고지의 의무</p>
          </div>
          <div className={style.article_1}>
            <h3>1. 개인정보의 수집 및 이용처리목적</h3>
            <p>
              회사는 다음의 목적을 위하여 개인정보를 수집합니다. 수집하고 있는 개인정보는 다음의 목적 이외의 용도로는
              이용되지 않으며, 이용 목적이 변경되는 경우에는 ｢개인정보보호법｣ 제18조에 따라 별도의 동의를 받는 등 필요한
              조치를 이행할 예정입니다.
            </p>
            <p>
              * 선택항목 없이도 서비스는 제공됩니다. 단, 선택항목 미동의 시 해당 선택항목에서 제공하는 이용혜택을 받으실
              수 없습니다.
            </p>
            <p>
              * 회사는 법정대리인의 동의가 필요한 만 14세 미만 아동의 개인정보는 원칙적으로 수집하지 않습니다.
              예외적으로 만14세 미만 아동의 개인정보를 수집해야 하는 경우가 있다면, 만14세 미만 아동의 개인정보를
              수집하는 경우에는 법정대리인의 동의를 받습니다.
            </p>
            <p>1) 수집하는 개인정보의 항목</p>
            <table className={`${style.table_1} ${style.allTable}`}>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>수집 항목</th>
                  <th>이용 목적</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>이메일 회원가입</td>
                  <td>(필수)이메일, 휴대폰번호</td>
                  <td rowSpan={3}>
                    회원가입 의사 확인, 회원식별, 부정이용 확인 방지, 상담 서비스 제공, 고지사항 전달, 사용자 분석
                  </td>
                </tr>
                <tr>
                  <td>카카오 계정 회원가입</td>
                  <td>
                    (필수) 카카오 토큰, 프로필정보(닉네임/프로필 사진), 카카오계정 (이메일), 휴대폰번호 (선택) 성별,
                    연령대
                  </td>
                </tr>
                <tr>
                  <td>네이버 계정 회원가입</td>
                  <td>(필수) 네이버 토큰, 이메일, 휴대폰번호 (선택) 별명, 성별, 연령대</td>
                </tr>
                <tr>
                  <td>복지용구신청</td>
                  <td>(필수) 어르신 성함, 장기요양인정번호</td>
                  <td>복지용구 상담 및 서비스 제공</td>
                </tr>
                <tr>
                  <td>요양시설 가입신청</td>
                  <td>(필수) 담당자 이름 (선택) 담당자 직함</td>
                  <td>시설 전용 서비스 제공 및 고지사항 전달</td>
                </tr>
                <tr>
                  <td>의료폐기물 서비스신청</td>
                  <td>(필수) 이름, 전화, 이메일</td>
                  <td>의료폐기물 서비스 신청</td>
                </tr>
                <tr>
                  <td>소독 서비스신청</td>
                  <td>(필수) 이름, 전화, 이메일</td>
                  <td>소독 서비스 신청</td>
                </tr>
              </tbody>
            </table>
            <p>2) 회원 외 정보주체에 대한 개인정보의 수집·이용 목적과 개인정보 항목은 아래와 같습니다.</p>
            <table className={`${style.table_2} ${style.allTable}`}>
              <thead>
                <tr>
                  <th>수집단계</th>
                  <th>수집 항목</th>
                  <th>이용 목적</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>온라인 상담</td>
                  <td>[비회원] (필수) 답변 받을 휴대폰 번호 </td>
                  <td>온라인 상담 답변 제공</td>
                </tr>
                <tr>
                  <td>복지용구신청</td>
                  <td>[비회원] (필수) 어르신 성함, 장기요양인정번호, 휴대폰번호</td>
                  <td>복지용구 상담 및 서비스 제공</td>
                </tr>
              </tbody>
            </table>
            <p>3) 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.</p>

            <p className={style.p_indent}>- IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록</p>
          </div>
          <div className={style.article_2}>
            <h3>2. 개인정보의 이용 및 보유 기간</h3>
            <p>
              회사는 정보주체의 개인정보를 원칙적으로 고지 및 약정한 기간 동안 보유 및 이용하며 개인정보의 수집 및
              이용목적이 달성되면 지체 없이 파기합니다. 이용자로부터 동의 받은 개인정보 보유 기간이 경과하거나 처리
              목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 일정기간 보존하여야 하는 경우에는 해당
              개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
            </p>
            <p>- 법령에 의하여 수집·이용되는 이용자의 정보</p>
            <table className={`${style.table_3} ${style.allTable}`}>
              <thead>
                <tr>
                  <th>법령</th>
                  <th>보유·이용목적</th>
                  <th>보유항목</th>
                  <th>보유·이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>통신비밀보호법</td>
                  <td>법원의 영장을 받아 수사기관이 요청 시 제공</td>
                  <td> 로그기록, 접속지 정보 등</td>
                  <td>3개월</td>
                </tr>
                <tr>
                  <td rowSpan={3}>전자상거래 등에서의 소비자 보호에 관한 법률</td>
                  <td>표시·광고에 관한 기록</td>
                  <td>표시·광고 기록</td>
                  <td>6개월</td>
                </tr>
                <tr>
                  <td>계약 또는 청약철회 등에 관한 기록</td>
                  <td>소비자 식별정보 계약/청약철회 기록</td>
                  <td>5년</td>
                </tr>
                <tr>
                  <td>소비자불만 또는 분쟁처리에 관한 기록 </td>
                  <td>소비자 식별정보 분쟁처리 기록</td>
                  <td>3년</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style.article_3}>
            <h3>3. 개인정보의 제3자 제공</h3>
            <p>...</p>
          </div>
        </div>
      </CompanyModalLayout>
    </>
  );
};

export default privacyModal;
