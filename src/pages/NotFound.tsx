import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useTranslation } from "../i18n/LanguageContext";

const NotFound = () => {
  const t = useTranslation();
  return (
    <div>
      <Navigation />
      <img
        className="absolute left-1/2 top-[40%] h-[90vw] w-[90vw] mt-[-36vw] ml-[-45vw] nav:top-1/2 nav:h-[25vw] nav:w-[25vw] nav:mt-[-12.5vw] nav:ml-[-12.5vw]"
        src="/image/404.svg"
        alt={t.notFound.alt}
        onDragStart={(event) => event.preventDefault()}
      ></img>
      <Footer enoughSpace={false} />
    </div>
  );
};

export default NotFound;
