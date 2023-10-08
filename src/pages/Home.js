import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";
import { PiHandWavingBold } from "react-icons/pi";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Navigation />
			<div className="home">
				<div className="homeContainer1">
					<span className="homeCollumn textWithImg">
						<h1 id="salutHome">
							Salut ! <PiHandWavingBold className="waving" />
						</h1>
						<h1>
							Je suis{" "}
							<span className="importantText">
								AUDOUARD FLORIAN
							</span>
						</h1>
						<h1 id="typeWriter" className="importantText">
							<Typewriter
								options={{
									strings: [
										"Développeur Web",
										"Développeur Backend",
										"Développeur Logiciels",
										"Développeur Base De Données",
									],
									autoStart: true,
									loop: true,
									deleteSpeed: 50,
								}}
							/>
						</h1>
					</span>
					<span className="homeCollumn ">
						<img
							src="image/Programming-amico.svg"
							alt="Illustartion Developpeur"
							onDragStart={(event) => event.preventDefault()}
						></img>
					</span>
				</div>
				<div className="home2">
					<h1 className="titleHome2">
						PERMETTEZ-MOI DE ME{" "}
						<span className="importantText">PRÉSENTER</span>
					</h1>
					<div className="homeContainer2">
						<div className="homeCollumn1">
							<div>
								J'affectionne tout particulièrement la
								programmation, car je vois ça comme une énigme à
								résoudre. 😁
							</div>
							<div className="space" />
							<div>
								Je maîtrise des langages de programmation connus
								comme :{" "}
								<span className="importantText">
									Java, JavaScript et PostgreSQL.
								</span>
							</div>
							<div className="space" />
							<div>
								L'informatique est ma passion, c'est pourquoi
								j'aime découvrir de nouvelle technologies.
							</div>
							<div className="space" />
							<div>
								Dès que l'occasion se présente, je crée des{" "}
								<NavLink
									exact="true"
									to="/Projects"
									onDragStart={(event) =>
										event.preventDefault()
									}
								>
									<span className="importantText">
										projets
									</span>
								</NavLink>{" "}
								avec des{" "}
								<span className="importantText">
									{" "}
									FrameWorks modernes
								</span>{" "}
								comme{" "}
								<span className="importantText">
									React et Angular.
								</span>
							</div>
						</div>
						<div className="homeCollumn2">
							<img
								src="image/Programming-pana.svg"
								alt="Illustartion Developpeur"
								onDragStart={(event) => event.preventDefault()}
							></img>
						</div>
					</div>
				</div>
				<div className="home3">
					<h1>OÙ ME TROUVER</h1>
					<div className="space" />
					<div>
						N'hésitez pas à me{" "}
						<span className="importantText">contacter</span>
					</div>
					<div className="socialIconBox">
						<a
							className="socialIcon"
							href="https://github.com/Florian-Audouard"
							target="_blank"
							rel="noreFerrer"
							onDragStart={(event) => event.preventDefault()}
						>
							<AiOutlineGithub />
						</a>
						<a
							className="socialIcon"
							href="https://www.linkedin.com/in/florian-audouard-8b5b451a3/"
							target="_blank"
							rel="noreFerrer"
							onDragStart={(event) => event.preventDefault()}
						>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
