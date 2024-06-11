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
      <div className="aboutContent">
        <div className="photo">
        <img
        src={imagePerfil}
        height={300}
        width={1500}
        />
        </div>
        <div>
          <p>
            Excepteur labore commodo laborum dolore consequat ea id nisi amet cupidatat exercitation consequat voluptate laborum. Do fugiat fugiat velit ullamco proident anim pariatur sit do consequat. Et dolor ad esse consectetur sunt esse sint non ipsum deserunt qui. Amet occaecat duis magna in deserunt e
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
