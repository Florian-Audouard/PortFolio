import React from "react";
import { AiOutlineGithub, AiOutlinePlayCircle } from "react-icons/ai";

const ProjectsItem = ({ img, title, text, githubLink, demoLink }) => {
	return (
		<div className="projectsItem">
			<h2>{title}</h2>
			<img src={img} alt="laptopLexika"></img>
			<div className="projectsItemText">{text}</div>
			<div className="projectsButtonlinks">
				<a
					href={githubLink}
					className="projectLinks button"
					target="_blank"
					rel="noreferrer"
				>
					<AiOutlineGithub />
					Github
				</a>
				<a
					href={demoLink}
					className="projectLinks button"
					target="_blank"
					rel="noreferrer"
				>
					<AiOutlinePlayCircle />
					Démo
				</a>
			</div>
		</div>
	);
};

export default ProjectsItem;
