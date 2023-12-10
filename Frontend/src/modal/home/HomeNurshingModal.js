import React from "react";
import { cates } from "../../assets/data/uiImg";
import useApplyTransition from "../../hooks/useApplyTransition.js";
import style from "./styles/HomeNurshingModal.module.css";
import ModalBackdrop from "../common/ModalBackdrop.js";

const NurshingModal = ({ close }) => {
  const transition = useApplyTransition(style.transition);

  return (
    <>
      <ModalBackdrop close={close} />
      <div className={style.wrap}>
        <div className={`${style.box} ${transition}`}>
          <div className={style.body_layout}>
            <div className={style.title}>
              <h1>요양시설 유형 및 서비스 안내</h1>
              <button onClick={close} />
            </div>
            <div className={style.content}>
              <div className={style.contents}>
                <h1>어르신이 입소하여 케어가 필요할 때</h1>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate13} alt="요양병원" />
                  </div>
                  <div>
                    <p className={style.name}>요양병원</p>
                    <p className={style.text}>
                      의료진이 상주하여 전문적인 의료 서비스를 제공받을 수 있어요 꾸준한 치료 및 재활이 필요하신 분에게
                      적합해요.
                    </p>
                  </div>
                </div>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate1} alt="요양원" />
                  </div>
                  <div>
                    <p className={style.name}>요양원</p>
                    <p className={style.text}>
                      체계적인 시스템으로 전문적인 요양 서비스를 받을 수 있는 10인 이상의 시설이에요.
                    </p>
                  </div>
                </div>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate2} alt="가정형 요양원" />
                  </div>
                  <div>
                    <p className={style.name}>공동생활가정 (가정형 요양원)</p>
                    <p className={style.text}>
                      요양원보다 작은 규모로 가정과 같은 주거여건에서 요양 서비스를 받을 수 있는 9인 이하의 시설이에요
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.contents}>
                <h1>어르신이 일정기간 돌봄이나 보호가 필요할 때</h1>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate3} alt="주야간보호" />
                  </div>
                  <div>
                    <p className={style.name}>주야간보호</p>
                    <p className={style.text}>
                      어르신 유치원으로 하루 중 일정시간 동안 어르신을 보호하며 신체활동 및 심신기능을 지원해요.
                    </p>
                  </div>
                </div>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate4} alt="단기보호" />
                  </div>
                  <div>
                    <p className={style.name}>단기보호</p>
                    <p className={style.text}>
                      하루 24시간, 월 최대 9일 동안 어르신을 보호하며 신체활동 및 심신기능을 지원해요.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.contents}>
                <h1>어르신 댁에서 요양 서비스를 받고 싶을 때</h1>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate5} alt="방문요양" />
                  </div>
                  <div>
                    <p className={style.name}>방문요양</p>
                    <p className={style.text}>
                      어르신 댁에 전문 요양인력이 방문하여 신체활동 및 가사활동 등을 지원해요.
                    </p>
                  </div>
                </div>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate6} alt="방문목욕" />
                  </div>
                  <div>
                    <p className={style.name}>방문목욕</p>
                    <p className={style.text}>목욕설비를 갖춘 차량 이용 또는 어르신 가정을 방문하여 목욕을 지원해요.</p>
                  </div>
                </div>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate7} alt="방문간호" />
                  </div>
                  <div>
                    <p className={style.name}>방문간호</p>
                    <p className={style.text}>어르신 댁에 간호사가 방문하여 간호 , 진료보조 서비스를 지원해요.</p>
                  </div>
                </div>
              </div>
              <div className={style.contents}>
                <h1>치매 어르신을 모시고 싶을 때</h1>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate8} alt="치매전담 요양원" />
                  </div>
                  <div>
                    <p className={style.name}>치매전담 요양원</p>
                    <p className={style.text}>
                      일반 요양원 서비스와 더불어 치매 전문 인력이 치매 맞춤 서비스를 제공해요.
                    </p>
                  </div>
                </div>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate9} alt="치매전담 주야간보호" />
                  </div>
                  <div>
                    <p className={style.name}>치매전담 주야간보호</p>
                    <p className={style.text}>
                      하루 중 일정 시간동안 치매 전문 요양인력이 치매 어르신에게 알맞는 서비스를 제공해요.
                    </p>
                  </div>
                </div>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate10} alt="치매전담 공동생활가정" />
                  </div>
                  <div>
                    <p className={style.name}>치매전담 공동생활가정</p>
                    <p className={style.text}>
                      9인 이하 가정집인 공동생활가정에서 치매 전문 인력이 맞춤 서비스를 제공해요.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.contents}>
                <h1>혼자 일상생활이 가능한 어르신을 모시고 싶을 때</h1>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate14} alt="실버타운" />
                  </div>
                  <div>
                    <p className={style.name}>실버타운</p>
                    <p className={style.text}>
                      혼자 일상생활이 가능한 어르신이 노후생활을 즐길 수 있도록 편의시설과 최상의 서비스를 갖춘 프리미엄
                      시설이에요.
                    </p>
                  </div>
                </div>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate15} alt="양로원" />
                  </div>
                  <div>
                    <p className={style.name}>양로원</p>
                    <p className={style.text}>
                      만 65 세 이상의 일상생활이 가능한 기초생활수급권자 어르신이 무료 입소 가능하며 그 외에 차상위 또는
                      도시근로자 평균 소득 이하로 일상생활이 가능한 어르신이 실비 입소가 가능해요.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.contents}>
                <h1>휠체어, 전동침대, 보행기 등이 필요할 때</h1>
                <div className={style.contentsbox}>
                  <div>
                    <img src={cates.cate11} alt="복지용구" />
                  </div>
                  <div>
                    <p className={style.name}>복지용구</p>
                    <p className={style.text}>
                      신체가 불편한 어르신의 일상생활 편의를 지원하기 위해 복지용구를 대여 및 판매하는 시설이에요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NurshingModal;
