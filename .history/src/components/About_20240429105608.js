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
          En mi trayectoria profesional, la programación ha sido mi aliada fundamental para abordar desafíos complejos y alcanzar objetivos ambiciosos. A través del desarrollo de software, he enfrentado una variedad de problemas, desde la optimización de procesos empresariales hasta la creación de productos innovadores para nuestros clientes. La programación no solo me permite identificar y resolver problemas de manera eficiente, sino que también me brinda la flexibilidad para adaptarme a las cambiantes necesidades del mercado. Mi enfoque orientado a soluciones y mi habilidad para colaborar con equipos multidisciplinarios me han permitido liderar proyectos exitosos y entregar resultados de alta calidad en tiempo y forma. En un entorno profesional altamente competitivo, la programación se ha convertido en mi herramienta distintiva para destacar y hacer una diferencia significativa en el éxito de mi organización. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
