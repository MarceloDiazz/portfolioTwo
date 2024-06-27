import React from "react";
import "../css/about.css";
import aboutPhoto from "../img/foto-about.png";
import aboutTitle from "../img/about-title.png";
import stack from "../img/stack.png";
import js from "../img/js-tag.png";
import react from "../img/react-tag.png";
import typescript from "../img/typescript-tag.png";
import git from "../img/git-tag.png";
import tailwind from "../img/tailwind-tag.png";
import firebase from "../img/firebase-tag.png";
import flutter from "../img/flutter-tag.png";

const About = () => {
  return (
    <section id="about" className="aboutSection contenedor">
      <div className="titleSections">
        <img src={aboutTitle} alt="aboutTitle" />
        <h2>Sobre mí</h2>
      </div>
      <div className="aboutCard">
        <div className="aboutCardPhoto">
          <img src={aboutPhoto} alt="foto-about" />
        </div>
        <div className="aboutCardContent">
          <p>
            Me llamo Marcelo, comencé en el mundo de la programación en
            pandemia, actualmente tengo +2 años de experencia y estoy disponible
            para trabajar.
          </p>
          <p>
          El ajedrez es un juego que me gusta jugar, me hace más hábil para resolver problemas de manera metódica y creativa, y también es uno de mis hobbies.
          </p>
          <p>
          Busco activamente oportunidades en el desarrollo web para aplicar mi experiencia y aprender con nuevos desafíos.
          </p>
          <div className="titleSections">
            <img height={18} src={stack} alt="stack" />
            <h5>Stack</h5>
          </div>
          <ul className="stackList">
            <li className="stackItem">
              JavaScript
              <img height={18} src={js} alt="js" />
            </li>
            <li className="stackItem">
              React JS
              <img height={18} src={react} alt="react" />
            </li>
            <li className="stackItem">
              Typescript
              <img height={18} src={typescript} alt="typescript" />
            </li>
            <li className="stackItem">
              Git
              <img height={20} src={git} alt="git" />
            </li>
            <li className="stackItem">
              Tailwind CSS
              <img height={22} src={tailwind} alt="tailwind" />
            </li>
            <li className="stackItem">
              Firebase
              <img height={20} src={firebase} alt="firebase" />
            </li>
            <li className="stackItem">
              Flutter
              <img height={18} src={flutter} alt="flutter" />
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default About;
