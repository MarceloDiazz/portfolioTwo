import React from 'react'
import fotoPerfil from "../img/foto-perfil.jpg"
import "../css/header.css"
const Header = () => {
  return (
    <section className='contenedor'>
    <div className='header-categorias'>
    <div>
    <h1>
        Hola!, mi nombre es Marcelo Diaz
    </h1>
    <h2>
        Soy desarrollador Front End, te invito a que veas todas las secciones para que puedas conocer mas sobre mi
    </h2>
    </div>
    <div>
    <img src={fotoPerfil}/>
    </div>
    </div>
    </section>
  )
}

export default Header