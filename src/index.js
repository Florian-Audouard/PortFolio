import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import ScrollToTop from "./helpers/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Analytics />
		<ScrollToTop />
		<App />
	</Router>
);
