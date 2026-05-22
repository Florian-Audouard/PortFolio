import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RxHome } from "react-icons/rx";
import { BsPerson, BsFillStarFill } from "react-icons/bs";
import { BiFile } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { RiGitMergeLine } from "react-icons/ri";
import { PiListBold, PiXBold } from "react-icons/pi";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../i18n/LanguageContext";

const MOBILE_BREAKPOINT = 1200;

// Icon sizing inside the nav (old `.navigation svg` desktop rule).
// `align-baseline` undoes Tailwind preflight's `svg { vertical-align: middle }`
// so the icons line up with the text like the original CSS did.
const navIcon = "inline align-baseline nav:mb-[-2px] nav:h-[21px] nav:mr-[3px]";

// Each li (old `.navigation li`, mobile + desktop float layout).
const liClass =
  "text-[21px] py-[5px] nav:py-0 nav:float-right nav:mx-[1em] nav:flex nav:cursor-pointer nav:justify-center";

// Animated underline on hover (old `li:not(.noUnderline) a`, desktop only).
const navLink =
  "nav:relative nav:inline-block nav:pb-1 " +
  "nav:before:absolute nav:before:bottom-0 nav:before:left-0 nav:before:h-[5px] nav:before:w-0 " +
  "nav:before:rounded-[10px] nav:before:bg-accent nav:before:transition-[width] nav:before:duration-[250ms] " +
  "nav:before:ease-out nav:before:content-[''] nav:hover:before:w-full";

const Navigation = () => {
  const t = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [extend, setExtend] = useState(false);
  const wasMobile = useRef(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 20);

    const adaptNavBar = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        // Only collapse when transitioning into mobile, not on every resize.
        if (!wasMobile.current) setExtend(false);
        wasMobile.current = true;
        setIsMobile(true);
        setSticky(true);
        window.removeEventListener("scroll", handleScroll);
      } else {
        wasMobile.current = false;
        setIsMobile(false);
        setExtend(true);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
      }
    };

    adaptNavBar();
    window.addEventListener("resize", adaptNavBar);
    return () => {
      window.removeEventListener("resize", adaptNavBar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[100] block select-none overflow-hidden text-center transition-all duration-300 ease-out nav:text-left ${
        sticky ? "bg-[rgba(5,5,43,0.9)]" : "bg-transparent"
      }`}
    >
      <div className="h-[60px] nav:h-auto">
        <div className="float-left cursor-pointer pl-[10%] nav:mt-[11px]">
          <NavLink to="/" onDragStart={(event) => event.preventDefault()}>
            <span className="font-blackhole text-[45px] nav:text-[55px]">AF</span>
          </NavLink>
        </div>
        <div
          hidden={!isMobile}
          onClick={() => setExtend((prev) => !prev)}
          className="float-right cursor-pointer pr-[10%] pt-[10px]"
        >
          {extend ? (
            <PiXBold className="h-[40px] w-[40px]" />
          ) : (
            <PiListBold className="h-[40px] w-[40px]" />
          )}
        </div>
      </div>
      {!(isMobile && !extend) && (
        <ul className="m-0 flex flex-col-reverse p-0 nav:block nav:mx-[-0.5em] nav:mb-[25px] nav:pr-[200px] nav:pt-[25px]">
          <li className={liClass}>
            <a
              className="btn py-[7px] px-[20px] mb-[10px] nav:mb-[18px] nav:mt-[-7px]"
              href="https://github.com/Florian-Audouard/PortFolio"
              target="_blank"
              rel="noreferrer"
              onDragStart={(event) => event.preventDefault()}
            >
              <RiGitMergeLine className={navIcon} /> <BsFillStarFill className={navIcon} />
            </a>
          </li>

          <li className={liClass}>
            <LanguageSwitcher />
          </li>
          <li className={liClass}>
            <NavLink
              to="/Resume"
              className={navLink}
              onDragStart={(event) => event.preventDefault()}
            >
              <BiFile className={navIcon} />
              {t.nav.resume}
            </NavLink>
          </li>
          <li className={liClass}>
            <NavLink
              to="/Projects"
              className={navLink}
              onDragStart={(event) => event.preventDefault()}
            >
              <FiMonitor className={navIcon} />
              {t.nav.projects}
            </NavLink>
          </li>
          <li className={liClass}>
            <NavLink
              to="/About"
              className={navLink}
              onDragStart={(event) => event.preventDefault()}
            >
              <BsPerson className={navIcon} />
              {t.nav.about}
            </NavLink>
          </li>
          <li className={liClass}>
            <NavLink
              to="/"
              className={navLink}
              onDragStart={(event) => event.preventDefault()}
            >
              <RxHome className={navIcon} />
              {t.nav.home}
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
