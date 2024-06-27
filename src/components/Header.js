import React from "react";
import fotoPerfil from "../img/foto-perfil.png";
import iconLinkedin from "../img/icon-linkedin.png";
import iconGmail from "../img/icon-gmail.png";
import iconGitHub from "../img/icon-github.png";
import iconCurriculum from "../img/icon-curriculum.png";
import cv from "../cv_marceloDiaz.pdf";
import "../css/header.css";
const Header = () => {
  return (
    <section id="home">
      <header className="contenedor headerSection">
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <h2>Marcelo Diaz</h2>
              <h1 className="distinguish">
                <span className="hover-text">
                  Desarrollador <br /> Front End
                </span>
              </h1>
              <p>
                <span className="arrowIcon"></span> <span></span>
                Me involucré profundamente en la creación digital, enfocándome en crear experiencias interactivas y funcionales para el usuario.
              </p>
            </div>
            <img src={fotoPerfil} alt="fotoPerfil" className="img-perfil" />
            <div className="follow">
              <a href="https://github.com/MarceloDiazz" target="_blank ">
                {" "}
                <img src={iconGitHub} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcelo-diaz2000/"
                target="_blank "
              >
                <img src={iconLinkedin} alt="iconLinkedin" />
              </a>
              <a href="mailto:marcelodiazcp@gmail.com" target="_blank ">
                {" "}
                <img src={iconGmail} alt="Gmail" />
              </a>
              <a href={cv} target="_blank ">
                {" "}
                <img src={iconCurriculum} alt="Curriculum" />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="arrowBottom"></div> */}
      </header>
    </section>
  );
};
export default Header;
