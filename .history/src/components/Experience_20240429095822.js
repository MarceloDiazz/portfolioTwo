import React from "react";
import "../css/experience.css";
import iconEnglish from "../img/english.png";
import iconSpain from "../img/español.png";
import iconPortugal from "../img/portugal.png";

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
            En React soy responsable de toda la aplicación web y en Flutter soy parte de un grupo de trabajo. <br/>
            Enfrenté desafíos técnicos como la optimización de rendimiento y la integración de características complejas, que resolví mediante análisis profundo y la implementación de soluciones innovadoras.
            Me centré en la creacion y optimización de componentes para garantizar una estructura de código limpia y mantenible. 
            </p>
            </div>
          </div>
        </div>
      </div>
      <ul class="tags">
  <li style={{display:"flex"}}><a href="#" class="tag">Traduccion 
  <img src={iconEnglish} height={20}/>
  <img src={iconSpain} height={20}/>
  <img src={iconPortugal} height={20}/>
  </a></li>
  <li><a href="#" class="tag">Drag and Drop (Similar a Trello)</a></li>
  <li><a href="#" class="tag">Manejo de versiones con Git</a></li>
  <li><a href="#" class="tag">Plan de usuario</a></li>
  <li><a href="#" class="tag">Optimizacion de codigo</a></li>
  <li><a href="#" class="tag">Nuevas secciones</a></li>
  <li><a href="#" class="tag">Encuentros semanales para definir proyectos</a></li>
</ul>
    </section>
  );
};

export default Experience;
