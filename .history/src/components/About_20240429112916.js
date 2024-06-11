import React from "react";
import "../css/about.css";
import imagePerfil from "../img/foto-perfil.png";

const About = () => {
  return (
    <section id="about" className="aboutSection contenedor">
      <h1>
        <span className="arrowIconTitle"></span> <span></span>
        Sobre mí
      </h1>
      <div className="aboutCard">
        <div className="aboutCardPhoto">
          <img src={imagePerfil} />
        </div>
        <div className="aboutCardContent">
          <p>Mi nombre es Marcelo, lo que al principio era un simple interés se convirtió rápidamente en una verdadera pasión. La sensación de escribir líneas de código y ver cómo cobraban vida en la pantalla era incomparable. Cada desafío que enfrentaba en el camino solo aumentaba mi determinación de dominar este arte.</p>
          <p>
            A pesar de mi corta experiencia, asumí el desafío de liderar todo el
            desarrollo Front End en mi actual empresa. Aunque al principio podría
            haber sido abrumador, me sumergí en el trabajo con determinación y
            pasión. Con cada línea de código escrita, cada diseño de interfaz
            creado y cada problema resuelto, fui fortaleciendo mis habilidades y
            aumentando mi confianza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
