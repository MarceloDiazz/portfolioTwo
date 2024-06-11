import React from "react";
import "../css/projects.css";
import projectPrueba from "../img/project-prueba.jpg";

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
            <img src={projectPrueba} />
          </div>
        </div> <div className="card-projects">
          <div className="card-img">
            <img src={projectPrueba} />
          </div>
           <div className="card-description">
            <h3>TITULO</h3>
            <div className="stackProjects">
            TECNOLOGIES
            </div>
            <p>
              Sunt elit ipsum reprehenderit laborum. Labore commodo enim officia
              eu aliquip veniam aliquip reprehenderit ut minim do aute mollit
              pariatur.
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
