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
					Mes récent <span className="importantText">Projets</span>
				</h1>
				<div className="projectsContainer">
					<ProjectsItem
						img="img/Laptop-Lexika.png"
						title="Lexika"
						githubLink="https://github.com/Lexika-Project/lexika"
						demoLink="https://lexika.vercel.app/home"
						text="Site qui permet de voir la traduction de mots issues de langues kanak
						 (Nouvelle-Calédonie) qui a était récupérer et mis dans une base de données grâce une méthode d'OCR."
					/>
					<ProjectsItem
						img="img/Laptop-Cartes.png"
						title="Les Cartes Logiques"
						githubLink="https://github.com/DienF/Les-cartes-logiques"
						demoLink="https://les-cartes-logiques.vercel.app"
						text="Site qui permet d'apprendre la logique mathématique sous forme de jeu de cartes. Ce site m'a permis d'apprendre React."
					/>
					<ProjectsItem
						img="img/Laptop-Barker.png"
						title="Barker"
						githubLink="https://github.com/GuillaumePerron/barker"
						demoLink="https://barker-projet-info.vercel.app"
						text="Un site web qui s'inspire de Twitter pour afficher des messages. Ce site m'a permis de perfectionner mes compétences en backend et en base de données."
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Projects;
