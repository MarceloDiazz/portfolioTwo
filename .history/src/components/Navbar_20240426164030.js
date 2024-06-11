import React from "react";
import "../css/navbar.css";
import codeIcon from "../img/code-icon.png";
const Navbar = () => {
  return (
    <div className="contenedor navbar">
      <nav className="content-navbar">
        <ul className="nav-links">
          <li>
            <a href="#experience" id="active">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" id="active">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" id="active">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contact" id="active">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
