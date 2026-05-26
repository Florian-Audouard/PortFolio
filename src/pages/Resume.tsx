import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { BsDownload } from "react-icons/bs";
import { useTranslation } from "../i18n/LanguageContext";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const pdfPath = "/pdf/CV_Florian_AUDOUARD.pdf";

const DownloadButton = ({ label }: { label: string }) => (
  <div>
    <a
      href={pdfPath}
      download="CV_Florian_AUDOUARD.pdf"
      rel="noreferrer"
      className="btn py-[10px] px-[20px] text-[20px] mx-[10px] my-[3%]"
    >
      <BsDownload className="inline mr-[10px] h-[19px] w-[19px]" />
      {label}
    </a>
  </div>
);

const Resume = () => {
  const t = useTranslation();
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="text-center">
        <DownloadButton label={t.resume.download} />
        <div className="inline-block">
          <Document file={pdfPath}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
        <DownloadButton label={t.resume.download} />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
