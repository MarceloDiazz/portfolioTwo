import React from "react";
import "../css/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="contenedor" >
      <h1>
        <span className="arrowIconTitle"></span> <span></span>
        Experience
      </h1>
      <div class="timeline">
        <div class="container right">
          <div class="content-timeline">
            <div className="puesto">
            <h2>React and Flutter Developer</h2>
            <h2>Oryzativa</h2>
            <h4>2022 - Actualidad...</h4>
            </div>
            <div className="puesto-descripcion">
            <p>
            En React, me centré en la creación de componentes modulares y escalables para garantizar una estructura de código limpia y mantenible. En Flutter, aproveché la rápida iteración y la consistencia multiplataforma para desarrollar interfaces de usuario sorprendentes en poco tiempo.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
