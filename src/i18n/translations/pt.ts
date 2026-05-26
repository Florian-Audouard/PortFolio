import type { Translation } from "../types";

export const pt: Translation = {
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    resume: "Currículo",
  },
  home: {
    greeting: "Olá !",
    iam: "Eu sou ",
    name: "AUDOUARD FLORIAN",
    typewriter: [
      "Desenvolvedor Web",
      "Desenvolvedor Backend",
      "Desenvolvedor de Software",
      "Desenvolvedor de Bases de Dados",
    ],
    presentTitle: {
      prefix: "DEIXE-ME ME ",
      emph: "APRESENTAR",
      suffix: "",
    },
    p1: "Gosto especialmente de programar, porque vejo isso como um enigma a resolver. 😁",
    p2Lead: "Domino linguagens de programação conhecidas como: ",
    p2Emph: "Java, JavaScript e PostgreSQL.",
    p3: "A informática é a minha paixão, por isso adoro descobrir novas tecnologias.",
    p4Lead: "Sempre que tenho oportunidade, crio ",
    p4Projects: "projetos",
    p4Mid: " com ",
    p4Frameworks: " frameworks modernos",
    p4Comme: " como ",
    p4FrameworkNames: "React e Angular.",
    findTitle: "ONDE ME ENCONTRAR",
    contactLead: "Não hesite em me ",
    contactEmph: "contactar",
    illustrationAlt: "Ilustração de desenvolvedor",
  },
  about: {
    whoTitle: { prefix: "Quem sou ", emph: "EU", suffix: "" },
    intro1Lead: "Olá, eu sou ",
    intro1Name: "Audouard Florian",
    intro1Mid: " de ",
    intro1Place: "La Londe les Maures, na França.",
    intro2Lead: "Acabei de terminar a minha ",
    intro2Emph: "Licenciatura em Informática",
    intro2Suffix: " e estou à procura de emprego.",
    hobbiesIntro:
      "Além da minha paixão pela programação, aqui estão algumas atividades de que gosto:",
    hobbyGames: "Jogar videojogos",
    hobbyManga: "Ver e ler mangás",
    hobbyTravel: "Viajar",
    skillsTitle: {
      prefix: "",
      emph: "Competências",
      suffix: " Profissionais",
    },
    toolsTitle: { prefix: "", emph: "Ferramentas", suffix: " que utilizo" },
    illustrationAlt: "Ilustração de desenvolvedor",
  },
  projectsPage: {
    title: { prefix: "Os meus ", emph: "Projetos", suffix: " recentes" },
  },
  projects: [
    {
      url: "https://vimeo.com/1123354839?share=copy",
      title: "Cartas Lógicas",
      githubLink: "https://github.com/DienF/Les-cartes-logiques",
      demoLink: "https://les-cartes-logiques.vercel.app",
      text: "Um projeto escolar com o objetivo de criar um site para aprender lógica proposicional sob a forma de um jogo de cartas interativo. A aplicação permite manipular fórmulas lógicas e compreender as suas relações de forma lúdica. O projeto deu-me a oportunidade de aprender React e de desenvolver as minhas competências na conceção de interfaces interativas. Este trabalho permitiu-me combinar a aprendizagem teórica com a prática técnica num contexto pedagógico.",
    },
    {
      url: "https://vimeo.com/1123354858?share=copy",
      title: "Simulação 3D do Sistema Solar",
      githubLink: "https://github.com/Florian-Audouard/solarsystem",
      text: "Uma simulação 3D do sistema solar desenvolvida em Java com jMonkeyEngine. O projeto permite visualizar os planetas em órbita à volta do sol com distâncias e tamanhos ajustáveis. Uma câmara interativa torna possível explorar livremente a cena em 3D. As texturas aplicadas aos planetas reforçam a sensação imersiva e realista.",
    },
    {
      url: "https://vimeo.com/1123354824?share=copy",
      title: "AKELLER",
      githubLink: "https://github.com/Florian-Audouard/Akeller",
      text: "Uma aplicação de gestão de horários desenvolvida em colaboração com a Sopra Steria seguindo uma metodologia Agile/Scrum. O projeto permite criar, editar e organizar horários, gerindo também os utilizadores e os seus papéis. Desenvolvida com JavaFX para a interface, Quarkus para o back-end e PostgreSQL para a base de dados. A implementação é feita através de Docker.",
    },
  ],
  resume: {
    download: "Descarregar",
  },
  footer: {
    designed: "Concebido e desenvolvido por Audouard Florian",
    illustrations: "Web illustrations by Storyset",
  },
  notFound: {
    alt: "Página não encontrada",
  },
  projectsItem: {
    github: "Github",
    demo: "Demo",
    video: "Vídeo",
  },
};
