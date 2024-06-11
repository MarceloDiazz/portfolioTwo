import React from "react";
import "../css/navbar.css";
import codeIcon from "../img/code-icon.png";
const Navbar = () => {
  return (
    <div className="contenedor navbar">
      <nav className="content-navbar">
        <ul className="nav-links">
          <li>
            <a href="#experience" className="experience active navbarItem">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" className="projects navbarItem">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" className="about navbarItem">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contact" className="contact navbarItem">
              Black
            </a>
          </li>
          <li>
            <a href="#contact" className="navbarItem">
              Idioma
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
