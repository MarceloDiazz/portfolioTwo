import React from "react";
import "../css/experience.css";
import iconEnglish from "../img/english.png";
import iconSpain from "../img/spain.png";
import iconPortugal from "../img/portugal.png";
import iconDrag from "../img/drag.png";
import iconGit from "../img/git.png";
import iconPlanUser from "../img/plan-user.png";
import iconSpeed from "../img/speed.png";
import iconMeeting from "../img/meeting.png";
import iconNew from "../img/new.png";
import experienceIcon from "../img/experience-title.png";

const Experience = () => {
  return (
    <section id="experience" className="contenedor">
      <div className="titleSections">
        <img src={experienceIcon} alt="experienceIcon" />
        <h2>Experiencia Laboral</h2>
      </div>
      <div className="experienceContent">
        <div class="timeline">
          <div class="container right">
            <div class="content-timeline">
              <div className="puesto">
                <h3>Desarrollador Front End</h3>
                <h4>Oryzativa</h4>
                <time>Marzo 2022 - Mayo 2024</time>
              </div>
              <div className="puesto-descripcion">
                <p>
                  <span className="arrowIcon"></span> <span></span>
                  +2 años como desarrollador, he sido responsable del proyecto
                  en mi empresa, utilicé como framework principal ReactJS
                  <br />
                  <br />
                  <span className="arrowIcon"></span> <span></span>
                  Participé en un importante proyecto de migración de aplicaciones web que implicó la transferencia a una nueva arquitectura, lo que resultó en una mejora significativa en la estabilidad y velocidad del sitio.
                  <br />
                  <br />
                  <span className="arrowIcon"></span> <span></span>
                  Realicé gestión de usuarios, determinando los recursos y funcionalidades a las que pueden acceder los usuarios en función de los permisos otorgados.
                  <br />
                  <br />
                  Esto no solo me permitió crecer profesionalmente, sino también
                  fortaleció mis habilidades técnicas y mi capacidad para
                  manejar proyectos complejos con éxito.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul class="tags">
          <li className="tag">
            Traduccion
            <img src={iconEnglish} alt="iconEnglish" />
            <img src={iconSpain} alt="iconSpain" />
            <img src={iconPortugal} alt="iconPortugal" />
          </li>
          <li className="tag">
            Drag and Drop (Similar a Trello)
            <img src={iconDrag} alt="iconDrag" />
          </li>
          <li className="tag">
            Manejo de versiones con Git
            <img src={iconGit} alt="iconGit" />
          </li>
          <li className="tag">
            Plan de usuario
            <img src={iconPlanUser} alt="iconPlanUser" />
          </li>
          <li className="tag">
            Optimizacion de codigo
            <img src={iconSpeed} alt="iconSpeed" />
          </li>
          <li className="tag">
            Nuevas secciones
            <img src={iconNew} alt="iconNew" />
          </li>
          <li className="tag">
            Encuentros semanales para definir proyectos
            <img src={iconMeeting} alt="iconMeeting" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
