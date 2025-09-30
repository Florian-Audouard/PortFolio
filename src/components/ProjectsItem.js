import React from "react";
import { AiOutlineGithub, AiOutlinePlayCircle } from "react-icons/ai";

const ProjectsItem = ({ url, title, text, githubLink, demoLink }) => {
	// Extract YouTube video ID from URL
	const getYouTubeVideoId = (url) => {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11 ? match[2] : null;
	};

	// Extract Vimeo video ID from URL
	const getVimeoVideoId = (url) => {
		const regExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
		const match = url.match(regExp);
		return match ? match[1] : null;
	};

	// Check if URL is a YouTube video
	const isYouTubeVideo = (url) => {
		return url && (url.includes('youtube.com') || url.includes('youtu.be'));
	};

	// Check if URL is a Vimeo video
	const isVimeoVideo = (url) => {
		return url && url.includes('vimeo.com');
	};

	return (
		<div className="projectsItem">
			<h2>{title}</h2>
			<div className="imageContainer">
				{isYouTubeVideo(url) ? (
					<iframe
						src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&colors=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=1&playlist=${getYouTubeVideoId(url)}`}
						title={title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
						className="overlay youtube-overlay"
					></iframe>
				) : isVimeoVideo(url) ? (
					<iframe
						src={`https://player.vimeo.com/video/${getVimeoVideoId(url)}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0`}
						title={title}
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						className="overlay vimeo-overlay"
					></iframe>
				) : (
					<img src={url} alt="laptopscreen" className="overlay"></img>
				)}
				<img src="image/Laptop.png" alt="laptop" className="base"></img>
			</div>
			<div className="projectsItemText">
				{text.split('.').filter(sentence => sentence.trim() !== '').map((sentence, index) => (
					<div key={index} className="sentence">
						{sentence.trim()}{index < text.split('.').filter(s => s.trim() !== '').length - 1 ? '.' : ''}
					</div>
				))}
			</div>
			<div className="projectsButtonlinks">
				{githubLink && (
					<a
						href={githubLink}
						className="projectLinks button"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineGithub />
						Github
					</a>
				)}
				{demoLink && (
					<a
						href={demoLink}
						className="projectLinks button"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlinePlayCircle />
						Démo
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectsItem;
