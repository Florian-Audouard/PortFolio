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
						url="https://vimeo.com/manage/videos/1123349044"
						title="Les Cartes Logiques"
						githubLink="https://github.com/DienF/Les-cartes-logiques"
						demoLink="https://les-cartes-logiques.vercel.app"
						text="Projet scolaire visant à créer un site d'apprentissage de la logique propositionnelle sous forme de jeu de cartes interactif.
						L'application permet de manipuler des formules logiques et de comprendre leurs relations de manière ludique.
						Le projet m'a donné l'occasion d'apprendre React et de développer mes compétences en conception d'interfaces interactives.
						Ce travail m'a permis de combiner apprentissage théorique et mise en pratique technique dans un cadre pédagogique."
					/>
					<ProjectsItem
						url="https://vimeo.com/1123339878?share=copy"
						title="Simulation 3D du système solaire"
						githubLink="https://github.com/Florian-Audouard/solarsystem"
						text="Simulation 3D du système solaire développée en Java avec jMonkeyEngine.
						Le projet permet de visualiser les planètes en orbite autour du soleil avec des distances et tailles ajustables.
						Une caméra interactive offre la possibilité d'explorer librement la scène en 3D.
						Les textures appliquées aux planètes renforcent l'aspect immersif et réaliste."
					/>
					<ProjectsItem
						url="https://vimeo.com/manage/videos/1123347551"
						title="AKELLER"
						githubLink="https://github.com/Florian-Audouard/Akeller"
						text="Application de gestion d'emplois du temps réalisée en collaboration avec Sopra Steria selon une méthodologie Agile/Scrum.
						Le projet permet de créer, modifier et organiser des emplois du temps tout en gérant les utilisateurs et leurs rôles.
						Développé avec JavaFX pour l'interface, Quarkus pour le back-end et PostgreSQL pour la base de données.
						Le déploiement est assuré via Docker."
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Projects;
