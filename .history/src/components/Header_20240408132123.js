import React from 'react'
import fotoPerfil from "../img/foto-perfil.jpg"
import "../css/header.css"
const Header = () => {
  return (
    <section className='contenedor'>
    <div className='header-categorias'>
    <div>
    <h1>Nisi non ipsum Lorem aliquip commodo excepteur officia non commodo id ad ea aliqua consequat. Deserunt magna sunt cupidatat nulla enim do irure magna aliqua est et ex. Consectetur occaecat nostrud dolore tempor excepteur ad. Exercitation qui aliqua anim velit anim duis adipisicing culpa nostrud fugiat ullamco labore. Ut irure Lorem minim aliqua irure. Deserunt velit exercitation culpa aliqua voluptate non incididunt.
    </h1>
    </div>
    <div>
    <img src={fotoPerfil}/>
    </div>
    </div>
    </section>
  )
}

export default Header