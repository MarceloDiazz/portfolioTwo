import React from "react";
import "../css/about.css";
import aboutTitle from "../img/img-icons/about-title.png";
import stack from "../img/img-icons/stack.png";
import { useTranslation } from "react-i18next";
import {
  firstSliderItems,
  renderSlider,
  secondSliderItems,
  thirdSliderItems,
} from "../utils/sliderItems";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="aboutSection contenedor">
      <div className="titleSections">
        <img src={aboutTitle} alt="aboutTitle" />
        <h2>{t("aboutMe")}</h2>
      </div>
      <div className="aboutCard">
        <div className="aboutCardContent">
          <p>{t("aboutMeDescription1")}</p>
          <p>{t("aboutMeDescription2")}</p>
          <p>{t("aboutMeDescription3")}</p>
          <div className="titleSections">
            <img height={18} src={stack} alt="stack" />
            <h5>Stack</h5>
          </div>
          <div className="tag-list">
            {renderSlider(firstSliderItems, 15951, "normal")}
            {renderSlider(secondSliderItems, 19260, "reverse")}
            {renderSlider(thirdSliderItems, 15936, "normal")}
            <div className="fade"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
