import type { Translation } from "../types";

export const es: Translation = {
  nav: {
    home: "Inicio",
    about: "Acerca de",
    projects: "Proyectos",
    resume: "Currículum",
  },
  home: {
    greeting: "¡Hola !",
    iam: "Soy ",
    name: "AUDOUARD FLORIAN",
    typewriter: [
      "Desarrollador Web",
      "Desarrollador Backend",
      "Desarrollador de Software",
      "Desarrollador de Bases de Datos",
    ],
    presentTitle: {
      prefix: "PERMÍTEME ",
      emph: "PRESENTARME",
      suffix: "",
    },
    p1: "Me gusta especialmente programar, porque lo veo como un enigma por resolver. 😁",
    p2Lead: "Domino lenguajes de programación conocidos como: ",
    p2Emph: "Java, JavaScript y PostgreSQL.",
    p3: "La informática es mi pasión, por eso me encanta descubrir nuevas tecnologías.",
    p4Lead: "Siempre que tengo la oportunidad, creo ",
    p4Projects: "proyectos",
    p4Mid: " con ",
    p4Frameworks: " frameworks modernos",
    p4Comme: " como ",
    p4FrameworkNames: "React y Angular.",
    findTitle: "DÓNDE ENCONTRARME",
    contactLead: "No dudes en ",
    contactEmph: "contactarme",
    illustrationAlt: "Ilustración de desarrollador",
  },
  about: {
    whoTitle: { prefix: "Quién soy ", emph: "YO", suffix: "" },
    intro1Lead: "Hola, soy ",
    intro1Name: "Audouard Florian",
    intro1Mid: " de ",
    intro1Place: "La Londe les Maures, en Francia.",
    intro2Lead: "Acabo de terminar mi ",
    intro2Emph: "Grado en Informática",
    intro2Suffix: " y estoy buscando trabajo.",
    hobbiesIntro:
      "Además de mi pasión por la programación, estas son algunas actividades que disfruto:",
    hobbyGames: "Jugar videojuegos",
    hobbyManga: "Ver y leer manga",
    hobbyTravel: "Viajar",
    skillsTitle: {
      prefix: "",
      emph: "Competencias",
      suffix: " Profesionales",
    },
    toolsTitle: { prefix: "", emph: "Herramientas", suffix: " que utilizo" },
    illustrationAlt: "Ilustración de desarrollador",
  },
  projectsPage: {
    title: { prefix: "Mis ", emph: "Proyectos", suffix: " recientes" },
  },
  projects: [
    {
      url: "https://vimeo.com/1123354839?share=copy",
      title: "Cartas Lógicas",
      githubLink: "https://github.com/DienF/Les-cartes-logiques",
      demoLink: "https://les-cartes-logiques.vercel.app",
      text: "Un proyecto escolar cuyo objetivo es crear un sitio web para aprender lógica proposicional en forma de un juego de cartas interactivo. La aplicación permite manipular fórmulas lógicas y comprender sus relaciones de manera lúdica. El proyecto me dio la oportunidad de aprender React y de desarrollar mis habilidades en el diseño de interfaces interactivas. Este trabajo me permitió combinar el aprendizaje teórico con la práctica técnica en un contexto educativo.",
    },
    {
      url: "https://vimeo.com/1123354858?share=copy",
      title: "Simulación 3D del Sistema Solar",
      githubLink: "https://github.com/Florian-Audouard/solarsystem",
      text: "Una simulación 3D del sistema solar desarrollada en Java con jMonkeyEngine. El proyecto permite visualizar los planetas orbitando alrededor del sol con distancias y tamaños ajustables. Una cámara interactiva hace posible explorar libremente la escena en 3D. Las texturas aplicadas a los planetas refuerzan la sensación inmersiva y realista.",
    },
    {
      url: "https://vimeo.com/1123354824?share=copy",
      title: "AKELLER",
      githubLink: "https://github.com/Florian-Audouard/Akeller",
      text: "Una aplicación de gestión de horarios desarrollada en colaboración con Sopra Steria siguiendo una metodología Agile/Scrum. El proyecto permite crear, editar y organizar horarios, además de gestionar los usuarios y sus roles. Desarrollada con JavaFX para la interfaz, Quarkus para el back-end y PostgreSQL para la base de datos. El despliegue se realiza mediante Docker.",
    },
  ],
  resume: {
    download: "Descargar",
  },
  footer: {
    designed: "Diseñado y desarrollado por Audouard Florian",
    illustrations: "Web illustrations by Storyset",
  },
  notFound: {
    alt: "Página no encontrada",
  },
  projectsItem: {
    github: "Github",
    demo: "Demo",
    video: "Vídeo",
  },
};
