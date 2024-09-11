import React from "react";
import "../css/navbar.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../provider/LanguageContext";
import spain from "../img/img-icons/spain.png";
import english from "../img/img-icons/english.png";
const Navbar = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const toggleLanguage = (language) => {
    changeLanguage(language);
  };
  return (
    <div className="contenedor navbar">
      <nav className="content-navbar">
        <ul className="nav-links">
          <li>
            <a href="#experience" className="experience navbarItem">
              {t("experience")}
            </a>
          </li>
          <li>
            <a href="#projects" className="projects navbarItem">
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#about" className="about navbarItem">
              {t("aboutMe")}
            </a>
          </li>
          {language === "es" ? (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => toggleLanguage("en")}
            >
              <img src={english} height={30} alt="Spanish" />
            </li>
          ) : (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => toggleLanguage("es")}
            >
              <img src={spain} height={30} alt="English" />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
