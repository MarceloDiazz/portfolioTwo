import React from "react";
import "../css/about.css";
import imagePerfil from "../img/foto-perfil.png"

const About = () => {
  return (
    <section className="about contenedor" id="aboutMe">
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
            Excepteur labore commodo laborum dolore consequat ea id nisi amet cupidatat exercitation consequat voluptate laborum. Do fugiat fugiat velit ullamco proident anim pariatur sit do           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
