import React from "react";
import "../css/navbar.css";
import codeIcon from "../img/code-icon.png";
const Navbar = () => {
  window.addEventListener("scroll", function(evt){
   console.log("EEE", evt);
});
  return (
    <div className="contenedor navbar">
      <nav className="content-navbar">
        <ul class="nav-links">
          <li>
            <a href="#" className="hover-3">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#" class="hover-3">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#" class="hover-3">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#" class="hover-3">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
