import profilePhoto from "../../assets/img/foto.png";
import { ReactTyped } from "react-typed";
import { useLanguage } from "../../context/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import RicardoEsp from "../../assets/cv/RicardoGarciaJarilloEsp.pdf";
import RicardoEng from "../../assets/cv/RicardoGarciaJarilloEng.pdf";

const Hero = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="flex flex-col sm:flex-row items-center lg:items-end justify-between py-20 px-10 bg-white/90 backdrop-blur-md shadow-lg shadow-gray-300  gap-12 rounded-2xl w-full max-w-5xl mx-auto">

      <div className="flex flex-col items-center">
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg ring-4 ring-[#27a3a9] ring-opacity-50 transition duration-500 hover:scale-105">
          <img
            src={profilePhoto}
            alt="Ricardo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-48 sm:w-64 mt-8">
          <div className="flex justify-between px-4 text-4xl text-[#27a3a9]">
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
              href="mailto:tuemail@correo.com"
              className="hover:text-[#1f8b8f] transition-transform duration-300 transform hover:scale-125"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="sm:w-2/3 text-center sm:text-left max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          {t("hero.title")}{" "}
          <span className="text-[#27a3a9] font-bold">Ricardo</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600  leading-relaxed">
          {t("hero.iam")}{" "}
          <ReactTyped
            className="text-[#27a3a9] font-bold"
            strings={[
              t("hero.description1"),
              t("hero.description2"),
              t("hero.description3"),
              t("hero.description4"),
              t("hero.description5"),
              t("hero.description6"),
              t("hero.description7"),
              t("hero.description8"),
              t("hero.description9"),
              t("hero.description10"),
            ]}
            typeSpeed={60}
            backSpeed={50}
            backDelay={1000}
            loop
            showCursor
          />
        </p>

        <p className="text-base sm:text-lg text-gray-700 ">
          {t("about.objective")}
        </p>

        <a
          href={lang === "en" ? RicardoEng : RicardoEsp}
          download
          className="mt-20 inline-block w-[50%] px-6 py-2 bg-[#27a3a9] text-white font-semibold rounded hover:bg-[#1f8b8f] transition duration-300 text-center"

        >
          {t("hero.download")}
        </a>
      </div>
    </section>
  );
};

export default Hero;
