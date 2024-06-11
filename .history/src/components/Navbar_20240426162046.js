import React from "react";
import "../css/navbar.css";
import codeIcon from "../img/code-icon.png";
const Navbar = () => {
  window.onload = function() {
    const sections = document.querySelectorAll("section");
    const navA = document.querySelectorAll(".content-navbar .nav-links li");
    console.log(sections);
    console.log(navA);
  
    function updateActiveSection() {
      let maxVisibleArea = 0;
      let activeSection = null;
  
      sections.forEach((section) => {
        const visibleArea = getVisibleArea(section);
  
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          activeSection = section.getAttribute("id");
        }
      });
  
      navA.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(activeSection)) {
          a.classList.add("active");
        }
      });
    }
  
    function getVisibleArea(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
      return visibleHeight * visibleWidth;
    }
  
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);
  };
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
