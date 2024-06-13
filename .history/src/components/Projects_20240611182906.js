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
            <h4>StyleCraft</h4>
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
