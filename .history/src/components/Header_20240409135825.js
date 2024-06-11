import React from "react";
import fotoPerfil from "../img/foto-perfil.jpg";
import "../css/header.css";
const Header = () => {
  return (
    <section className="contenedor header">
      <div className="card">
        <div className="card-content">
          <div className="card-text">
            <h1>Marcelo Diaz</h1>
            <h1><span>Desarrollador <br/> Front End</span></h1>
            <p>
              Te invito a que veas todas las
              secciones para que puedas conocer mas sobre mi!
            </p>
          </div>
          <img src={fotoPerfil} />
        </div>
      </div>
    </section>
  );
};

export default Header;
