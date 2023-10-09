import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { LuGamepad2 } from "react-icons/lu";
import { GiOpenBook } from "react-icons/gi";
import {
	FaPlane,
	FaReact,
	FaJava,
	FaPython,
	FaAngular,
	FaWindows,
	FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsGit } from "react-icons/bs";
import {
	BiLogoPostgresql,
	BiLogoVisualStudio,
	BiLogoPhp,
} from "react-icons/bi";
import { SiVercel } from "react-icons/si";

const About = () => {
	return (
		<div>
			<Navigation />
			<div className="about">
				<div className="aboutContainer1">
					<span className="aboutCollumn1 textWithImg">
						<h1>
							Qui Suis-<span className="importantText">JE</span>
						</h1>
						<div className="space" />
						<div>
							Bonjour, je suis{" "}
							<span className="importantText">
								Audouard Florian
							</span>{" "}
							de{" "}
							<span className="importantText">
								La Londe les Maures en France.
							</span>
						</div>
						<div>
							Je viens de finir ma{" "}
							<span className="importantText">
								Licence Informatique
							</span>{" "}
							et je suis à la recherche d'un emploi.
						</div>
						<div className="space" />
						<div>
							En plus de ma passion pour la programmation, voici
							quelques activités que j'aime faire :
							<ul className="HobbieList">
								<li>
									<LuGamepad2 />
									Jouer aux Jeux Video
								</li>
								<li>
									<GiOpenBook />
									Regarder et Lire des mangas
								</li>
								<li>
									<FaPlane />
									Voyager
								</li>
							</ul>
						</div>
					</span>
					<span className="aboutCollumn2">
						<img
							src="image/Developer-activity.svg"
							alt="Illustartion Developpeur"
							onDragStart={(event) => event.preventDefault()}
						></img>
					</span>
				</div>
				<h1 className="titleSkill">
					<span className="importantText">Compétences</span>{" "}
					Professionnelles
				</h1>
				<div className="aboutContainer2">
					<FaPython />
					<FaJava />
					<IoLogoJavascript />
					<BiLogoPhp />
					<BiLogoPostgresql />
					<FaReact />
					<FaAngular />
					<BsGit />
				</div>
				<h1 className="titleTool">
					<span className="importantText">Outils</span> que j'utilise
				</h1>
				<div className="aboutContainer2">
					<BiLogoVisualStudio />
					<FaWindows />
					<SiVercel />
					<FaGithub />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
