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
  className={`sticky top-0 z-50 w-full transition-all duration-300 ${
    scrolled
      ? "bg-white/30 dark:bg-black/30 backdrop-blur-md text-[#27a3a9] dark:text-[#b2f5f7]"
      : "bg-[#27a3a9] text-white"
  }`}
>
  <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
    <ul className="flex gap-8 justify-center lg:justify-around flex-1">
    <li>
  <button
    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
    className="hover:underline underline-offset-4 transition-all font-semibold bg-transparent"
  >
    {t("navbar.projects")}
  </button>
</li>
  <li>
  <button
    onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
    className="hover:underline underline-offset-4 transition-all font-semibold bg-transparent"
  >
    {t("navbar.skills")}
  </button>
</li>

<li>
  <button
    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
    className="hover:underline underline-offset-4 transition-all font-semibold bg-transparent"
  >
    {t("navbar.about")}
  </button>
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
  </div>
</nav>
  );
};

export default Navbar;
