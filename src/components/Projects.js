import React from "react";
import "../css/projects.css";
import {
  SvelteSvg,
  TypeScriptSvg,
  TailwindSvg,
  ViteSvg,
} from "../img/svg/svg-projects";
import project from "../img/project.jpeg";
import outlineIconGithub from "../img/outline-icon-github.png";
import iconLink from "../img/icon-link.png";
import projectsTitle from "../img/project-title.png";

const Projects = () => {
  return (
    <section id="projects" className="contenedor projectsSection">
      <div className="titleSections">
        <img src={projectsTitle} alt="projectsTitle" />
        <h2>Proyectos</h2>
      </div>
      <div className="cards">
        <div className="card-projects">
          <div className="card-img">
            <div className="buttonsProject">
              <a href="https://github.com/MarceloDiazz/styleCraft">
                <img src={outlineIconGithub} alt="outlineIconGithub" />
                Código
              </a>
              <a href="https://style-craft-zeta.vercel.app/">
                <img src={iconLink} alt="iconLink" />
                Demo
              </a>
            </div>
            <img src={project} alt="project" />
          </div>
          <div className="card-description">
            <h3>StyleCraft</h3>
            <div className="stackProjects">
              <div style={{ background: "#ff3e008a" }}>
                <span>Svelte</span>
                <SvelteSvg />
              </div>
              <div style={{ background: "#3178c691" }}>
                <span>TypeScript</span>
                <TypeScriptSvg />
              </div>
              <div style={{ background: "#9b5ffe" }}>
                <span> Vite </span>
                <ViteSvg />
              </div>
              <div style={{ background: "#38bdf891" }}>
                <span>Tailwind CSS</span>
                <TailwindSvg />
              </div>
            </div>
            <p>
            Esta herramienta simplifica el proceso de transformar tus imágenes con rapidez y sencillez. puede crear una variedad de efectos, que incluyen rotar y redondear bordes, así como eliminar fondos, para ayudarlo a darle vida a sus imágenes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
