import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { LuGamepad2 } from "react-icons/lu";
import { GiOpenBook } from "react-icons/gi";
import {
  FaPlane,
  FaReact,
  FaJava,
  FaPython,
  FaAngular,
  FaWindows,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsGit } from "react-icons/bs";
import {
  BiLogoPostgresql,
  BiLogoVisualStudio,
  BiLogoPhp,
} from "react-icons/bi";
import { SiVercel } from "react-icons/si";
import { useTranslation } from "../i18n/LanguageContext";

const hobbyIcon = "inline-block box-content h-[15px] w-[15px] pr-[5px]";

const skillIcon =
  "inline-block box-content rounded-[10px] border-2 border-accent shadow-[0_0_10px_var(--color-accent)] " +
  "transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_var(--color-accent)] " +
  "m-[15px] h-[60px] w-[60px] py-[30px] px-[20px] " +
  "nav:m-[30px] nav:h-[80px] nav:w-[80px] nav:px-[80px]";

const About = () => {
  const t = useTranslation();
  const about = t.about;
  return (
    <div>
      <Navigation />
      <div className="text-[20px]">
        <div className="pt-[50px] max-w-[80%] ml-[10%] text-center nav:flex nav:w-[60%] nav:max-w-none nav:ml-[20%]">
          <span className="w-1/2">
            <h1 className="pt-[10px] text-center">
              {about.whoTitle.prefix}
              <span className="important">{about.whoTitle.emph}</span>
              {about.whoTitle.suffix}
            </h1>
            <div className="space" />
            <div className="pt-[10px] text-justify">
              {about.intro1Lead}
              <span className="important">{about.intro1Name}</span>
              {about.intro1Mid}
              <span className="important">{about.intro1Place}</span>
            </div>
            <div className="pt-[10px] text-justify">
              {about.intro2Lead}
              <span className="important">{about.intro2Emph}</span>
              {about.intro2Suffix}
            </div>
            <div className="space" />
            <div className="pt-[10px] text-justify">
              {about.hobbiesIntro}
              <ul className="pl-[40px] pt-[20px]">
                <li className="py-[5px]">
                  <LuGamepad2 className={hobbyIcon} />
                  {about.hobbyGames}
                </li>
                <li className="py-[5px]">
                  <GiOpenBook className={hobbyIcon} />
                  {about.hobbyManga}
                </li>
                <li className="py-[5px]">
                  <FaPlane className={hobbyIcon} />
                  {about.hobbyTravel}
                </li>
              </ul>
            </div>
          </span>
          <span className="w-1/2">
            <img
              src="/image/Developer-activity.svg"
              alt={about.illustrationAlt}
              className="w-[80%]"
              onDragStart={(event) => event.preventDefault()}
            ></img>
          </span>
        </div>
        <h1 className="pt-[3%] pb-[3%] text-center nav:pb-0">
          {about.skillsTitle.prefix}
          <span className="important">{about.skillsTitle.emph}</span>
          {about.skillsTitle.suffix}
        </h1>
        <div className="text-center ml-[5%] w-[90%] nav:w-[70%] nav:ml-[15%]">
          <FaPython className={skillIcon} />
          <FaJava className={skillIcon} />
          <IoLogoJavascript className={skillIcon} />
          <BiLogoPhp className={skillIcon} />
          <BiLogoPostgresql className={skillIcon} />
          <FaReact className={skillIcon} />
          <FaAngular className={skillIcon} />
          <BsGit className={skillIcon} />
        </div>
        <h1 className="pt-[3%] pb-[3%] max-w-[80%] ml-[10%] text-center nav:pb-0">
          {about.toolsTitle.prefix}
          <span className="important">{about.toolsTitle.emph}</span>
          {about.toolsTitle.suffix}
        </h1>
        <div className="text-center ml-[5%] w-[90%] nav:w-[70%] nav:ml-[15%]">
          <BiLogoVisualStudio className={skillIcon} />
          <FaWindows className={skillIcon} />
          <SiVercel className={skillIcon} />
          <FaGithub className={skillIcon} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
