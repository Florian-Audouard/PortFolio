// All user-facing text for the site, grouped by language.
// The set of languages is defined in `config.ts`; `translations` must provide
// a block for every code in it (enforced by the `Record<Language, ...>` type).

import type { Language } from "./config";

export type { Language };

export interface Project {
  url: string;
  title: string;
  githubLink?: string;
  demoLink?: string;
  text: string;
}

// `prefix` + emphasised `emph` + `suffix`, so the highlighted word can sit
// anywhere in the sentence regardless of language word order.
export interface EmphText {
  prefix: string;
  emph: string;
  suffix: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    resume: string;
  };
  home: {
    greeting: string;
    iam: string;
    name: string;
    typewriter: string[];
    presentTitle: EmphText;
    p1: string;
    p2Lead: string;
    p2Emph: string;
    p3: string;
    p4Lead: string;
    p4Projects: string;
    p4Mid: string;
    p4Frameworks: string;
    p4Comme: string;
    p4FrameworkNames: string;
    findTitle: string;
    contactLead: string;
    contactEmph: string;
    illustrationAlt: string;
  };
  about: {
    whoTitle: EmphText;
    intro1Lead: string;
    intro1Name: string;
    intro1Mid: string;
    intro1Place: string;
    intro2Lead: string;
    intro2Emph: string;
    intro2Suffix: string;
    hobbiesIntro: string;
    hobbyGames: string;
    hobbyManga: string;
    hobbyTravel: string;
    skillsTitle: EmphText;
    toolsTitle: EmphText;
    illustrationAlt: string;
  };
  projectsPage: {
    title: EmphText;
  };
  projects: Project[];
  resume: {
    download: string;
  };
  footer: {
    designed: string;
    illustrations: string;
  };
  notFound: {
    alt: string;
  };
  projectsItem: {
    github: string;
    demo: string;
    video: string;
  };
}

export const translations: Record<Language, Translation> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      resume: "CV",
    },
    home: {
      greeting: "Salut !",
      iam: "Je suis ",
      name: "AUDOUARD FLORIAN",
      typewriter: [
        "Développeur Web",
        "Développeur Backend",
        "Développeur Logiciels",
        "Développeur Base De Données",
      ],
      presentTitle: {
        prefix: "PERMETTEZ-MOI DE ME ",
        emph: "PRÉSENTER",
        suffix: "",
      },
      p1: "J'affectionne tout particulièrement la programmation, car je vois ça comme une énigme à résoudre. 😁",
      p2Lead: "Je maîtrise des langages de programmation connus comme : ",
      p2Emph: "Java, JavaScript et PostgreSQL.",
      p3: "L'informatique est ma passion, c'est pourquoi j'aime découvrir de nouvelle technologies.",
      p4Lead: "Dès que l'occasion se présente, je crée des ",
      p4Projects: "projets",
      p4Mid: " avec des ",
      p4Frameworks: " FrameWorks modernes",
      p4Comme: " comme ",
      p4FrameworkNames: "React et Angular.",
      findTitle: "OÙ ME TROUVER",
      contactLead: "N'hésitez pas à me ",
      contactEmph: "contacter",
      illustrationAlt: "Illustration Développeur",
    },
    about: {
      whoTitle: { prefix: "Qui Suis-", emph: "JE", suffix: "" },
      intro1Lead: "Bonjour, je suis ",
      intro1Name: "Audouard Florian",
      intro1Mid: " de ",
      intro1Place: "La Londe les Maures en France.",
      intro2Lead: "Je viens de finir ma ",
      intro2Emph: "Licence Informatique",
      intro2Suffix: " et je suis à la recherche d'un emploi.",
      hobbiesIntro:
        "En plus de ma passion pour la programmation, voici quelques activités que j'aime faire :",
      hobbyGames: "Jouer aux Jeux Video",
      hobbyManga: "Regarder et Lire des mangas",
      hobbyTravel: "Voyager",
      skillsTitle: {
        prefix: "",
        emph: "Compétences",
        suffix: " Professionnelles",
      },
      toolsTitle: { prefix: "", emph: "Outils", suffix: " que j'utilise" },
      illustrationAlt: "Illustration Développeur",
    },
    projectsPage: {
      title: { prefix: "Mes récents ", emph: "Projets", suffix: "" },
    },
    projects: [
      {
        url: "https://vimeo.com/1123354839?share=copy",
        title: "Les Cartes Logiques",
        githubLink: "https://github.com/DienF/Les-cartes-logiques",
        demoLink: "https://les-cartes-logiques.vercel.app",
        text: "Projet scolaire visant à créer un site d'apprentissage de la logique propositionnelle sous forme de jeu de cartes interactif. L'application permet de manipuler des formules logiques et de comprendre leurs relations de manière ludique. Le projet m'a donné l'occasion d'apprendre React et de développer mes compétences en conception d'interfaces interactives. Ce travail m'a permis de combiner apprentissage théorique et mise en pratique technique dans un cadre pédagogique.",
      },
      {
        url: "https://vimeo.com/1123354858?share=copy",
        title: "Simulation 3D du système solaire",
        githubLink: "https://github.com/Florian-Audouard/solarsystem",
        text: "Simulation 3D du système solaire développée en Java avec jMonkeyEngine. Le projet permet de visualiser les planètes en orbite autour du soleil avec des distances et tailles ajustables. Une caméra interactive offre la possibilité d'explorer librement la scène en 3D. Les textures appliquées aux planètes renforcent l'aspect immersif et réaliste.",
      },
      {
        url: "https://vimeo.com/1123354824?share=copy",
        title: "AKELLER",
        githubLink: "https://github.com/Florian-Audouard/Akeller",
        text: "Application de gestion d'emplois du temps réalisée en collaboration avec Sopra Steria selon une méthodologie Agile/Scrum. Le projet permet de créer, modifier et organiser des emplois du temps tout en gérant les utilisateurs et leurs rôles. Développé avec JavaFX pour l'interface, Quarkus pour le back-end et PostgreSQL pour la base de données. Le déploiement est assuré via Docker.",
      },
    ],
    resume: {
      download: "Téléchargement",
    },
    footer: {
      designed: "Conçu et développé par Audouard Florian",
      illustrations: "Web illustrations by Storyset",
    },
    notFound: {
      alt: "Page introuvable",
    },
    projectsItem: {
      github: "Github",
      demo: "Démo",
      video: "Vidéo",
    },
  },
  en: {
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
  },
};
