import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";
import { PiHandWavingBold } from "react-icons/pi";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const homeCollumn = "block max-w-[70%] ml-[15%] nav:w-1/2 nav:max-w-none nav:ml-0";

const socialIcon =
  "relative mx-[15px] inline-block h-[40px] w-[40px] rounded-full bg-white text-center text-[1.2em] " +
  "leading-[2em] text-accent transition-all duration-500 before:absolute before:top-0 before:left-0 " +
  "before:z-[-1] before:h-full before:w-full before:scale-90 before:rounded-full before:bg-[blue] " +
  "before:transition-all before:duration-500 before:content-[''] hover:before:scale-110 " +
  "hover:before:shadow-[0_0_20px_blue]";

const Home = () => {
  const { language, t } = useLanguage();
  const home = t.home;
  return (
    <div>
      <Navigation />
      <div>
        <div className="pt-[50px] text-center nav:flex">
          <span className={homeCollumn}>
            <h1 className="py-[20px] text-center nav:pl-[45%] nav:pt-[10%] nav:pb-0 nav:text-left">
              {home.greeting}{" "}
              <PiHandWavingBold className="inline origin-[70%_70%] animate-waving" />
            </h1>
            <h1 className="py-[20px] text-left nav:pl-[40%] nav:pt-[10px] nav:pb-0">
              {home.iam}
              <span className="important">{home.name}</span>
            </h1>
            <h1 className="important py-[20px] text-left text-[15px] nav:pl-[40%] nav:pt-[50px] nav:pb-0 nav:text-[2em]">
              <Typewriter
                key={language}
                options={{
                  strings: home.typewriter,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h1>
          </span>
          <span className={homeCollumn}>
            <img
              src="/image/Programming-amico.svg"
              alt={home.illustrationAlt}
              className="w-[90%] py-[20px] nav:w-1/2 nav:py-0"
              onDragStart={(event) => event.preventDefault()}
            ></img>
          </span>
        </div>
        <div className="pt-[13%] pb-[5%] nav:pl-[15%]">
          <h1 className="pb-[5%] ml-[10%] max-w-[80%] text-center nav:max-w-none nav:text-left">
            {home.presentTitle.prefix}
            <span className="important">{home.presentTitle.emph}</span>
            {home.presentTitle.suffix}
          </h1>
          <div className="text-center nav:flex">
            <div className="text-justify max-w-[80%] ml-[10%] text-[17px] nav:max-w-none nav:w-[45%] nav:ml-0 nav:text-[20px]">
              <div>{home.p1}</div>
              <div className="space" />
              <div>
                {home.p2Lead}
                <span className="important">{home.p2Emph}</span>
              </div>
              <div className="space" />
              <div>{home.p3}</div>
              <div className="space" />
              <div>
                {home.p4Lead}
                <NavLink
                  to="/Projects"
                  onDragStart={(event) => event.preventDefault()}
                >
                  <span className="important">{home.p4Projects}</span>
                </NavLink>
                {home.p4Mid}
                <span className="important">{home.p4Frameworks}</span>
                {home.p4Comme}
                <span className="important">{home.p4FrameworkNames}</span>
              </div>
            </div>
            <div className="nav:w-[40%] nav:ml-[5%]">
              <div className="overflow-hidden rounded-full border-[5px] border-accent mt-[5%] ml-[10%] w-[80%] nav:mt-0 nav:ml-[25%] nav:w-1/2">
                <img
                  src="/image/Programming-pana.svg"
                  alt={home.illustrationAlt}
                  onDragStart={(event) => event.preventDefault()}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1>{home.findTitle}</h1>
          <div className="space" />
          <div>
            {home.contactLead}
            <span className="important">{home.contactEmph}</span>
          </div>
          <div className="pt-[5%]">
            <a
              className={socialIcon}
              href="https://github.com/Florian-Audouard"
              target="_blank"
              rel="noreferrer"
              onDragStart={(event) => event.preventDefault()}
            >
              <AiOutlineGithub className="inline" />
            </a>
            <a
              className={socialIcon}
              href="https://www.linkedin.com/in/florian-audouard-8b5b451a3/"
              target="_blank"
              rel="noreferrer"
              onDragStart={(event) => event.preventDefault()}
            >
              <FaLinkedinIn className="inline" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
