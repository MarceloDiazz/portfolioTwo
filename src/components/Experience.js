import React from "react";
import "../css/experience.css";
import iconEnglish from "../img/english.png";
import iconSpain from "../img/spain.png";
import iconPortugal from "../img/portugal.png";
import iconDrag from "../img/drag.png";
import iconGit from "../img/git.png";
import iconPlanUser from "../img/plan-user.png";
import iconSpeed from "../img/speed.png";
import iconMeeting from "../img/meeting.png";
import iconNew from "../img/new.png";
import experienceIcon from "../img/experience-title.png";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="contenedor">
      <div className="titleSections">
        <img src={experienceIcon} alt="experienceIcon" />
        <h2>{t("experience")}</h2>
      </div>
      <div className="experienceContent">
        <div className="timeline">
          <div className="container right">
            <div className="content-timeline">
              <div className="puesto">
                <h3>{t("job")}</h3>
                <h4>Oryzativa</h4>
                <time>
                  {t("march")} 2022 - {t("june")} 2024
                </time>
              </div>
              <div className="puesto-descripcion">
                <p>
                  <span className="arrowIcon"></span> <span></span>
                  {t("descriptionExperience1")}
                  <br />
                  <br />
                  <span className="arrowIcon"></span> <span></span>
                  {t("descriptionExperience2")}
                  <br />
                  <br />
                  <span className="arrowIcon"></span> <span></span>
                  {t("descriptionExperience3")}
                  <br />
                  <br />
                  {t("descriptionExperience4")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="tags">
          <li className="tag">
            {t("tagTranslation")}
            <img src={iconEnglish} alt="iconEnglish" />
            <img src={iconSpain} alt="iconSpain" />
            <img src={iconPortugal} alt="iconPortugal" />
          </li>
          <li className="tag">
            {t("tagDragDrop")}
            <img src={iconDrag} alt="iconDrag" />
          </li>
          <li className="tag">
            {t("tagGit")}
            <img src={iconGit} alt="iconGit" />
          </li>
          <li className="tag">
            {t("tagPlanUser")}
            <img src={iconPlanUser} alt="iconPlanUser" />
          </li>
          <li className="tag">
            {t("tagOptimization")}
            <img src={iconSpeed} alt="iconSpeed" />
          </li>
          <li className="tag">
            {t("tagNewSections")}
            <img src={iconNew} alt="iconNew" />
          </li>
          <li className="tag">
            {t("tagMeetings")}
            <img src={iconMeeting} alt="iconMeeting" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
