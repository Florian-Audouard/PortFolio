import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectsItem from "../components/ProjectsItem";

const Projects = () => {
	return (
		<div>
			<Navigation />
			<div className="projects">
				<h1 className="projectsTitle">
					Mes récents <span className="importantText">Projets</span>
				</h1>
				<div className="projectsContainer">
					<ProjectsItem
						url="image/Laptop-Cartes.png"
						title="Les Cartes Logiques"
						githubLink="https://github.com/DienF/Les-cartes-logiques"
						demoLink="https://les-cartes-logiques.vercel.app"
						text="Un site qui permet d'apprendre la logique mathématique sous forme de jeu de cartes.
						 Ce site m'a donné l'occasion d'apprendre React."
					/>
					<ProjectsItem
						url="https://youtu.be/BveGNiVrgoI"
						title="Les Cartes Logiques"
						githubLink="https://github.com/DienF/Les-cartes-logiques"
						text="Un site qui permet d'apprendre la logique mathématique sous forme de jeu de cartes.
						 Ce site m'a donné l'occasion d'apprendre React."
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Projects;
