import React from "react";
import "../css/navbar.css";
import codeIcon from "../img/code-icon.png";
const Navbar = () => {
  return (
    <div className="contenedor navbar">
      <nav className="content-navbar">
        <ul className="nav-links">
          <li>
            <a href="#experience" className="experience active hover-3">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" className="projects hover-3">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" className="about hover-3">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contact" className="contact hover-3">
              CV
            </a>
          </li>
          <li>
            <a href="#contact" className="contact hover-3">
              Black
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
