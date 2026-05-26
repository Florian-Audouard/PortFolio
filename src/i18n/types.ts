// Shared types for all translation blocks.
// Each language lives in its own file under `translations/`, and they are
// assembled into the `translations` record in `translations.ts`.

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
