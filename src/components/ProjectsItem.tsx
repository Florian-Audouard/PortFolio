import { AiOutlineGithub, AiOutlinePlayCircle } from "react-icons/ai";
import { useTranslation } from "../i18n/LanguageContext";

interface ProjectsItemProps {
  url: string;
  title: string;
  text: string;
  githubLink?: string;
  demoLink?: string;
}

const linkClass =
  "btn text-[17px] mx-[5px] px-[10px] py-[5px] nav:py-[10px]";
const linkIcon = "inline mr-[5px] h-[14px] w-[14px]";

const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const getVimeoVideoId = (url: string): string | null => {
  const regExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const isYouTubeVideo = (url: string): boolean =>
  !!url && (url.includes("youtube.com") || url.includes("youtu.be"));

const isVimeoVideo = (url: string): boolean => !!url && url.includes("vimeo.com");

const ProjectsItem = ({
  url,
  title,
  text,
  githubLink,
  demoLink,
}: ProjectsItemProps) => {
  const { projectsItem } = useTranslation();
  const sentences = text
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence !== "");

  return (
    <div className="flex-1 rounded-[5px] border border-accent px-[15px] pt-[50px] pb-[20px] text-center shadow-[0_0_10px_var(--color-accent)] my-[5%] mx-[10%] nav:my-[2%] nav:mx-[2%]">
      <h2 className="pb-[30px]">{title}</h2>
      <div className="relative z-0 mt-[-80px] mb-[-20px] inline-block w-full overflow-hidden">
        {isYouTubeVideo(url) ? (
          <iframe
            src={`https://www.youtube.com/embed/${getYouTubeVideoId(
              url
            )}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&colors=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=1&playlist=${getYouTubeVideoId(
              url
            )}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            className="pointer-events-none absolute top-[22%] left-[11%] z-[1] h-[44%] w-[77%] rounded-[2px]"
          ></iframe>
        ) : isVimeoVideo(url) ? (
          <iframe
            src={`https://player.vimeo.com/video/${getVimeoVideoId(
              url
            )}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="pointer-events-none absolute top-[22%] left-[11%] z-[1] h-[44%] w-[77%] rounded-[2px]"
          ></iframe>
        ) : (
          <img
            src={url}
            alt="laptopscreen"
            className="pointer-events-none absolute top-[22%] left-[11%] z-[1] h-[44%] w-[77%] rounded-[2px]"
          ></img>
        )}
        <img
          src="/image/Laptop.png"
          alt="laptop"
          className="relative z-[2] block w-full"
        ></img>
      </div>
      <div className="pt-[10px] pl-[5px] text-justify">
        {sentences.map((sentence, index) => (
          <div key={index} className="pb-[15px] text-[15px]">
            {sentence}
            {index < sentences.length - 1 ? "." : ""}
          </div>
        ))}
      </div>
      <div className="pt-[20px]">
        {githubLink && (
          <a
            href={githubLink}
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub className={linkIcon} />
            {projectsItem.github}
          </a>
        )}
        {demoLink ? (
          <a
            href={demoLink}
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlinePlayCircle className={linkIcon} />
            {projectsItem.demo}
          </a>
        ) : (
          (isYouTubeVideo(url) || isVimeoVideo(url)) && (
            <a href={url} className={linkClass} target="_blank" rel="noreferrer">
              <AiOutlinePlayCircle className={linkIcon} />
              {projectsItem.video}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectsItem;
