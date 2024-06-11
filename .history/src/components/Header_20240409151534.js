import React from "react";
import fotoPerfil from "../img/foto-perfil.jpg";
import "../css/header.css";
const Header = () => {
  return (
    <section className="contenedor header">
      <div className="card">
        <div className="arrow">
        </div>
        <div className="card-content">
          <div className="card-text">
            <h1>Marcelo Diaz</h1>
            <h1><span>Desarrollador <br/> Front End</span></h1>
            <p>
            Entusiasta por el mundo IT me sumergí en el mundo de la creación digital enfocado en la construccion de experiencias interactivas y funcionales cumpliendo las necesidades del usuario.
            </p>
          </div>
          <img src={fotoPerfil} />
        </div>
      </div>
    </section>
  );
};

export default Header;
