import React from 'react'
import "../css/navbar.css"
import codeIcon from "../img/code-icon.png"
const Navbar = () => {
  return (
    <div className='contenedor'>
        <nav className='content-navbar'>
          <div className='logo'>
            <img src={codeIcon} />
          </div>
          <ul class="nav-links">
    <li className='hover-3'><a href="#">Experiencia</a></li>
    <li class="hover-3"><a href="#">Proyectos</a></li>
    <li class="hover-3"><a href="#">Sobre mí</a></li>
    <li class="hover-3"><a href="#">Contacto</a></li>
  </ul>
        </nav>
    </div>
  )
}

export default Navbar