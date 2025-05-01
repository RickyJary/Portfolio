import { useLanguage } from "../../context/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-20 px-10 my-10 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg shadow-gray-300 gap-6 w-full max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center text-[#27a3a9]">
        {t("aboutsection.title")}
      </h2>
      <div className="text-center max-w-3xl text-gray-700 leading-relaxed space-y-6">
        <p>{t("aboutsection.paragraph1")}</p>
        <p>{t("aboutsection.paragraph2")}</p>
        <p>{t("aboutsection.paragraph3")}</p>

        <div className="mt-8">
          <span className="block text-lg font-semibold text-[#27a3a9] mb-4">
            {t("aboutsection.connect")}
          </span>
          <div className="flex justify-center gap-6 text-2xl text-[#27a3a9]">
            <a
              href="https://github.com/RickyJary"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1f8b8f] transition-transform duration-300 transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ricardo-garcia-jarillo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1f8b8f] transition-transform duration-300 transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ricardogarciajarillo@gmail.com"
              className="hover:text-[#1f8b8f] transition-transform duration-300 transform hover:scale-125"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
