import React, { useEffect, useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = ({ enoughSpace }) => {
	const [isEnoughSpace, setIsEnoughSpace] = useState();

	useEffect((_) => {
		if (enoughSpace === undefined) {
			setIsEnoughSpace(true);
		} else {
			setIsEnoughSpace(enoughSpace);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<footer className={isEnoughSpace ? "" : "notEnoughSpace"}>
			<span className="footerText footerCollumn firstCollumn">
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
			<div className="footerCollumn lastCollumn">
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
			</div>
		</footer>
	);
};

export default Footer;
