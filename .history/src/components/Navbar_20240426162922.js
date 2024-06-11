import React from "react";
import "../css/navbar.css";
import codeIcon from "../img/code-icon.png";
const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="nav-container">
        <a class="brief active" href="#">Home</a>
        <a class="about" href="#about">About</a>
        <a class="project" href="#projects">Projects</a>
        <a class="contact" href="#contact">Contact</a>
    </div>
</nav>
  );
};

export default Navbar;
