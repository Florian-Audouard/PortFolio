import type { Translation } from "../types";

export const en: Translation = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    resume: "Resume",
  },
  home: {
    greeting: "Hi !",
    iam: "I'm ",
    name: "AUDOUARD FLORIAN",
    typewriter: [
      "Web Developer",
      "Backend Developer",
      "Software Developer",
      "Database Developer",
    ],
    presentTitle: {
      prefix: "LET ME ",
      emph: "INTRODUCE",
      suffix: " MYSELF",
    },
    p1: "I'm especially fond of programming, because I see it as a puzzle to solve. 😁",
    p2Lead: "I'm proficient in well-known programming languages such as: ",
    p2Emph: "Java, JavaScript and PostgreSQL.",
    p3: "Computer science is my passion, which is why I love discovering new technologies.",
    p4Lead: "Whenever I get the chance, I build ",
    p4Projects: "projects",
    p4Mid: " with ",
    p4Frameworks: " modern frameworks",
    p4Comme: " like ",
    p4FrameworkNames: "React and Angular.",
    findTitle: "WHERE TO FIND ME",
    contactLead: "Feel free to ",
    contactEmph: "contact me",
    illustrationAlt: "Developer illustration",
  },
  about: {
    whoTitle: { prefix: "Who Am ", emph: "I", suffix: "" },
    intro1Lead: "Hello, I'm ",
    intro1Name: "Audouard Florian",
    intro1Mid: " from ",
    intro1Place: "La Londe les Maures in France.",
    intro2Lead: "I have just finished my ",
    intro2Emph: "Bachelor's degree in Computer Science",
    intro2Suffix: " and I am looking for a job.",
    hobbiesIntro:
      "Besides my passion for programming, here are some activities I enjoy:",
    hobbyGames: "Playing video games",
    hobbyManga: "Watching and reading manga",
    hobbyTravel: "Traveling",
    skillsTitle: {
      prefix: "Professional ",
      emph: "Skills",
      suffix: "",
    },
    toolsTitle: { prefix: "", emph: "Tools", suffix: " I use" },
    illustrationAlt: "Developer illustration",
  },
  projectsPage: {
    title: { prefix: "My recent ", emph: "Projects", suffix: "" },
  },
  projects: [
    {
      url: "https://vimeo.com/1123354839?share=copy",
      title: "Logic Cards",
      githubLink: "https://github.com/DienF/Les-cartes-logiques",
      demoLink: "https://les-cartes-logiques.vercel.app",
      text: "A school project aiming to build a website for learning propositional logic in the form of an interactive card game. The application lets you manipulate logical formulas and understand their relationships in a playful way. The project gave me the opportunity to learn React and to develop my skills in designing interactive interfaces. This work allowed me to combine theoretical learning with hands-on technical practice in an educational setting.",
    },
    {
      url: "https://vimeo.com/1123354858?share=copy",
      title: "3D Solar System Simulation",
      githubLink: "https://github.com/Florian-Audouard/solarsystem",
      text: "A 3D simulation of the solar system developed in Java with jMonkeyEngine. The project lets you visualize the planets orbiting the sun with adjustable distances and sizes. An interactive camera makes it possible to freely explore the scene in 3D. The textures applied to the planets reinforce the immersive and realistic feel.",
    },
    {
      url: "https://vimeo.com/1123354824?share=copy",
      title: "AKELLER",
      githubLink: "https://github.com/Florian-Audouard/Akeller",
      text: "A timetable management application built in collaboration with Sopra Steria following an Agile/Scrum methodology. The project lets you create, edit and organize timetables while managing users and their roles. Developed with JavaFX for the interface, Quarkus for the back-end and PostgreSQL for the database. Deployment is handled via Docker.",
    },
  ],
  resume: {
    download: "Download",
  },
  footer: {
    designed: "Designed and developed by Audouard Florian",
    illustrations: "Web illustrations by Storyset",
  },
  notFound: {
    alt: "Page not found",
  },
  projectsItem: {
    github: "Github",
    demo: "Demo",
    video: "Video",
  },
};
