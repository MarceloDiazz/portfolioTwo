import React from 'react'
import fotoPerfil from "../img/foto-perfil.jpg"
import "../css/header.css"
const Header = () => {
  return (
    <section className=" contenedor sobre-nosotros">
    <div className="contenedor sobre-nosotros-grid">
      {/* ahora el grid tiene un solo elemento hijo, entonces va a ubicar bien el texto en una columna */}
      <div className="texto-nosotros">
        <h2>Sobre Nostros</h2>
        <p>
          Sint occaecat eiusmod deserunt occaecat commodo. Mollit elit non
          enim eu fugiat ut do sunt cupidatat. Consectetur in deserunt dolor
          dolor.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Header