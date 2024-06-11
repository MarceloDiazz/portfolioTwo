import React from "react";
import "../css/about.css";
import imagePerfil from "../img/foto-perfil.png";

const About = () => {
  return (
    <section id="about" className="aboutSection contenedor">
      <h2>
        <span className="arrowIconTitle"></span> <span></span>
        Sobre mí
      </h2>
      <div className="aboutCard">
        <div className="aboutCardPhoto">
          <img src={imagePerfil} />
        </div>
        <div className="aboutCardContent">
        <p className="aboutCardParaGraph">
            Me llamo Marcelo, me desempeño como desarrollador <span>FrontEnd</span>
          </p>
          <p className="aboutCardParaGraph">
            Asumí el desafío de <span>liderar</span> todo el
            desarrollo Front End en mi actual empresa. Aunque al principio podría
            haber sido abrumador, me sumergí en el trabajo con determinación y
            pasión. Con cada línea de código escrita, cada diseño de interfaz
            creado y cada problema resuelto, fui <span>fortaleciendo</span> mis habilidades y
            aumentando mi confianza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
