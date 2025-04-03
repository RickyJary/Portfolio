import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import unitedKingdom from "../../assets/img/united_kingdom_square_icon_64.png";
import spain from "../../assets/img/spain_square_icon_64.png";

const Navbar = () => {
  const { t, toggleLanguage, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center p-4 w-[80%] transition-all duration-300 ${
        scrolled
          ? "bg-white/30 dark:bg-black/30 backdrop-blur-md text-white"
          : "bg-[#27a3a9] text-white"
      }`}
    >
      <ul className="flex gap-8 justify-center flex-1">
        <li>
          <a href="#projects">{t("navbar.projects")}</a>
        </li>
        <li>
          <a href="#skills">{t("navbar.skills")}</a>
        </li>
        <li>
          <a href="#about">{t("navbar.about")}</a>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <img
          src={unitedKingdom}
          alt="English"
          className="w-8 h-6 cursor-pointer"
          onClick={() => lang !== "en" && toggleLanguage()}
        />
        <img
          src={spain}
          alt="Spanish"
          className="w-8 h-6 cursor-pointer"
          onClick={() => lang !== "es" && toggleLanguage()}
        />
      </div>
    </nav>
  );
};

export default Navbar;
