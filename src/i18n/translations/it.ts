import type { Translation } from "../types";

export const it: Translation = {
  nav: {
    home: "Home",
    about: "Chi sono",
    projects: "Progetti",
    resume: "Curriculum",
  },
  home: {
    greeting: "Ciao !",
    iam: "Sono ",
    name: "AUDOUARD FLORIAN",
    typewriter: [
      "Sviluppatore Web",
      "Sviluppatore Backend",
      "Sviluppatore Software",
      "Sviluppatore di Database",
    ],
    presentTitle: {
      prefix: "LASCIA CHE MI ",
      emph: "PRESENTI",
      suffix: "",
    },
    p1: "Amo particolarmente la programmazione, perché la vedo come un enigma da risolvere. 😁",
    p2Lead: "Padroneggio linguaggi di programmazione noti come: ",
    p2Emph: "Java, JavaScript e PostgreSQL.",
    p3: "L'informatica è la mia passione, ecco perché adoro scoprire nuove tecnologie.",
    p4Lead: "Ogni volta che ne ho l'occasione, creo ",
    p4Projects: "progetti",
    p4Mid: " con ",
    p4Frameworks: " framework moderni",
    p4Comme: " come ",
    p4FrameworkNames: "React e Angular.",
    findTitle: "DOVE TROVARMI",
    contactLead: "Non esitare a ",
    contactEmph: "contattarmi",
    illustrationAlt: "Illustrazione sviluppatore",
  },
  about: {
    whoTitle: { prefix: "Chi sono ", emph: "IO", suffix: "" },
    intro1Lead: "Ciao, sono ",
    intro1Name: "Audouard Florian",
    intro1Mid: " di ",
    intro1Place: "La Londe les Maures, in Francia.",
    intro2Lead: "Ho appena terminato la mia ",
    intro2Emph: "Laurea triennale in Informatica",
    intro2Suffix: " e sto cercando lavoro.",
    hobbiesIntro:
      "Oltre alla mia passione per la programmazione, ecco alcune attività che mi piacciono:",
    hobbyGames: "Giocare ai videogiochi",
    hobbyManga: "Guardare e leggere manga",
    hobbyTravel: "Viaggiare",
    skillsTitle: {
      prefix: "",
      emph: "Competenze",
      suffix: " Professionali",
    },
    toolsTitle: { prefix: "", emph: "Strumenti", suffix: " che utilizzo" },
    illustrationAlt: "Illustrazione sviluppatore",
  },
  projectsPage: {
    title: { prefix: "I miei ", emph: "Progetti", suffix: " recenti" },
  },
  projects: [
    {
      url: "https://vimeo.com/1123354839?share=copy",
      title: "Carte Logiche",
      githubLink: "https://github.com/DienF/Les-cartes-logiques",
      demoLink: "https://les-cartes-logiques.vercel.app",
      text: "Un progetto scolastico volto a creare un sito web per imparare la logica proposizionale sotto forma di un gioco di carte interattivo. L'applicazione consente di manipolare formule logiche e di comprenderne le relazioni in modo giocoso. Il progetto mi ha dato l'opportunità di imparare React e di sviluppare le mie competenze nella progettazione di interfacce interattive. Questo lavoro mi ha permesso di combinare l'apprendimento teorico con la pratica tecnica in un contesto didattico.",
    },
    {
      url: "https://vimeo.com/1123354858?share=copy",
      title: "Simulazione 3D del Sistema Solare",
      githubLink: "https://github.com/Florian-Audouard/solarsystem",
      text: "Una simulazione 3D del sistema solare sviluppata in Java con jMonkeyEngine. Il progetto consente di visualizzare i pianeti in orbita attorno al sole con distanze e dimensioni regolabili. Una telecamera interattiva permette di esplorare liberamente la scena in 3D. Le texture applicate ai pianeti rafforzano la sensazione immersiva e realistica.",
    },
    {
      url: "https://vimeo.com/1123354824?share=copy",
      title: "AKELLER",
      githubLink: "https://github.com/Florian-Audouard/Akeller",
      text: "Un'applicazione per la gestione degli orari realizzata in collaborazione con Sopra Steria seguendo una metodologia Agile/Scrum. Il progetto consente di creare, modificare e organizzare gli orari gestendo al contempo gli utenti e i loro ruoli. Sviluppata con JavaFX per l'interfaccia, Quarkus per il back-end e PostgreSQL per il database. Il deployment è gestito tramite Docker.",
    },
  ],
  resume: {
    download: "Scarica",
  },
  footer: {
    designed: "Progettato e sviluppato da Audouard Florian",
    illustrations: "Web illustrations by Storyset",
  },
  notFound: {
    alt: "Pagina non trovata",
  },
  projectsItem: {
    github: "Github",
    demo: "Demo",
    video: "Video",
  },
};
