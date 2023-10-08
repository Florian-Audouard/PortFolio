import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Routes>
			<Route path="/About" exact element={<About />} />
			<Route path="/Resume" exact element={<Resume />} />
			<Route path="/Projects" exact element={<Projects />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
}

export default App;
