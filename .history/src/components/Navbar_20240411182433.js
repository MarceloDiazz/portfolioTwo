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
    <li><a href="#">Experiencia</a></li>
    <li class="center"><a href="#">Proyectos</a></li>
    <li class="upward"><a href="#">Sobre mí</a></li>
    <li class="forward"><a href="#">Contacto</a></li>
  </ul>
        </nav>
    </div>
  )
}

export default Navbar