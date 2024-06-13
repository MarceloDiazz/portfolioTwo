import React from "react";
import "../css/projects.css";
import {
  SvelteSvgIcon,
  TypeScriptSvgIcon,
  TailwindSvgIcon,
} from "../img/svg/svg-projects";
import project from "../img/project.jpeg";

const Projects = () => {
  return (
    <section id="projects" className="contenedor projectsSection">
      <h2>
        <span className="arrowIconTitle"></span> <span></span>
        Proyectos
      </h2>
      <div className="cards">
        <div className="card-projects">
          <div className="card-img">
            <img src={project} />
          </div>
          <div className="card-description">
            <h3>StyleCraft</h3>
            <div className="stackProjects">
              <div style={{background:"#ff3e008a"}}>
                <SvelteSvgIcon />
                <span>Svelte</span>
              </div>
              <div style={{background:"#3178c691"}}>

                <TypeScriptSvgIcon />

                <span>TypeScript</span>
              </div>
              <div style={{background:"#ff3e008a"}}>

                <TailwindSvgIcon />

                <span>Tailwind CSS</span>
              </div>
            </div>
            <p>
              Con esta herramienta, podes transformar tus imágenes de manera
              rápida y sencilla. Desde eliminar fondos hasta rotar y redondear
              bordes, tenemos diferentes tipos de efectos para dar vida a tus
              imágenes.
            </p>
            <div className="buttonsProject">2 BOTONES</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
