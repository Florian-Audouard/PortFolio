import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../Assets/Florian_AUDOUARD.pdf";
import { BsDownload } from "react-icons/bs";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);
	return (
		<div>
			<Navigation />
			<div className="resume">
				<div>
					<a
						href={pdf}
						target="_blank"
						rel="noreferrer"
						className="button downloadButton"
					>
						<BsDownload />
						Téléchargement
					</a>
				</div>
				<div className="resumePdf">
					<Document file={pdf}>
						<Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
					</Document>
				</div>
				<div>
					<a
						href={pdf}
						target="_blank"
						rel="noreferrer"
						className="button downloadButton"
					>
						<BsDownload />
						Téléchargement
					</a>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Resume;
