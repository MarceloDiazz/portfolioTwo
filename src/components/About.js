import React from "react";
import "../css/about.css";
import aboutPhoto from "../img/foto-about.png";
import aboutTitle from "../img/about-title.png";
import stack from "../img/stack.png";
import js from "../img/js-tag.png";
import react from "../img/react-tag.png";
import typescript from "../img/typescript-tag.png";
import git from "../img/git-tag.png";
import tailwind from "../img/tailwind-tag.png";
import firebase from "../img/firebase-tag.png";
import flutter from "../img/flutter-tag.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="aboutSection contenedor">
      <div className="titleSections">
        <img src={aboutTitle} alt="aboutTitle" />
        <h2>{t("aboutMe")}</h2>
      </div>
      <div className="aboutCard">
        <div className="aboutCardPhoto">
          <img src={aboutPhoto} alt="foto-about" />
        </div>
        <div className="aboutCardContent">
          <p>{t("aboutMeDescription1")}</p>
          <p>{t("aboutMeDescription2")}</p>
          <p>{t("aboutMeDescription3")}</p>
          <div className="titleSections">
            <img height={18} src={stack} alt="stack" />
            <h5>Stack</h5>
          </div>
          <ul className="stackList">
            <li className="stackItem">
              JavaScript
              <img height={18} src={js} alt="js" />
            </li>
            <li className="stackItem">
              React JS
              <img height={18} src={react} alt="react" />
            </li>
            <li className="stackItem">
              Redux
              <img height={18} src={react} alt="react" />
            </li>
            <li className="stackItem">
              Typescript
              <img height={18} src={typescript} alt="typescript" />
            </li>
            <li className="stackItem">
              Git
              <img height={20} src={git} alt="git" />
            </li>
            <li className="stackItem">
              Tailwind CSS
              <img height={22} src={tailwind} alt="tailwind" />
            </li>
            <li className="stackItem">
              Firebase
              <img height={20} src={firebase} alt="firebase" />
            </li>
            <li className="stackItem">
              Flutter
              <img height={18} src={flutter} alt="flutter" />
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default About;
