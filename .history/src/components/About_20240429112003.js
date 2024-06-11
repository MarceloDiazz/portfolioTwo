import React from "react";
import "../css/about.css";
import imagePerfil from "../img/foto-perfil.png"

const About = () => {
  return (
    <section id="about" className="aboutSection contenedor" >
      <h1>
        <span className="arrowIconTitle"></span> <span></span>
        Sobre mí
      </h1>
      <div className="aboutCard">
        <div className="aboutCardPhoto">
        <img
        src={imagePerfil}
        />
        </div>
        <div className="aboutCardContent">
          <p>
            
          </p>
          <p>
          En mi carrera profesional, la programación ha sido mi principal herramienta para abordar desafíos y alcanzar metas ambiciosas. A través del desarrollo de software, he resuelto una variedad de problemas empresariales, desde la optimización de procesos hasta la creación de productos innovadores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
