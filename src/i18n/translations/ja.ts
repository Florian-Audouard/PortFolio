import type { Translation } from "../types";

export const ja: Translation = {
  nav: {
    home: "ホーム",
    about: "自己紹介",
    projects: "プロジェクト",
    resume: "履歴書",
  },
  home: {
    greeting: "こんにちは ！",
    iam: "私は ",
    name: "AUDOUARD FLORIAN",
    typewriter: [
      "Web 開発者",
      "バックエンド開発者",
      "ソフトウェア開発者",
      "データベース開発者",
    ],
    presentTitle: {
      prefix: "",
      emph: "自己紹介",
      suffix: " させてください",
    },
    p1: "私はプログラミングが特に好きです。解くべきパズルのように感じるからです。😁",
    p2Lead: "私は次のような有名なプログラミング言語を習得しています： ",
    p2Emph: "Java、JavaScript、PostgreSQL。",
    p3: "コンピュータサイエンスは私の情熱です。だから新しい技術を発見するのが大好きです。",
    p4Lead: "機会があるたびに、",
    p4Projects: "プロジェクト",
    p4Mid: "を ",
    p4Frameworks: "最新のフレームワーク",
    p4Comme: " （",
    p4FrameworkNames: "React や Angular）で作っています。",
    findTitle: "私の連絡先",
    contactLead: "お気軽に ",
    contactEmph: "ご連絡ください",
    illustrationAlt: "開発者のイラスト",
  },
  about: {
    whoTitle: { prefix: "", emph: "私", suffix: "について" },
    intro1Lead: "こんにちは、私は ",
    intro1Name: "Audouard Florian",
    intro1Mid: "、出身は ",
    intro1Place: "La Londe les Maures（フランス）です。",
    intro2Lead: "私はちょうど ",
    intro2Emph: "コンピュータサイエンスの学士号",
    intro2Suffix: "を取得したばかりで、就職先を探しています。",
    hobbiesIntro:
      "プログラミングへの情熱に加えて、私が楽しんでいる活動をいくつか紹介します：",
    hobbyGames: "ビデオゲームをする",
    hobbyManga: "アニメや漫画を見たり読んだりする",
    hobbyTravel: "旅行",
    skillsTitle: {
      prefix: "専門",
      emph: "スキル",
      suffix: "",
    },
    toolsTitle: { prefix: "私が使う", emph: "ツール", suffix: "" },
    illustrationAlt: "開発者のイラスト",
  },
  projectsPage: {
    title: { prefix: "最近の", emph: "プロジェクト", suffix: "" },
  },
  projects: [
    {
      url: "https://vimeo.com/1123354839?share=copy",
      title: "ロジックカード",
      githubLink: "https://github.com/DienF/Les-cartes-logiques",
      demoLink: "https://les-cartes-logiques.vercel.app",
      text: "命題論理をインタラクティブなカードゲームの形で学べるウェブサイトを作ることを目的とした学校のプロジェクトです。このアプリケーションでは、論理式を操作し、それらの関係を楽しく理解することができます。このプロジェクトを通じて React を学び、インタラクティブなインターフェースを設計するスキルを伸ばす機会を得ました。この取り組みにより、教育的な環境で理論的な学習と実践的な技術練習を組み合わせることができました。",
    },
    {
      url: "https://vimeo.com/1123354858?share=copy",
      title: "太陽系の3Dシミュレーション",
      githubLink: "https://github.com/Florian-Audouard/solarsystem",
      text: "Java と jMonkeyEngine で開発した太陽系の3Dシミュレーションです。このプロジェクトでは、距離やサイズを調整しながら太陽の周りを公転する惑星を視覚化できます。インタラクティブなカメラによって、3D空間のシーンを自由に探索することができます。惑星に適用されたテクスチャが没入感とリアルさを高めています。",
    },
    {
      url: "https://vimeo.com/1123354824?share=copy",
      title: "AKELLER",
      githubLink: "https://github.com/Florian-Audouard/Akeller",
      text: "アジャイル/スクラム手法に従い、Sopra Steria と協力して開発した時間割管理アプリケーションです。このプロジェクトでは、ユーザーとその役割を管理しながら、時間割を作成・編集・整理することができます。インターフェースには JavaFX、バックエンドには Quarkus、データベースには PostgreSQL を使用して開発しました。デプロイは Docker を介して行われます。",
    },
  ],
  resume: {
    download: "ダウンロード",
  },
  footer: {
    designed: "デザインと開発：Audouard Florian",
    illustrations: "Web illustrations by Storyset",
  },
  notFound: {
    alt: "ページが見つかりません",
  },
  projectsItem: {
    github: "Github",
    demo: "デモ",
    video: "動画",
  },
};
