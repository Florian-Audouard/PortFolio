import type { Translation } from "../types";

export const ko: Translation = {
  nav: {
    home: "홈",
    about: "소개",
    projects: "프로젝트",
    resume: "이력서",
  },
  home: {
    greeting: "안녕하세요 !",
    iam: "저는 ",
    name: "AUDOUARD FLORIAN",
    typewriter: [
      "웹 개발자",
      "백엔드 개발자",
      "소프트웨어 개발자",
      "데이터베이스 개발자",
    ],
    presentTitle: {
      prefix: "",
      emph: "제 소개",
      suffix: "를 하겠습니다",
    },
    p1: "저는 특히 프로그래밍을 좋아합니다. 풀어야 할 퍼즐처럼 느껴지기 때문입니다. 😁",
    p2Lead: "저는 다음과 같은 잘 알려진 프로그래밍 언어를 능숙하게 다룹니다: ",
    p2Emph: "Java, JavaScript 및 PostgreSQL.",
    p3: "컴퓨터 과학은 제 열정입니다. 그래서 저는 새로운 기술을 발견하는 것을 좋아합니다.",
    p4Lead: "기회가 있을 때마다 저는 ",
    p4Projects: "프로젝트",
    p4Mid: "를 ",
    p4Frameworks: "최신 프레임워크",
    p4Comme: "로, 예를 들면 ",
    p4FrameworkNames: "React와 Angular로 만듭니다.",
    findTitle: "저를 찾는 곳",
    contactLead: "언제든지 편하게 ",
    contactEmph: "연락해 주세요",
    illustrationAlt: "개발자 일러스트",
  },
  about: {
    whoTitle: { prefix: "", emph: "나", suffix: "는 누구인가" },
    intro1Lead: "안녕하세요, 저는 ",
    intro1Name: "Audouard Florian",
    intro1Mid: ", 출신은 ",
    intro1Place: "프랑스 La Londe les Maures입니다.",
    intro2Lead: "저는 막 ",
    intro2Emph: "컴퓨터 과학 학사 학위",
    intro2Suffix: "를 마쳤으며 일자리를 찾고 있습니다.",
    hobbiesIntro:
      "프로그래밍에 대한 열정 외에도, 제가 즐기는 몇 가지 활동을 소개합니다:",
    hobbyGames: "비디오 게임 하기",
    hobbyManga: "만화를 보고 읽기",
    hobbyTravel: "여행하기",
    skillsTitle: {
      prefix: "전문 ",
      emph: "기술",
      suffix: "",
    },
    toolsTitle: { prefix: "제가 사용하는 ", emph: "도구", suffix: "" },
    illustrationAlt: "개발자 일러스트",
  },
  projectsPage: {
    title: { prefix: "최근 ", emph: "프로젝트", suffix: "" },
  },
  projects: [
    {
      url: "https://vimeo.com/1123354839?share=copy",
      title: "논리 카드",
      githubLink: "https://github.com/DienF/Les-cartes-logiques",
      demoLink: "https://les-cartes-logiques.vercel.app",
      text: "명제 논리를 인터랙티브 카드 게임 형태로 배울 수 있는 웹사이트를 만드는 것을 목표로 한 학교 프로젝트입니다. 이 애플리케이션을 통해 논리 공식을 다루고 그 관계를 재미있게 이해할 수 있습니다. 이 프로젝트는 제게 React를 배우고 인터랙티브 인터페이스 설계 능력을 키울 기회를 주었습니다. 이 작업을 통해 교육적인 환경에서 이론 학습과 실습을 결합할 수 있었습니다.",
    },
    {
      url: "https://vimeo.com/1123354858?share=copy",
      title: "태양계 3D 시뮬레이션",
      githubLink: "https://github.com/Florian-Audouard/solarsystem",
      text: "Java와 jMonkeyEngine으로 개발한 태양계 3D 시뮬레이션입니다. 이 프로젝트에서는 거리와 크기를 조정하면서 태양 주위를 도는 행성들을 시각화할 수 있습니다. 인터랙티브 카메라를 통해 3D 장면을 자유롭게 탐색할 수 있습니다. 행성에 적용된 텍스처가 몰입감과 사실감을 높여 줍니다.",
    },
    {
      url: "https://vimeo.com/1123354824?share=copy",
      title: "AKELLER",
      githubLink: "https://github.com/Florian-Audouard/Akeller",
      text: "애자일/스크럼 방법론에 따라 Sopra Steria와 협력하여 개발한 시간표 관리 애플리케이션입니다. 이 프로젝트에서는 사용자와 그 역할을 관리하면서 시간표를 만들고 편집하고 정리할 수 있습니다. 인터페이스는 JavaFX, 백엔드는 Quarkus, 데이터베이스는 PostgreSQL로 개발했습니다. 배포는 Docker를 통해 이루어집니다.",
    },
  ],
  resume: {
    download: "다운로드",
  },
  footer: {
    designed: "Audouard Florian이 디자인하고 개발했습니다",
    illustrations: "Web illustrations by Storyset",
  },
  notFound: {
    alt: "페이지를 찾을 수 없습니다",
  },
  projectsItem: {
    github: "Github",
    demo: "데모",
    video: "비디오",
  },
};
