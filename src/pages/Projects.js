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
						img="image/Laptop-Lexika.png"
						title="Lexika"
						githubLink="https://github.com/Lexika-Project/lexika"
						demoLink="https://lexika.vercel.app/home"
						text="Un site qui permet de voir la traduction de mots issue de langues kanak (Nouvelle-Calédonie) qui a été récupérée et mis dans une base de données grâce à une méthode d'OCR."
					/>
					<ProjectsItem
						img="image/Laptop-Cartes.png"
						title="Les Cartes Logiques"
						githubLink="https://github.com/DienF/Les-cartes-logiques"
						demoLink="https://les-cartes-logiques.vercel.app"
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
