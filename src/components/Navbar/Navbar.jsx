import { useLanguage } from "../../context/LanguageContext";
import unitedKingdom from "../../assets/img/united_kingdom_square_icon_64.png";
import spain from "../../assets/img/spain_square_icon_64.png";

const Navbar = () => {
  const { t, toggleLanguage, lang } = useLanguage();

  return (
    <nav className="flex justify-between bg-blue-600 p-4 w-[80%] text-white">
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
      <div className="flex items-centercursor-pointer">
        <img
          src={unitedKingdom}
          alt="English"
          className="w-6 h-6 cursor-pointer"
          onClick={() => lang !== "en" && toggleLanguage()}
        />

        <img
          src={spain}
          alt="Spanish"
          className="w-6 h-6 cursor-pointer"
          onClick={() => lang !== "es" && toggleLanguage()}
        />
      </div>
    </nav>
  );
};

export default Navbar;
