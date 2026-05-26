import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectsItem from "../components/ProjectsItem";
import { useTranslation } from "../i18n/LanguageContext";

const Projects = () => {
  const t = useTranslation();
  const { title } = t.projectsPage;
  return (
    <div>
      <Navigation />
      <div>
        <h1 className="text-center py-[15%] max-w-[80%] ml-[10%] nav:py-[5%] nav:max-w-none nav:ml-0">
          {title.prefix}
          <span className="important">{title.emph}</span>
          {title.suffix}
        </h1>
        <div className="nav:flex nav:w-[70%] nav:ml-[15%]">
          {t.projects.map((project) => (
            <ProjectsItem
              key={project.githubLink ?? project.url}
              url={project.url}
              title={project.title}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              text={project.text}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
