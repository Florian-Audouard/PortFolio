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

		console.log(window.scrollY);
	}
	window.addEventListener("scroll", isSticky);

	return (
		<nav className={`navigation ${navSticky}`}>
			<span id="logoNavBar">
				<span id="textLogoNavBar">AF</span>
			</span>
			<ul className="navBar">
				<li className="noUnderline">
					<NavLink exact="true" to="/Bruh">
						<span id="navBarGithub">
							<RiGitMergeLine /> <BsFillStarFill />
						</span>
					</NavLink>
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
