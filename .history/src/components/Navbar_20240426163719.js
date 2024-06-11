import React from "react";
import "../css/navbar.css";
import codeIcon from "../img/code-icon.png";
const Navbar = () => {
  return (
    <div className="contenedor navbar">
      <nav className="content-navbar">
        <ul className="nav-links">
          <li>
            <a href="#experience active" className="hover-3">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" className="hover-3">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" className="hover-3">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contact" className="hover-3">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
