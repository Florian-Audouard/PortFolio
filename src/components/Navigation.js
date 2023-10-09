import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxHome } from "react-icons/rx";
import { BsPerson, BsFillStarFill } from "react-icons/bs";
import { BiFile } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { RiGitMergeLine } from "react-icons/ri";
import { PiListBold, PiXBold } from "react-icons/pi";

const Navigation = () => {
	const [navSticky, setNavSticky] = useState("");
	const [isMobile, setIsMobile] = useState();
	const [extend, setExtend] = useState();

	function changeExtend() {
		setExtend(!extend);
	}
	function isSticky() {
		if (window.scrollY >= 20) setNavSticky("sticky");
		else setNavSticky("");
	}

	function addaptNavBar() {
		if (window.innerWidth < 780) {
			if (isMobile === undefined || !isMobile) {
				setExtend(false);
			}
			setIsMobile(true);
			setNavSticky("sticky");
			window.onscroll = undefined;
		} else {
			setIsMobile(false);
			window.onscroll = isSticky;
			setExtend(true);
		}
	}
	window.addEventListener("resize", addaptNavBar);
	useEffect(() => {
		addaptNavBar();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<nav className={`navigation ${navSticky}`}>
			<div className="logoBar">
				<div id="logoNavBar">
					<NavLink
						exact="true"
						to="/"
						onDragStart={(event) => event.preventDefault()}
					>
						<span id="textLogoNavBar">AF</span>
					</NavLink>
				</div>
				<div
					hidden={!isMobile}
					onClick={changeExtend}
					className="clickHandler"
				>
					{extend ? (
						<PiXBold className="crossSvg" />
					) : (
						<PiListBold className="listSvg" />
					)}
				</div>
			</div>
			{!(isMobile && !extend) && (
				<ul className="navBar">
					<li className="noUnderline">
						<a
							id="navBarGithub"
							className="button"
							href="https://github.com/Florian-Audouard/PortFolio"
							target="_blank"
							rel="noreFerrer"
							onDragStart={(event) => event.preventDefault()}
						>
							<RiGitMergeLine /> <BsFillStarFill />
						</a>
					</li>

					<li>
						<NavLink
							exact="true"
							to="/Resume"
							onDragStart={(event) => event.preventDefault()}
						>
							<BiFile />
							CV
						</NavLink>
					</li>
					<li>
						<NavLink
							exact="true"
							to="/Projects"
							onDragStart={(event) => event.preventDefault()}
						>
							<FiMonitor />
							Projets
						</NavLink>
					</li>
					<li>
						<NavLink
							exact="true"
							to="/About"
							onDragStart={(event) => event.preventDefault()}
						>
							<BsPerson />À propos
						</NavLink>
					</li>
					<li>
						<NavLink
							exact="true"
							to="/"
							onDragStart={(event) => event.preventDefault()}
						>
							<RxHome />
							Accueil
						</NavLink>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navigation;
