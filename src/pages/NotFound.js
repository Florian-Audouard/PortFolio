import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NotFound = () => {
	return (
		<div>
			<Navigation />
			<img
				className="notFound"
				src="image/404.svg"
				alt="Illustartion Developpeur"
				onDragStart={(event) => event.preventDefault()}
			></img>

			<Footer enoughSpace={false} />
		</div>
	);
};

export default NotFound;
