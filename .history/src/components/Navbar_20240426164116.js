import React from "react";
import "../css/navbar.css";
import codeIcon from "../img/code-icon.png";
const Navbar = () => {
  return (
    <div className="contenedor navbar">
      <nav className="content-navbar">
        <ul className="nav-links">
          <li>
            <a href="#experience" className="experience active">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" className="projects">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" className="about">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contact" className="contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
