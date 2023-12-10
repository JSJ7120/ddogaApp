import { cates } from "./uiImg";
import emptyImg from "../image/serviceList/listimage.jpeg";

export const NurshingData = [
  {
    id: 0,
    type: "요양병원",
    image: cates.cate13,
    cateId: 13,
  },
  {
    id: 1,
    type: "요양원",
    image: cates.cate1,
    cateId: 1,
  },
  {
    id: 2,
    type: "공동생활가정",
    image: cates.cate2,
    cateId: 2,
  },
  {
    id: 3,
    type: "실버타운",
    image: cates.cate14,
    cateId: 14,
  },
  {
    id: 4,
    type: "양로원",
    image: cates.cate15,
    cateId: 15,
  },
  {
    id: 5,
    type: "주야간보호",
    image: cates.cate3,
    cateId: 3,
  },
  {
    id: 6,
    type: "단기보호",
    image: cates.cate4,
    cateId: 4,
  },
  {
    id: 7,
    type: "방문요양",
    image: cates.cate5,
    cateId: 5,
  },
  {
    id: 8,
    type: "방문목욕",
    image: cates.cate6,
    cateId: 6,
  },
  {
    id: 9,
    type: "방문간호",
    image: cates.cate7,
    cateId: 7,
  },
  {
    id: 10,
    type: "복지용구",
    image: cates.cate11,
    cateId: 11,
  },
  {
    id: 11,
    type: "치매전담 요양원",
    image: cates.cate8,
    cateId: 8,
  },
  {
    id: 12,
    type: "치매전담 주야간보호",
    image: cates.cate9,
    cateId: 9,
  },
  {
    id: 13,
    type: "치매전담 공동생활가정",
    image: cates.cate10,
    cateId: 10,
  },
];

export const recommendText = [
  {
    id: 10,
    text: "또가추천순",
  },
  {
    id: 20,
    text: "조회순",
  },
  {
    id: 30,
    text: "상담많은순",
  },
  {
    id: 40,
    text: "후기많은순",
  },
  {
    id: 50,
    text: "찜많은순",
  },
];

export const FilterRankText = [
  {
    id: 0,
    text: "A등급",
  },
  {
    id: 1,
    text: "B등급",
  },
  {
    id: 2,
    text: "C등급",
  },
  {
    id: 3,
    text: "D등급",
  },
  {
    id: 4,
    text: "E등급",
  },
];

export const FilterProgramText = [
  {
    id: 0,
    text: "인지기능 향상",
  },
  {
    id: 1,
    text: "운동 보조",
  },
  {
    id: 2,
    text: "기타 프로그램",
  },
];

export const navUI = [
  { id: 1, text: "시설소개" },
  { id: 2, text: "계약안내" },
  { id: 3, text: "알림마당" },
  { id: 4, text: "상담사례" },
  { id: 5, text: "후기" },
];

export const DetailContentsRatingData = [
  [
    {
      id: 1,
      title: "시설운영",
      text: "기관운영과 종사자 후생복지 및 교육 등이 적합하게 이루어지고 있는지를 평가 ",
    },
    {
      id: 2,
      title: "환경 및 안전",
      text: "안전한 시설·설비, 응급상황 대처 기반, 수급자의 생활환경과 위험도등을 평가",
    },
    {
      id: 3,
      title: "어르신 인권보장",
      text: "어르신의 권리를 인지하고 존중하며 윤리적인 기관 운영이 이루어지는지 여부를 평가",
    },
    {
      id: 4,
      title: "서비스 제공과정",
      text: "기관이나 어르신들의 생활공간에서 장기요양 서비스가 효율적이고 효과적으로 제공되고 있는가 등을 평가",
    },
    {
      id: 5,
      title: "서비스 제공결과",
      text: "어르신의 만족도 및 상태호전여부 등을 평가",
    },
  ],
  [
    {
      id: 1,
      title: "신설기관",
      text: "평가대상기관 선정 시점 이후 지정, 설치된 기관",
    },
    {
      id: 2,
      title: "평가비대상",
      text: "휴폐업, 적용종료, 지정취소, 폐쇄명령, 평균수급자 3인 미만 기관 등의 사유로 평가연도에 평가 받지 못한 기관",
    },
    {
      id: 3,
      title: "평가거부",
      text: "자료제출이나 평가를 거부한 기관",
    },
  ],
];

export const QuestionUI = [
  {
    id: 1,
    title: "어르신의 장기요양등급을 선택해 주세요",
    icon: require("../icon/onlineCounsel/grade.svg").default,
  },
  {
    id: 2,
    title: "어르신께서 기초생활수급자이거나 본인부담금 감경대상이신가요?",
    icon: require("../icon/onlineCounsel/discount.svg").default,
  },
  {
    id: 3,
    title: "어르신의 질병명을 입력해 주세요",
    icon: require("../icon/onlineCounsel/disease.svg").default,
  },
  {
    id: 4,
    title: "어르신의 성별을 선택해 주세요",
    icon: require("../icon/onlineCounsel/gender.svg").default,
  },
  {
    id: 5,
    title: "어르신의 출생연도 4자리를 입력해 주세요",
    icon: require("../icon/onlineCounsel/birth_year.svg").default,
  },
  {
    id: 6,
    title: "어르신의 거주지역을 선택해 주세요",
    icon: require("../icon/onlineCounsel/address.svg").default,
  },
  {
    id: 7,
    title: "문의 내용을 입력해 주세요",
    text: "어르신 신체 및 인지상태를 구체적으로 작성해주시면 더욱 자세한 상담이 가능해요",
    icon: require("../icon/onlineCounsel/question.svg").default,
  },
];

export const AnswerUI = [
  {
    id: "장기요양등급",
    select: [
      "1등급",
      "2등급",
      "3등급",
      "4등급",
      "5등급",
      "인지지원등급",
      "등급 신청중",
      "등급없음 & 등급신청 도움 필요",
      "잘 모르겠어요",
    ],
  },
  {
    id: "기초생활수급자 / 감경 대상 여부",
    select: ["예", "아니오", "잘 모르겠어요"],
  },
  {
    id: "질병명",
    select: ["없어요 / 잘 모르겠어요"],
  },
  {
    id: "성별",
    select: ["남성", "여성"],
  },
  {
    id: "출생연도",
  },
  {
    id: "거주지역",
  },
  {
    id: "문의내용",
  },
];

export const areaNav = [
  {
    id: "si",
    text: "시/도",
  },
  {
    id: "gu",
    text: "시/군/구",
  },
  {
    id: "dong",
    text: "동/읍/면",
  },
];
