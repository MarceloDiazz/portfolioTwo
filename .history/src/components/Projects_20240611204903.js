import React from "react";
import "../css/projects.css";
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
              <div>

              <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        class="bi bi-google"
        viewBox="0 0 16 16"
      >
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
      </svg>
            <span>Svelte</span>
              </div>
              <div>
            <span>TypeScript</span>
              </div>
              <div>
            <span>Tailwind CSS</span>
              </div>
            </div>
            <p>
            Con esta herramienta, podes transformar tus imágenes de manera rápida y sencilla. Desde eliminar fondos hasta rotar y redondear bordes, tenemos diferentes tipos de efectos para dar vida a tus imágenes.
            </p>
            <div className="buttonsProject">
            2 BOTONES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
