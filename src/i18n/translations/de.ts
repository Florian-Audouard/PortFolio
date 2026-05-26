import type { Translation } from "../types";

export const de: Translation = {
  nav: {
    home: "Startseite",
    about: "Über mich",
    projects: "Projekte",
    resume: "Lebenslauf",
  },
  home: {
    greeting: "Hallo !",
    iam: "Ich bin ",
    name: "AUDOUARD FLORIAN",
    typewriter: [
      "Webentwickler",
      "Backend-Entwickler",
      "Softwareentwickler",
      "Datenbankentwickler",
    ],
    presentTitle: {
      prefix: "DARF ICH MICH ",
      emph: "VORSTELLEN",
      suffix: "",
    },
    p1: "Programmieren mag ich ganz besonders, weil ich es als ein zu lösendes Rätsel sehe. 😁",
    p2Lead: "Ich beherrsche bekannte Programmiersprachen wie: ",
    p2Emph: "Java, JavaScript und PostgreSQL.",
    p3: "Informatik ist meine Leidenschaft, deshalb entdecke ich gerne neue Technologien.",
    p4Lead: "Sobald sich die Gelegenheit ergibt, erstelle ich ",
    p4Projects: "Projekte",
    p4Mid: " mit ",
    p4Frameworks: " modernen Frameworks",
    p4Comme: " wie ",
    p4FrameworkNames: "React und Angular.",
    findTitle: "WO SIE MICH FINDEN",
    contactLead: "Zögern Sie nicht, mich zu ",
    contactEmph: "kontaktieren",
    illustrationAlt: "Entwickler-Illustration",
  },
  about: {
    whoTitle: { prefix: "Wer bin ", emph: "ICH", suffix: "" },
    intro1Lead: "Hallo, ich bin ",
    intro1Name: "Audouard Florian",
    intro1Mid: " aus ",
    intro1Place: "La Londe les Maures in Frankreich.",
    intro2Lead: "Ich habe gerade meinen ",
    intro2Emph: "Bachelor in Informatik",
    intro2Suffix: " abgeschlossen und bin auf Jobsuche.",
    hobbiesIntro:
      "Neben meiner Leidenschaft für das Programmieren sind hier einige Aktivitäten, die ich gerne mache:",
    hobbyGames: "Videospiele spielen",
    hobbyManga: "Mangas schauen und lesen",
    hobbyTravel: "Reisen",
    skillsTitle: {
      prefix: "Berufliche ",
      emph: "Fähigkeiten",
      suffix: "",
    },
    toolsTitle: { prefix: "", emph: "Werkzeuge", suffix: ", die ich verwende" },
    illustrationAlt: "Entwickler-Illustration",
  },
  projectsPage: {
    title: { prefix: "Meine aktuellen ", emph: "Projekte", suffix: "" },
  },
  projects: [
    {
      url: "https://vimeo.com/1123354839?share=copy",
      title: "Logische Karten",
      githubLink: "https://github.com/DienF/Les-cartes-logiques",
      demoLink: "https://les-cartes-logiques.vercel.app",
      text: "Ein Schulprojekt mit dem Ziel, eine Website zum Erlernen der Aussagenlogik in Form eines interaktiven Kartenspiels zu erstellen. Die Anwendung ermöglicht es, logische Formeln zu manipulieren und ihre Zusammenhänge auf spielerische Weise zu verstehen. Das Projekt gab mir die Gelegenheit, React zu lernen und meine Fähigkeiten im Entwerfen interaktiver Benutzeroberflächen auszubauen. Diese Arbeit erlaubte es mir, theoretisches Lernen mit praktischer technischer Anwendung in einem pädagogischen Rahmen zu verbinden.",
    },
    {
      url: "https://vimeo.com/1123354858?share=copy",
      title: "3D-Simulation des Sonnensystems",
      githubLink: "https://github.com/Florian-Audouard/solarsystem",
      text: "Eine 3D-Simulation des Sonnensystems, entwickelt in Java mit jMonkeyEngine. Das Projekt ermöglicht es, die Planeten auf ihrer Umlaufbahn um die Sonne mit einstellbaren Abständen und Größen zu visualisieren. Eine interaktive Kamera macht es möglich, die Szene frei in 3D zu erkunden. Die auf die Planeten angewendeten Texturen verstärken den immersiven und realistischen Eindruck.",
    },
    {
      url: "https://vimeo.com/1123354824?share=copy",
      title: "AKELLER",
      githubLink: "https://github.com/Florian-Audouard/Akeller",
      text: "Eine Anwendung zur Stundenplanverwaltung, entwickelt in Zusammenarbeit mit Sopra Steria nach einer Agile/Scrum-Methodik. Das Projekt ermöglicht es, Stundenpläne zu erstellen, zu bearbeiten und zu organisieren sowie Benutzer und ihre Rollen zu verwalten. Entwickelt mit JavaFX für die Oberfläche, Quarkus für das Back-End und PostgreSQL für die Datenbank. Die Bereitstellung erfolgt über Docker.",
    },
  ],
  resume: {
    download: "Herunterladen",
  },
  footer: {
    designed: "Entworfen und entwickelt von Audouard Florian",
    illustrations: "Web illustrations by Storyset",
  },
  notFound: {
    alt: "Seite nicht gefunden",
  },
  projectsItem: {
    github: "Github",
    demo: "Demo",
    video: "Video",
  },
};
