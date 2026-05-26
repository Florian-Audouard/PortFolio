import type { Translation } from "../types";

export const fr: Translation = {
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
};
