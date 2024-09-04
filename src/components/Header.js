import React from "react";
import fotoPerfil from "../img/foto-perfil.png";
import iconLinkedin from "../img/icon-linkedin.png";
import iconGmail from "../img/icon-gmail.png";
import iconGitHub from "../img/icon-github.png";
import iconCurriculum from "../img/icon-curriculum.png";
import cvEN from "../cv/cv_marceloDiaz-EN.pdf";
import cvES from "../cv/cv-marceloDiaz-ES.pdf";
import "../css/header.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../provider/LanguageContext";
const Header = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  return (
    <section id="home">
      <header className="contenedor headerSection">
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <h2>Marcelo Diaz</h2>
              <h1 className="distinguish">
                <span className="hover-text">{t("job")}</span>
              </h1>
              <p>
                <span className="arrowIcon"></span> <span></span>
                {t("description")}
              </p>
            </div>
            <img src={fotoPerfil} alt="fotoPerfil" className="img-perfil" />
            <div className="follow">
              <a href="https://github.com/MarceloDiazz" target="_blank ">
                {" "}
                <img src={iconGitHub} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcelo-diaz2000/"
                target="_blank "
              >
                <img src={iconLinkedin} alt="iconLinkedin" />
              </a>
              <a href="mailto:marcelodiazcp@gmail.com" target="_blank ">
                {" "}
                <img src={iconGmail} alt="Gmail" />
              </a>
              <a href={language === "es" ? cvES : cvEN} target="_blank ">
                {" "}
                <img src={iconCurriculum} alt="Curriculum" />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="arrowBottom"></div> */}
      </header>
    </section>
  );
};
export default Header;
