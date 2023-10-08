import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<footer>
			<span className="footerText footerCollumn">
				Conçu et développé par Audouard Florian
			</span>

			<a
				className="footerText footerCollumn"
				href="https://storyset.com/web"
				target="_blank"
				rel="noreFerrer"
				onDragStart={(event) => event.preventDefault()}
			>
				Web illustrations by Storyset
			</a>
			<span className="footerCollumn">
				<a
					href="https://github.com/Florian-Audouard"
					target="_blank"
					rel="noreFerrer"
					onDragStart={(event) => event.preventDefault()}
				>
					<FaGithubSquare size={20} />
				</a>
				<a
					href="https://www.linkedin.com/in/florian-audouard-8b5b451a3/"
					target="_blank"
					rel="noreFerrer"
					onDragStart={(event) => event.preventDefault()}
				>
					<BsLinkedin size={20} />
				</a>
			</span>
		</footer>
	);
};

export default Footer;
