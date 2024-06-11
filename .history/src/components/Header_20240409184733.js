import React from "react";
import fotoPerfil from "../img/foto-perfil.jpg";
import iconLinkedin from "../img/iconLinkedin.png";
import iconGmail from "../img/iconGmail.png";
import iconGitHub from "../img/iconGitHub.png";
import "../css/header.css";
const Header = () => {
  return (
    <section className="contenedor header">
      <div className="arrow"></div>
      <div className="card">
        <div className="card-content">
          <div className="card-text">
            <h1>Marcelo Diaz</h1>
            <h1>
              <span>
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
          <img src={fotoPerfil} />
          <div className="follow">
            <img src={iconLinkedin}/>
            <img src={iconGmail}/>
            <img src={iconGitHub}/>
          </div>
        </div>
      </div>
      <div className="arrowBottom"></div>
    </section>
  );
};

export default Header;
