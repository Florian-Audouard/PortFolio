import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<footer>
			<span className="footerText footerCollumn">
				Designer et développer par Audouard Florian
			</span>

			<a
				className="footerText footerCollumn"
				href="https://storyset.com/web"
				target="_blank"
				rel="noreFerrer"
			>
				Web illustrations by Storyset
			</a>
			<span className="footerCollumn">
				<a
					href="https://github.com/Florian-Audouard"
					target="_blank"
					rel="noreFerrer"
				>
					<AiOutlineGithub size={40} />
				</a>
				<a
					href="https://www.linkedin.com/in/florian-audouard-8b5b451a3/"
					target="_blank"
					rel="noreFerrer"
				>
					<BsLinkedin size={40} />
				</a>
			</span>
		</footer>
	);
};

export default Footer;
