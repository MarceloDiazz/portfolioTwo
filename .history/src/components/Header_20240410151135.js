import React from "react";
import fotoPerfil from "../img/foto-perfil.jpg";
import iconLinkedin from "../img/IconLinkedin.png";
import iconGmail from "../img/IconGmail.png";
import iconGitHub from "../img/iconGitHub.png";
import "../css/header.css";
const Header = () => {
  return (
    <section className="contenedor header">
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      <div className="arrow"></div>
      <div className="card">
        <div className="card-content">
            <h1>Marcelo Diaz  <span>
                Desarrollador <br /> Front End
              </span></h1>
            {/* <p>
              <span className="arrowIcon"></span> <span></span>
              Me sumergí en el mundo de la creación
              digital enfocado en la construccion de experiencias interactivas y
              funcionales cumpliendo las necesidades del usuario.
            </p> */}
          <img src={fotoPerfil} className="img-perfil"/>
          <div className="follow">
           <a> <img src={iconGitHub}/></a>
         <a> <img src={iconLinkedin} /></a>
           <a> <img src={iconGmail}/></a>
          </div>
        </div>
      </div>
      <div className="arrowBottom"></div>
    </section>
  );
};

export default Header;
