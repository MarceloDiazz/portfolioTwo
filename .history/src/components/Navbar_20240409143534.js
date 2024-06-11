import React from 'react'
import "../css/navbar.css"
const Navbar = () => {
  return (
    <div className='contenedor'>
        <nav className='content-navbar'>
            <a href='#' style={{position:"absolute", left:"0"}}></a>
            <a href='#'>Proyectos</a>
            <a href='#'>Experiencia</a>
            <a href='#'>Sobre mí</a>
            <a href='#'>Contacto</a>
        </nav>
    </div>
  )
}

export default Navbar