import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useTranslation } from "../i18n/LanguageContext";

interface FooterProps {
  enoughSpace?: boolean;
}

const colBase = "block nav:flex-[0_0_auto] nav:w-1/3 nav:my-[15px]";
const textSize = "nav:text-[17px]";

const Footer = ({ enoughSpace }: FooterProps) => {
  const t = useTranslation();
  const isEnoughSpace = enoughSpace ?? true;

  return (
    <footer
      className={`mt-[5%] w-full bg-[rgb(5,5,43)] text-center nav:flex ${
        isEnoughSpace ? "" : "absolute bottom-0"
      }`}
    >
      <span className={`${textSize} ${colBase} pt-[30px] pb-[10px] nav:py-0`}>
        {t.footer.designed}
      </span>

      <a
        className={`${textSize} ${colBase} py-[10px] nav:py-0`}
        href="https://storyset.com/web"
        target="_blank"
        rel="noreferrer"
        onDragStart={(event) => event.preventDefault()}
      >
        {t.footer.illustrations}
      </a>

      <div className={`${colBase} pt-[10px] pb-[30px] nav:py-0`}>
        <a
          href="https://github.com/Florian-Audouard"
          target="_blank"
          rel="noreferrer"
          onDragStart={(event) => event.preventDefault()}
        >
          <FaGithubSquare size={20} className="mx-[10px] inline" />
        </a>
        <a
          href="https://www.linkedin.com/in/florian-audouard-8b5b451a3/"
          target="_blank"
          rel="noreferrer"
          onDragStart={(event) => event.preventDefault()}
        >
          <BsLinkedin size={20} className="mx-[10px] inline" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
