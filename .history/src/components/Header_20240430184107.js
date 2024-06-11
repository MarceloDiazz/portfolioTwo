import React from "react";
import fotoPerfil from "../img/foto-perfil.png";
import iconLinkedin from "../img/IconLinkedin.png";
import iconGmail from "../img/IconGmail.png";
import iconGitHub from "../img/iconGitHub.png";
import "../css/header.css";
const Header = () => {
  return (
    <section id="home">
    <header className="contenedor headerSection" >
      <div className="arrow"></div>
      <div className="card">
        <div className="card-content">
          <div className="card-text">
            <h1>Marcelo Diaz</h1>
            <h1 className="distinguish">
              <span className="hover-text">
                Desarrollador <br /> Front End
              </span>
            </h1>
            <p>
              <span className="arrowIcon"></span> <span></span>
              Me sumergí en el mundo de la creación
              digital enfocado en la construccion de experiencias interactivas y
              funcionales cumpliendo las necesidades del usuario.
            </p>
          </div>
          <img src={fotoPerfil} className="img-perfil"/>
          <div className="follow">
          <a href="https://github.com/MarceloDiazz" target="_blank"> <img src={iconGitHub}/></a>
          <a href="https://github.com/MarceloDiazz"><img src={iconLinkedin} alt="Linkedin"/></a>
          <a> <img src={iconGmail}/></a>
          </div>
        </div>
      </div>
      <div className="arrowBottom"></div>
    </header>
    </section>

  );
};

export default Header;
