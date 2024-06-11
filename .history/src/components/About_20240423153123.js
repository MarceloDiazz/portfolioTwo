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
        height={300}
        />
        <div>
          <p>
            Excepteur labore commodo laborum dolore consequat ea id nisi amet cupidatat exercitation consequat voluptate laborum. Do fugiat fugiat velit ullamco proident anim pariatur sit do consequat. Et dolor ad esse consectetur sunt esse sint non ipsum deserunt qui. Amet occaecat duis magna in deserunt et. Irure ex ipsum duis nulla dolore laboris cillum voluptate. Non mollit in qui exercitation in ipsum dolore proident Lorem est aliquip culpa et laboris.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
