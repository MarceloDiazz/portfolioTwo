import React from "react";
import "../css/about.css";
import imagePerfil from "../img/foto-perfil-prueba.png"

const About = () => {
  return (
    <section className="contenedor">
      <h1>
        <span className="arrowIconTitle"></span> <span></span>
        Sobre mí
      </h1>
      <div>
        <img
        src={imagePerfil}
        height={100}
        />
      </div>
    </section>
  );
};

export default About;
