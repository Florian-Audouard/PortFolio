import type { Translation } from "../types";

export const ru: Translation = {
  nav: {
    home: "Главная",
    about: "Обо мне",
    projects: "Проекты",
    resume: "Резюме",
  },
  home: {
    greeting: "Привет !",
    iam: "Я ",
    name: "AUDOUARD FLORIAN",
    typewriter: [
      "Веб-разработчик",
      "Backend-разработчик",
      "Разработчик ПО",
      "Разработчик баз данных",
    ],
    presentTitle: {
      prefix: "ПОЗВОЛЬТЕ ",
      emph: "ПРЕДСТАВИТЬСЯ",
      suffix: "",
    },
    p1: "Мне особенно нравится программирование, потому что я воспринимаю его как головоломку, которую нужно решить. 😁",
    p2Lead: "Я владею известными языками программирования, такими как: ",
    p2Emph: "Java, JavaScript и PostgreSQL.",
    p3: "Информатика — моя страсть, поэтому я обожаю открывать для себя новые технологии.",
    p4Lead: "Как только появляется возможность, я создаю ",
    p4Projects: "проекты",
    p4Mid: " с помощью ",
    p4Frameworks: " современных фреймворков",
    p4Comme: " таких как ",
    p4FrameworkNames: "React и Angular.",
    findTitle: "ГДЕ МЕНЯ НАЙТИ",
    contactLead: "Не стесняйтесь ",
    contactEmph: "связаться со мной",
    illustrationAlt: "Иллюстрация разработчика",
  },
  about: {
    whoTitle: { prefix: "Кто ", emph: "Я", suffix: "" },
    intro1Lead: "Здравствуйте, я ",
    intro1Name: "Audouard Florian",
    intro1Mid: " из ",
    intro1Place: "La Londe les Maures во Франции.",
    intro2Lead: "Я только что получил ",
    intro2Emph: "степень бакалавра по информатике",
    intro2Suffix: " и сейчас ищу работу.",
    hobbiesIntro:
      "Помимо моей страсти к программированию, вот несколько занятий, которые мне нравятся:",
    hobbyGames: "Играть в видеоигры",
    hobbyManga: "Смотреть и читать мангу",
    hobbyTravel: "Путешествовать",
    skillsTitle: {
      prefix: "Профессиональные ",
      emph: "навыки",
      suffix: "",
    },
    toolsTitle: {
      prefix: "",
      emph: "Инструменты",
      suffix: ", которые я использую",
    },
    illustrationAlt: "Иллюстрация разработчика",
  },
  projectsPage: {
    title: { prefix: "Мои недавние ", emph: "Проекты", suffix: "" },
  },
  projects: [
    {
      url: "https://vimeo.com/1123354839?share=copy",
      title: "Логические карты",
      githubLink: "https://github.com/DienF/Les-cartes-logiques",
      demoLink: "https://les-cartes-logiques.vercel.app",
      text: "Учебный проект, целью которого было создание сайта для изучения логики высказываний в форме интерактивной карточной игры. Приложение позволяет манипулировать логическими формулами и в игровой форме понимать их взаимосвязи. Проект дал мне возможность изучить React и развить навыки проектирования интерактивных интерфейсов. Эта работа позволила мне совместить теоретическое обучение с практической технической работой в учебной среде.",
    },
    {
      url: "https://vimeo.com/1123354858?share=copy",
      title: "3D-симуляция Солнечной системы",
      githubLink: "https://github.com/Florian-Audouard/solarsystem",
      text: "3D-симуляция Солнечной системы, разработанная на Java с использованием jMonkeyEngine. Проект позволяет визуализировать планеты, вращающиеся вокруг Солнца, с регулируемыми расстояниями и размерами. Интерактивная камера даёт возможность свободно исследовать сцену в 3D. Текстуры, наложенные на планеты, усиливают эффект погружения и реалистичности.",
    },
    {
      url: "https://vimeo.com/1123354824?share=copy",
      title: "AKELLER",
      githubLink: "https://github.com/Florian-Audouard/Akeller",
      text: "Приложение для управления расписаниями, созданное в сотрудничестве с Sopra Steria по методологии Agile/Scrum. Проект позволяет создавать, редактировать и организовывать расписания, а также управлять пользователями и их ролями. Разработано с использованием JavaFX для интерфейса, Quarkus для бэкенда и PostgreSQL для базы данных. Развёртывание осуществляется через Docker.",
    },
  ],
  resume: {
    download: "Скачать",
  },
  footer: {
    designed: "Разработано и оформлено Audouard Florian",
    illustrations: "Web illustrations by Storyset",
  },
  notFound: {
    alt: "Страница не найдена",
  },
  projectsItem: {
    github: "Github",
    demo: "Демо",
    video: "Видео",
  },
};
