import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHome } from "react-icons/rx";
import { BsPerson, BsFillStarFill } from "react-icons/bs";
import { BiFile } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { RiGitMergeLine } from "react-icons/ri";

const Navigation = () => {
	const [navSticky, setNavSticky] = useState("");

	function isSticky() {
		if (window.scrollY >= 20) setNavSticky("sticky");
		else setNavSticky("");
	}
	window.addEventListener("scroll", isSticky);

	return (
		<nav className={`navigation ${navSticky}`}>
			<span id="logoNavBar">
				<NavLink exact="true" to="/">
					<span id="textLogoNavBar">AF</span>
				</NavLink>
			</span>
			<ul className="navBar">
				<li className="noUnderline">
					<a
						id="navBarGithub"
						href="https://github.com/Florian-Audouard/PortFolio"
						target="_blank"
						rel="noreFerrer"
					>
						<RiGitMergeLine /> <BsFillStarFill />
					</a>
				</li>
				<li>
					<NavLink exact="true" to="/About">
						<BsPerson />À propos
					</NavLink>
				</li>
				<li>
					<NavLink exact="true" to="/Projects">
						<FiMonitor />
						Projets
					</NavLink>
				</li>
				<li>
					<NavLink exact="true" to="/Resume">
						<BiFile />
						CV
					</NavLink>
				</li>
				<li>
					<NavLink exact="true" to="/">
						<RxHome />
						Accueil
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
