import React from "react";
import "../css/experience.css";
import iconEnglish from "../img/english.png";
import iconSpain from "../img/spain.png";
import iconPortugal from "../img/portugal.png";
import iconDrag from "../img/drag.png";
import iconGit from "../img/git.png";
import iconPlanUser from "../img/planUser.png";
import iconSpeed from "../img/speed.png";
import iconMeeting from "../img/meeting.png";

const Experience = () => {
  return (
    <section id="experience" className="contenedor">
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
                En React soy responsable de toda la aplicación web y en Flutter
                soy parte de un grupo de trabajo. <br />
                Enfrenté desafíos técnicos como la optimización de rendimiento y
                la integración de características complejas, que resolví
                mediante análisis profundo y la implementación de soluciones
                innovadoras. Me centré en la creacion y optimización de
                componentes para garantizar una estructura de código limpia y
                mantenible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul class="tags">
        <li>
          <a href="#" class="tag">
            Traduccion
            <img src={iconEnglish} />
            <img src={iconSpain} />
            <img src={iconPortugal} />
          </a>
        </li>
        <li>
          <a href="#" class="tag">
            Drag and Drop (Similar a Trello)
            <img src={iconDrag} />
          </a>
        </li>
        <li>
          <a href="#" class="tag">
            Manejo de versiones con Git
            <img src={iconGit} />
          </a>
        </li>
        <li>
          <a href="#" class="tag">
            Plan de usuario
            <img src={iconPlanUser} />
          </a>
        </li>
        <li>
          <a href="#" class="tag">
            Optimizacion de codigo
            <img src={iconSpeed} />
          </a>
        </li>
        <li>
          <a href="#" class="tag">
            Nuevas secciones
            <img src={iconDrag} />
          </a>
        </li>
        <li>
          <a href="#" class="tag">
            Encuentros semanales para definir proyectos
            <img src={iconMeeting} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
